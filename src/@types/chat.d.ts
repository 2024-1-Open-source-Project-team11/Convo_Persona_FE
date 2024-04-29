declare namespace Chat {
  export interface Message {
    id: string | undefined;
    sender: "USER" | "GPT";
    content: stirng;
  }

  export interface Chat {
    id: string | undefined;
    message: Message[];
  }

  //DTO
  export interface AddChatReqDto {
    content: stirng;
  }

  export interface AddChatResDto {
    sendMessage: Message;
    resiveMessage: Message;
  }

  //Store
  export interface ChatStore {
    chat: Chat;
    setChat: (chat: Chat) => void;
    addSendMessage: (content: string) => void;
    addResiveMessage: (res: AddChatResDto) => void;
  }
}
