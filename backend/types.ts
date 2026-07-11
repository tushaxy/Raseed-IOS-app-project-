/* eslint-disable */
// DO NOT EDIT
// Run migrations to regenerate.

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
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      business_profiles: {
        Row: {
          account_number: string | null
          address: string | null
          bank_name: string | null
          city: string | null
          created_at: string
          currency: string
          default_tax_percent: number
          email: string | null
          gst_number: string | null
          id: number
          ifsc_code: string | null
          invoice_counter: number
          invoice_notes: string | null
          logo_url: string | null
          owner_name: string
          pan_number: string | null
          phone: string
          pincode: string | null
          shop_name: string
          state: string | null
          terms_and_conditions: string | null
          updated_at: string
          upi_id: string | null
          user_id: string
        }
        Insert: {
          account_number?: string | null
          address?: string | null
          bank_name?: string | null
          city?: string | null
          created_at?: string
          currency?: string
          default_tax_percent?: number
          email?: string | null
          gst_number?: string | null
          id?: never
          ifsc_code?: string | null
          invoice_counter?: number
          invoice_notes?: string | null
          logo_url?: string | null
          owner_name: string
          pan_number?: string | null
          phone: string
          pincode?: string | null
          shop_name: string
          state?: string | null
          terms_and_conditions?: string | null
          updated_at?: string
          upi_id?: string | null
          user_id: string
        }
        Update: {
          account_number?: string | null
          address?: string | null
          bank_name?: string | null
          city?: string | null
          created_at?: string
          currency?: string
          default_tax_percent?: number
          email?: string | null
          gst_number?: string | null
          id?: never
          ifsc_code?: string | null
          invoice_counter?: number
          invoice_notes?: string | null
          logo_url?: string | null
          owner_name?: string
          pan_number?: string | null
          phone?: string
          pincode?: string | null
          shop_name?: string
          state?: string | null
          terms_and_conditions?: string | null
          updated_at?: string
          upi_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          business_profile_id: number
          created_at: string
          description: string | null
          id: number
          name: string
        }
        Insert: {
          business_profile_id: number
          created_at?: string
          description?: string | null
          id?: never
          name: string
        }
        Update: {
          business_profile_id?: number
          created_at?: string
          description?: string | null
          id?: never
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_business_profile_id_fkey"
            columns: ["business_profile_id"]
            isOneToOne: false
            referencedRelation: "business_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          address: string | null
          business_profile_id: number
          created_at: string
          email: string | null
          gst_number: string | null
          id: number
          is_favorite: boolean
          name: string
          notes: string | null
          outstanding_balance: number
          phone: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          business_profile_id: number
          created_at?: string
          email?: string | null
          gst_number?: string | null
          id?: never
          is_favorite?: boolean
          name: string
          notes?: string | null
          outstanding_balance?: number
          phone?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          business_profile_id?: number
          created_at?: string
          email?: string | null
          gst_number?: string | null
          id?: never
          is_favorite?: boolean
          name?: string
          notes?: string | null
          outstanding_balance?: number
          phone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "customers_business_profile_id_fkey"
            columns: ["business_profile_id"]
            isOneToOne: false
            referencedRelation: "business_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_items: {
        Row: {
          discount_percent: number
          gst_percent: number
          id: number
          invoice_id: number
          product_id: number | null
          product_name: string
          quantity: number
          total_amount: number
          unit_price: number
        }
        Insert: {
          discount_percent?: number
          gst_percent?: number
          id?: never
          invoice_id: number
          product_id?: number | null
          product_name: string
          quantity?: number
          total_amount?: number
          unit_price?: number
        }
        Update: {
          discount_percent?: number
          gst_percent?: number
          id?: never
          invoice_id?: number
          product_id?: number | null
          product_name?: string
          quantity?: number
          total_amount?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          business_profile_id: number
          created_at: string
          customer_address: string | null
          customer_id: number | null
          customer_name: string
          customer_phone: string | null
          discount_amount: number
          due_date: string | null
          grand_total: number
          id: number
          invoice_date: string
          invoice_number: string
          notes: string | null
          paid_amount: number
          payment_mode: string | null
          shipping_amount: number
          status: string
          subtotal: number
          tax_amount: number
          updated_at: string
        }
        Insert: {
          business_profile_id: number
          created_at?: string
          customer_address?: string | null
          customer_id?: number | null
          customer_name: string
          customer_phone?: string | null
          discount_amount?: number
          due_date?: string | null
          grand_total?: number
          id?: never
          invoice_date: string
          invoice_number: string
          notes?: string | null
          paid_amount?: number
          payment_mode?: string | null
          shipping_amount?: number
          status?: string
          subtotal?: number
          tax_amount?: number
          updated_at?: string
        }
        Update: {
          business_profile_id?: number
          created_at?: string
          customer_address?: string | null
          customer_id?: number | null
          customer_name?: string
          customer_phone?: string | null
          discount_amount?: number
          due_date?: string | null
          grand_total?: number
          id?: never
          invoice_date?: string
          invoice_number?: string
          notes?: string | null
          paid_amount?: number
          payment_mode?: string | null
          shipping_amount?: number
          status?: string
          subtotal?: number
          tax_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_business_profile_id_fkey"
            columns: ["business_profile_id"]
            isOneToOne: false
            referencedRelation: "business_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          barcode: string | null
          brand: string | null
          business_profile_id: number
          category_id: number | null
          created_at: string
          description: string | null
          gst_percent: number
          hsn_code: string | null
          id: number
          image_url: string | null
          is_archived: boolean
          minimum_stock: number
          mrp: number | null
          name: string
          purchase_price: number
          selling_price: number
          sku: string | null
          stock_quantity: number
          unit: string
          updated_at: string
        }
        Insert: {
          barcode?: string | null
          brand?: string | null
          business_profile_id: number
          category_id?: number | null
          created_at?: string
          description?: string | null
          gst_percent?: number
          hsn_code?: string | null
          id?: never
          image_url?: string | null
          is_archived?: boolean
          minimum_stock?: number
          mrp?: number | null
          name: string
          purchase_price?: number
          selling_price?: number
          sku?: string | null
          stock_quantity?: number
          unit?: string
          updated_at?: string
        }
        Update: {
          barcode?: string | null
          brand?: string | null
          business_profile_id?: number
          category_id?: number | null
          created_at?: string
          description?: string | null
          gst_percent?: number
          hsn_code?: string | null
          id?: never
          image_url?: string | null
          is_archived?: boolean
          minimum_stock?: number
          mrp?: number | null
          name?: string
          purchase_price?: number
          selling_price?: number
          sku?: string | null
          stock_quantity?: number
          unit?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_business_profile_id_fkey"
            columns: ["business_profile_id"]
            isOneToOne: false
            referencedRelation: "business_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          id: string
          name: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          id: string
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      user_id: { Args: never; Returns: string }
    }
    Enums: {
      [_ in never]: never
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
    Enums: {},
  },
} as const
