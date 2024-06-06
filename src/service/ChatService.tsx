import { AxiosResponse } from "axios";
import { encryptMessage } from "@/config/crypto";

import { API } from "@/config/axios";

import useChatState from "@/store/chatStore";

const ChatService = () => {
  const URL = "/api/v1/chat";

  const setChat = useChatState((state) => state.setChat);
  const addGptMessage = useChatState((state) => state.addGptMessage);
  const refreshChat = useChatState((state) => state.refreshChat);

  //All chat load
  const loadAllChat = async () => {
    const { data } = (await API.get(`${URL}`)) as AxiosResponse<Chat.Chat>;
    setChat(data);
  };

  //New chat add (res is chat respense)
  const postUserMessage = async (body: Chat.AddChatReqDto) => {
    body.content = encryptMessage(body.content);

    const { data } = (await API.post(
      `${URL}`,
      body
    )) as AxiosResponse<Chat.AddChatResDto>;

    addGptMessage(data);
  };

  //Chat reset

  //Info refresh
  const refreshInfo = async () => {
    await API.delete(`${URL}`);

    refreshChat();
  };

  return { postUserMessage, loadAllChat, refreshInfo };
};

export default ChatService;
