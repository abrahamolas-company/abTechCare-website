export default class ApiRoutes {
  static BASE_URL_DEV: string = "https://4a38-169-255-124-3.ngrok-free.app";

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

}
