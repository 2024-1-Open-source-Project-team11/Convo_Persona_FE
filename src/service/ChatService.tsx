import { AxiosResponse } from "axios";

import { API } from "@/config/axios";

import useChatState from "@/store/chatStore";

const ChatService = () => {
  const URL = "api/v1/chat";

  const setChat = useChatState((state) => state.setChat);
  const addResiveMessage = useChatState((state) => state.addResiveMessage);

  //All chat load
  const loadAllChat = async () => {
    const { data } = (await API.get(`${URL}`)) as AxiosResponse<Chat.Chat>;

    console.log(data);

    setChat(data);
  };

  //New chat add (res is chat respense)
  const postUserMessage = async (body: Chat.AddChatReqDto) => {
    const { data } = (await API.post(
      `${URL}`,
      body
    )) as AxiosResponse<Chat.AddChatResDto>;

    console.log(data);

    addResiveMessage(data);
  };

  //Chat reset

  //Info reset

  return { postUserMessage, loadAllChat };
};

export default ChatService;
