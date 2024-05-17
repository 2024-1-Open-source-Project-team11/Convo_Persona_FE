import { create } from "zustand";

const useChatState = create<Chat.ChatStore>((set) => ({
  //State
  chat: {
    id: undefined,
    message: [{ id: "3", sender: "GPT", content: "content", mbti: "ENTJ" }],
  },

  //Set function
  setChat: (chat: Chat.Chat) => {
    set(() => ({ chat: chat }));
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
      state.chat.message.unshift(res.gptMessage);

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
