import { create } from "zustand";
import { decryptMessage } from "@/config/crypto";

const useChatState = create<Chat.ChatStore>((set) => ({
  //State
  chat: {
    id: undefined,
    message: [],
  },

  //Set function
  setChat: (chat: Chat.Chat) => {
    const decryptMessages: Chat.Message[] = [];
    chat.message.map((message) => {
      decryptMessages.push({
        id: message.id,
        sender: message.sender,
        content: decryptMessage(message.content),
        mbti: message.mbti,
      });
    });
    set(() => ({ chat: { id: chat.id, message: decryptMessages } }));
  },

  addUserMessage: (content: string) => {
    set((state) => {
      state.chat.message.unshift({
        id: undefined,
        sender: "USER",
        content: content,
        mbti: "UNDEFINED",
      });

      return {};
    });
  },

  addGptMessage: (res: Chat.AddChatResDto) => {
    set((state) => {
      state.chat.message[0].id = res.userMessage.id;
      state.chat.message[0].mbti = res.userMessage.mbti;
      state.chat.message.unshift({
        id: res.gptMessage.id,
        sender: res.gptMessage.sender,
        content: decryptMessage(res.gptMessage.content),
        mbti: res.gptMessage.mbti,
      });

      return {};
    });
  },

  refreshChat: () => {
    set(() => ({
      chat: {
        id: undefined,
        message: [],
      },
    }));
  },
}));

export default useChatState;
