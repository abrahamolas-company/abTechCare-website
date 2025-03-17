export default class ApiRoutes {
  static BASE_URL_DEV: string = "https://ad34-129-18-228-254.ngrok-free.app";

  /**
    * Api routes to register new user
    */
  static RegisterUser: string = "api/v1/users/create-user";

  /**
   * Api routes to login user
   */
  static LoginUser: string = "api/v1/auth/login";

  /**
   * Api routes to login engineer
   */
  static LoginEngineer: string = "api/v1/auth/login/engineer";

  /**
   * Api routes to logout
   */
  static Logout: string = "api/v1/auth/logout";

  /**
   * Api routes to register new engineer
   */
  static RegisterEngineer: string = "api/v1/engineers/create-engineer";


    /**
     * Api routes to update engineer
     */
    static UpdateEngineer: string = "api/v1/engineers/update-engineer";
    
    // Api route for forgot password
    static ForgotPassword: string = "api/v1/auth/admins/reset-password/initiate";

    // Api route to reset password
    static ResetPassword: string = "api/v1/auth/admins/reset-password";

}
