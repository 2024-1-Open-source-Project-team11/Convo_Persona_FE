import { useEffect } from "react";
import styled from "@emotion/styled";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import useChatState from "@/store/chatStore";

import { Background } from "@/component/Background";
import {
  Container,
  ChatContainer,
  ChatInputContainer,
} from "@/component/Container";
import Logo from "@/component/Logo";

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
        <Logo />
        <ChatContainer />
        <ChatInputContainer>
          <Input placeholder="Message to ConvoPersona..." />
          <SubmitButton>
            <ArrowUpwardIcon />
          </SubmitButton>
        </ChatInputContainer>
      </Container>
    </>
  );
};

const Input = styled.input`
  background-color: white;

  width: 266px;
  height: 40px;

  border: 0px white solid;
  border-left: 5px white solid;
  border-radius: 7px;

  outline: none;

  font-size: 15px;
`;

const SubmitButton = styled.button`
  background-color: #ff4646;

  width: 57px;
  height: 42px;

  border: 0px white solid;
  border-radius: 7px;

  box-shadow: 0px 5px 0 -0.5px black;

  margin-top: -3px;
  margin-bottom: 5px;

  color: white;

  :hover {
    box-shadow: 0 0 0 0 black;
    margin-bottom: -5px;
  }
`;

export default ChatPage;
