import { QueryClient, isServer } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ToastAlert } from "./toast";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
        retry: (failureCount, error: Error) => {
          const axiosError = error as AxiosError<unknown>;

          // Check if offline
          if (!navigator.onLine) {
            ToastAlert.error(
              "You're offline. Please check your internet connection."
            );
            return false;
          }

          // Don't retry on 4xx errors except 408, 429
          if (
            axiosError?.response?.status &&
            axiosError?.response?.status >= 400 &&
            axiosError?.response?.status < 500
          ) {
            if (
              axiosError?.response?.status === 408 ||
              axiosError?.response?.status === 429
            ) {
              return failureCount < 2;
            }
            return false;
          }
          // Retry up to 2 times for other errors
          return failureCount < 2;
        },
        refetchOnWindowFocus: false,
        networkMode: "online", // Only run queries when online
      },
      mutations: {
        retry: () => {
          // Check if offline
          if (!navigator.onLine) {
            ToastAlert.error(
              "You're offline. Please check your internet connection."
            );
            return false;
          }

          return false; // Don't retry mutations by default
        },
        networkMode: "online", // Only run mutations when online
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
};
