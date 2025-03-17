export type ForgotPasswordRequest = {
    email: string;
  };

  export type ResetPasswordRequest = {
    token: string;
    email: string;
    password: string;
  };