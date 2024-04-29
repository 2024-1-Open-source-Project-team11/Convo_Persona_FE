import { useEffect } from "react";
import styled from "@emotion/styled";

import useChatState from "@/store/chatStore";

import { Background } from "@/component/Background";
import {
  Container,
  ChatContainer,
  ChatInputContainer,
} from "@/component/Container";

const ChatPage = () => {
  const { chat, setChat, addSendMessage, addResiveMessage } = useChatState(
    (state) => state
  );

  //Test code
  useEffect(() => {
    setChat({
      id: "1",
      message: [{ id: "2", sender: "USER", content: "content" }],
    });
    addSendMessage("user content");
    addResiveMessage({
      sendMessage: { id: "3", sender: "USER", content: "user content" },
      resiveMessage: { id: "4", sender: "GPT", content: "gpt content" },
    });
  }, []);

  useEffect(() => {
    console.log(chat);
  }, [chat]);

  return (
    <>
      <Background />
      <Container>
        <ChatContainer />
        <ChatInputContainer>
          <Input id="outlined-basic" label="Outlined" variant="outlined" />
          <SubmitButton />
        </ChatInputContainer>
      </Container>
    </>
  );
};

const Input = styled.input`
  background-color: white;

  width: 270px;
  height: 40px;

  border: 0px white solid;
  border-radius: 7px;
`;

const SubmitButton = styled.button`
  background-color: white;

  width: 57px;
  height: 42px;

  border: 0px white solid;
  border-radius: 7px;
`;

export default ChatPage;
