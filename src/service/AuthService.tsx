import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

import { API, setAccess } from "@/config/axios";
import { PAGE_URL } from "@/config/path";

import useUserState from "@/store/userStore";
import useLayoutState from "@/store/layoutStore";

const AuthService = () => {
  const setId = useUserState((state) => state.signIn);
  const setMessage = useLayoutState((state) => state.setMessage);
  const navigate = useNavigate();

  const URL = "/api/v1/user";

  const signin = async (body: User.SignInReqDto) => {
    try {
      const { data } = (await API.post(
        `${URL}/sign-in`,
        body
      )) as AxiosResponse<User.SignInResDto>;

      setAccess(data.id);
      setId(data.id);

      navigate(PAGE_URL.Chat);
    } catch {
      setMessage("로그인 정보가 잘못 되었습니다.");
    }
  };

  const signUp = async (body: User.SignUpReqDto) => {
    try {
      const {
        data: { id },
      } = (await API.post(
        `${URL}/sign-up`,
        body
      )) as AxiosResponse<User.SignInResDto>;

      setAccess(id);
      setId(id);

      navigate(PAGE_URL.Chat);
    } catch {
      setMessage("이미 등록된 이메일입니다.");
    }
  };

  return { signin, signUp };
};

export default AuthService;
