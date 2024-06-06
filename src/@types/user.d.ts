declare namespace User {
  //DTO
  export interface SignInReqDto {
    name: string;
    password: string;
  }

  export interface SignInResDto {
    id: string;
  }

  export interface SignUpReqDto {
    name: string;
    email: string;
    password: string;
  }

  export interface SignUpResDto {
    id: string;
  }

  /* export interface SignInResDto {
    accessToken: string;
    refreshToken: string;
  } */

  //Form
  export interface SignUpForm {
    name: string;
    email: string;
    password: string;
    passwordCheck: string;
  }

  //Store
  export interface userStore {
    isSignIn: boolean;
    userId: string;
    signIn: (id: string) => void;
  }

  export interface LayoutStore {
    message: false | string;
    setMessage: (message: false | string) => void;
  }
}
