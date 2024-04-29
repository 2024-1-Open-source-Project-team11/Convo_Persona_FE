import { create } from "zustand";

const useChatState = create<Chat.ChatStore>((set) => ({
  //State
  chat: {
    id: undefined,
    message: [],
  },

  //Set function
  setChat: (chat: Chat.Chat) => {
    set(() => ({ chat: chat }));
  },

  addSendMessage: (content: string) => {
    set((state) => {
      state.chat.message.unshift({
        id: undefined,
        sender: "USER",
        content: content,
      });

      return {};
    });
  },

  addResiveMessage: (res: Chat.AddChatResDto) => {
    set((state) => {
      state.chat.message[0].id = res.sendMessage.id;
      state.chat.message.unshift(res.resiveMessage);

      return {};
    });
  },
}));

export default useChatState;
