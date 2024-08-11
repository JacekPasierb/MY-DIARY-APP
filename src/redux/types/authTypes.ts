export interface IAuthState {
    user: {
      userId: null | string;
      login: null | any;
      email: null | string;
    };
    token: null | any;
    isLoggedIn: boolean;
    error: string | null;
    isAuth: boolean;
    isRefreshing: boolean;
  }
  export interface IUser {
    login: string;
    email: string;
    password: string;
  
    userId: string;
  }
  
  export interface IAuthResponse {
    status: string;
    code: number;
    data: {
      token: string;
      user: Omit<IUser, "password">;
    };
  }