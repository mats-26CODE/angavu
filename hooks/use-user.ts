"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

/**
 * Hook to get the current user from Supabase session
 * @returns The current user or null if not authenticated
 */
export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    // Get initial user
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { user, loading };
};

/**
 * Hook to check if user is authenticated
 * @returns boolean indicating if user is authenticated
 */
export const useIsAuthenticated = () => {
  const { user } = useUser();
  return !!user;
};

/**
 * Hook to logout the current user
 * @returns logout function
 */
export const useLogout = () => {
  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    // Redirect to login page
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  };

  return logout;
};
