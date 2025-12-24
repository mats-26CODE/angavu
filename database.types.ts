export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      business: {
        Row: {
          business_type: string
          created_at: string | null
          id: string
          location: string | null
          name: string
          tin: string | null
          user_id: string | null
          vat_status: Database["public"]["Enums"]["vat_status"]
        }
        Insert: {
          business_type: string
          created_at?: string | null
          id?: string
          location?: string | null
          name: string
          tin?: string | null
          user_id?: string | null
          vat_status?: Database["public"]["Enums"]["vat_status"]
        }
        Update: {
          business_type?: string
          created_at?: string | null
          id?: string
          location?: string | null
          name?: string
          tin?: string | null
          user_id?: string | null
          vat_status?: Database["public"]["Enums"]["vat_status"]
        }
        Relationships: [
          {
            foreignKeyName: "business_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      expense_category: {
        Row: {
          id: string
          is_vat_eligible: boolean | null
          name: string
        }
        Insert: {
          id?: string
          is_vat_eligible?: boolean | null
          name: string
        }
        Update: {
          id?: string
          is_vat_eligible?: boolean | null
          name?: string
        }
        Relationships: []
      }
      expense_entry: {
        Row: {
          amount: number
          business_id: string | null
          category_id: string | null
          created_at: string | null
          date: string
          id: string
          reporting_period_id: string | null
          vat_amount: number | null
        }
        Insert: {
          amount: number
          business_id?: string | null
          category_id?: string | null
          created_at?: string | null
          date?: string
          id?: string
          reporting_period_id?: string | null
          vat_amount?: number | null
        }
        Update: {
          amount?: number
          business_id?: string | null
          category_id?: string | null
          created_at?: string | null
          date?: string
          id?: string
          reporting_period_id?: string | null
          vat_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "expense_entry_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "business"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expense_entry_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "expense_category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expense_entry_reporting_period_id_fkey"
            columns: ["reporting_period_id"]
            isOneToOne: false
            referencedRelation: "reporting_period"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          auth_type: Database["public"]["Enums"]["auth_type"][]
          created_at: string | null
          email: string | null
          full_name: string
          id: string
          image_url: Json | null
          is_active: boolean
          is_deleted: boolean
          notification_token: string | null
          phone_number: string
        }
        Insert: {
          auth_type: Database["public"]["Enums"]["auth_type"][]
          created_at?: string | null
          email?: string | null
          full_name: string
          id?: string
          image_url?: Json | null
          is_active?: boolean
          is_deleted?: boolean
          notification_token?: string | null
          phone_number: string
        }
        Update: {
          auth_type?: Database["public"]["Enums"]["auth_type"][]
          created_at?: string | null
          email?: string | null
          full_name?: string
          id?: string
          image_url?: Json | null
          is_active?: boolean
          is_deleted?: boolean
          notification_token?: string | null
          phone_number?: string
        }
        Relationships: []
      }
      report: {
        Row: {
          business_id: string | null
          file_url: string
          generated_at: string | null
          id: string
          reporting_period_id: string | null
        }
        Insert: {
          business_id?: string | null
          file_url: string
          generated_at?: string | null
          id?: string
          reporting_period_id?: string | null
        }
        Update: {
          business_id?: string | null
          file_url?: string
          generated_at?: string | null
          id?: string
          reporting_period_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "report_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "business"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_reporting_period_id_fkey"
            columns: ["reporting_period_id"]
            isOneToOne: false
            referencedRelation: "reporting_period"
            referencedColumns: ["id"]
          },
        ]
      }
      reporting_period: {
        Row: {
          business_id: string | null
          created_at: string | null
          currency: string | null
          id: string
          month: number
          status: Database["public"]["Enums"]["period_status"]
          year: number
        }
        Insert: {
          business_id?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          month: number
          status?: Database["public"]["Enums"]["period_status"]
          year: number
        }
        Update: {
          business_id?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          month?: number
          status?: Database["public"]["Enums"]["period_status"]
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "reporting_period_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "business"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_entry: {
        Row: {
          amount: number
          business_id: string | null
          channel: Database["public"]["Enums"]["sales_channel"] | null
          created_at: string | null
          date: string
          id: string
          reporting_period_id: string | null
        }
        Insert: {
          amount: number
          business_id?: string | null
          channel?: Database["public"]["Enums"]["sales_channel"] | null
          created_at?: string | null
          date?: string
          id?: string
          reporting_period_id?: string | null
        }
        Update: {
          amount?: number
          business_id?: string | null
          channel?: Database["public"]["Enums"]["sales_channel"] | null
          created_at?: string | null
          date?: string
          id?: string
          reporting_period_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_entry_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "business"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_entry_reporting_period_id_fkey"
            columns: ["reporting_period_id"]
            isOneToOne: false
            referencedRelation: "reporting_period"
            referencedColumns: ["id"]
          },
        ]
      }
      statistics: {
        Row: {
          created_at: string
          id: string
          total_admins: number
          total_businesses: number
          total_expense_reports_generated: number
          total_revenue: number
          total_sales_reports_generated: number
          total_subscribed_users: number
          total_users: number
        }
        Insert: {
          created_at?: string
          id?: string
          total_admins?: number
          total_businesses?: number
          total_expense_reports_generated?: number
          total_revenue?: number
          total_sales_reports_generated?: number
          total_subscribed_users?: number
          total_users?: number
        }
        Update: {
          created_at?: string
          id?: string
          total_admins?: number
          total_businesses?: number
          total_expense_reports_generated?: number
          total_revenue?: number
          total_sales_reports_generated?: number
          total_subscribed_users?: number
          total_users?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_by_phone: {
        Args: { phone_number: string }
        Returns: {
          id: string
          phone: string
        }[]
      }
      set_confirmation: {
        Args: { code: string; phone_number: string }
        Returns: string
      }
    }
    Enums: {
      auth_type: "Google" | "Phone" | "Email"
      period_status: "OPEN" | "CLOSED"
      sales_channel: "CASH" | "MOBILE" | "BANK"
      vat_status: "VAT" | "NON_VAT"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      auth_type: ["Google", "Phone", "Email"],
      period_status: ["OPEN", "CLOSED"],
      sales_channel: ["CASH", "MOBILE", "BANK"],
      vat_status: ["VAT", "NON_VAT"],
    },
  },
} as const
