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
    userMessage: Message;
    gptMessage: Message;
  }

  //Store
  export interface ChatStore {
    chat: Chat;
    setChat: (chat: Chat) => void;
    addUserMessage: (content: string) => void;
    addGptMessage: (res: AddChatResDto) => void;
  }
}
