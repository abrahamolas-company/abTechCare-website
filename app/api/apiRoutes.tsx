export default class ApiRoutes {
  static BASE_URL_DEV: string = "https://be76-169-255-124-5.ngrok-free.app";

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

    // Api route to update engineer profile
    static UpdateEngineerProfile: string = "api/v1/engineers/update-engineer-password";

    // Api route to update user profile
    static UpdateUserProfile: string = "api/v1/users";

    // Api route to create repair order
    static CreateRepairOrder: string = "api/v1/repair-order";
    // Api route to fetch user repair order
    static fetchUserRepairOrders: string = "api/v1/repair-order/user";

}
