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
      state.chat.message.push({
        id: undefined,
        sender: "USER",
        content: content,
      });

      return state; //빈 object 넣어도 되는지 확인
    });
  },

  addResiveMessage: (res: Chat.AddChatResDto) => {
    set((state) => {
      state.chat.message[state.chat.message.length - 1].id = res.sendMessage.id;
      state.chat.message.push(res.resiveMessage);

      return state; //빈 object 넣어도 되는지 확인
    });
  },
}));

export default useChatState;
