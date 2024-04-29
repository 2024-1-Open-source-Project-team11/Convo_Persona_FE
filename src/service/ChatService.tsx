import { AxiosResponse } from "axios";

import { API } from "@/config/axios";

const ChatService = () => {
  const URL = "api/v1/chat";

  //All chat load
  const loadAllChat = async () => {
    const {
      data: { message },
    } = (await API.get(`${URL}`)) as AxiosResponse<Chat.LoadAllChatResDto>;

    console.log(message);
  };

  //New chat add (res is chat respense)

  //Chat reset

  //Info reset

  /* const signin = async (body: User.SignInReqDto) => {
    const {
      data: { accessToken, refreshToken },
    } = (await API.post(
      `${URL}/sign-in`,
      body
    )) as AxiosResponse<User.SignInResDto>;

    setAccess(accessToken);
    storeRefresh(refreshToken);
  }; */

  return [loadAllChat];
};

export default ChatService;
