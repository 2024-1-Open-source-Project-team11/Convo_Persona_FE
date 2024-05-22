declare namespace Chat {
  export interface Message {
    id: string | undefined;
    sender: "USER" | "GPT";
    content: stirng;
    mbti:
      | "UNDEFINED"
      | "ISTJ "
      | "ISFJ"
      | "INFJ"
      | "INTJ"
      | "ISTP"
      | "ISFP"
      | "INFP"
      | "INTP"
      | "ESTP"
      | "ESFP"
      | "ENFP"
      | "ENTP"
      | "ESTJ"
      | "ESFJ"
      | "ENFJ"
      | "ENTJ";
  }

  export interface Chat {
    id: string | undefined;
    message: Message[];
  }

  export interface Feedback {
    id: string | undefined;
    feedback: string | undefined;
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
    refreshChat: () => void;
  }
}
