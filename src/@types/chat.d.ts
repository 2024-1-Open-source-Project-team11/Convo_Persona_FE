declare namespace Chat {
  //DTO
  export interface Message {
    id: string;
    sender: "USER" | "GPT";
    content: stirng;
  }

  export interface LoadAllChatResDto {
    id: string;
    message: Message[];
  }

  export interface AddChatReqDto {
    content: stirng;
  }
}
