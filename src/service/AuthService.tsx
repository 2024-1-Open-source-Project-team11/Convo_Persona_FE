import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

import { API, setAccess } from "@/config/axios";
import { PAGE_URL } from "@/config/path";

import useUserState from "@/store/userStore";

const AuthService = () => {
  const setId = useUserState((state) => state.signIn);
  const navigate = useNavigate();

  const URL = "/api/v1/user";

  const signin = async (body: User.SignInReqDto) => {
    const {
      data: { id },
    } = (await API.post(
      `${URL}/sign-in`,
      body
    )) as AxiosResponse<User.SignInResDto>;

    setAccess(id);
    setId(id);

    navigate(PAGE_URL.Chat);
  };

  const signUp = async (body: User.SignUpReqDto) => {
    const {
      data: { id },
    } = (await API.post(
      `${URL}/sign-up`,
      body
    )) as AxiosResponse<User.SignInResDto>;

    setAccess(id);
    setId(id);

    navigate(PAGE_URL.Chat);
  };

  return { signin, signUp };
};

export default AuthService;
