// Global type definitions

declare global {
  // Auth Types
  type LoginRequest = {
    email?: string;
    phone?: string;
    password: string;
  };

  type RegisterRequest = {
    name: string;
    email?: string;
    phone?: string;
    password: string;
  };

  type VerifyOtpRequest = {
    phone: string;
    otp: string;
  };

  type SendOtpRequest = {
    phone: string;
  };

  type SendOtpResponse = {
    message: string;
    success: boolean;
  };

  type GoogleOAuthRequest = {
    idToken: string;
    accessToken?: string;
  };

  type User = {
    id: string;
    email?: string;
    phone?: string;
    name?: string;
    [key: string]: unknown;
  };

  type LoginResponse = {
    user: User;
    accessToken: string;
  };

  type RegisterResponse = {
    user: User;
    message: string;
    requiresOtp?: boolean;
  };

  type VerifyOtpResponse = {
    user: User;
    accessToken: string;
  };

  // Google OAuth types
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
          }) => void;
          prompt: (
            callback: (notification: {
              isNotDisplayed: () => boolean;
              isSkippedMoment: () => boolean;
            }) => void
          ) => void;
        };
        oauth2: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: { access_token: string }) => void;
          }) => {
            requestAccessToken: () => void;
          };
        };
      };
    };
  }
  // Auth Types
  type LoginRequest = {
    email?: string;
    phone?: string;
    password: string;
  };

  type RegisterRequest = {
    name: string;
    email?: string;
    phone?: string;
    password: string;
  };

  type VerifyOtpRequest = {
    phone: string;
    otp: string;
  };

  type SendOtpRequest = {
    phone: string;
  };

  type SendOtpResponse = {
    message: string;
    success: boolean;
  };

  type GoogleOAuthRequest = {
    idToken: string;
    accessToken?: string;
  };

  type User = {
    id: string;
    email?: string;
    phone?: string;
    name?: string;
    [key: string]: unknown;
  };

  type LoginResponse = {
    user: User;
    accessToken: string;
  };

  type RegisterResponse = {
    user: User;
    message: string;
    requiresOtp?: boolean;
  };

  type VerifyOtpResponse = {
    user: User;
    accessToken: string;
  };

  type CurrencyConfig = {
    code?: string; // -> ISO currency code (e.g., "TZS")
    symbol?: string; // -> Custom symbol (e.g., "$")
    decimalDigits?: number; // -> Decimal places (default: 2)
    symbolPosition?: "left" | "right"; // -> currency symbol position (default: 'left')
    spaceBetween?: boolean; // -> Add space (default: false)
    compact?: boolean; // Enable K/M/B/T formatting (default: false)
    compactThreshold?: number; // Minimum number for compaction (default: 1_000)
  };

  type DateFormatPreset =
    | "DB_TIMESTAMP" // 'YYYY-MM-DD HH:mm:ss' (database format)
    | "SHORT_DATE" // 'MM/DD/YYYY',
    | "LONG_DATE" // 'MMMM D, YYYY'
    | "DATETIME" // 'MM/DD/YYYY h:mm A'
    | "TIME_12HR" // 'h:mm A'
    | "ISO8601" // ISO format
    | "HUMAN_READABLE" // 'MMM D, YYYY [at] h:mm A'
    | "CALENDAR_DAY" // 'dddd, MMMM D' (e.g., "Monday, January 5")
    | string;

  type FormatDateOptions = {
    inputFormat?: string; // Required if input isn't ISO8601 or JS Date
    timezone?: string; // Default: 'UTC' (important for server dates)
    fallback?: string; // Default: 'Invalid date'
  };
}

export {};
