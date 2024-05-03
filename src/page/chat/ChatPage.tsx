import { useEffect } from "react";
import styled from "@emotion/styled";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Avatar from "@mui/material/Avatar";

import { useNavigate } from "react-router-dom";

import useUserState from "@/store/userStore";
import { PAGE_URL } from "@/config/path";

import useChatState from "@/store/chatStore";

import { PinkBackground } from "@/component/Background";
import {
  Container,
  ChatContainer,
  ChatInputContainer,
  UserMessageContainer,
  GptMessageContainer,
  MessageContantContainer,
} from "@/component/Container";
import Logo from "@/component/Logo";

const ChatPage = () => {
  const { chat, setChat, addSendMessage, addResiveMessage } = useChatState(
    (state) => state
  );

  const isSignIn = useUserState((state) => state.isSignIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignIn) navigate(PAGE_URL.SignIn);
  }, []);

  //Test code
  useEffect(() => {
    setChat({
      id: "1",
      message: [
        {
          id: "2",
          sender: "USER",
          content:
            "user contentuser contentuser contentuser contentuser contentuser contentuser content user content",
        },
      ],
    });
    addSendMessage(
      "user content user contentuser contentuser content user content "
    );
    addResiveMessage({
      sendMessage: {
        id: "3",
        sender: "USER",
        content: "user content user content user content",
      },
      resiveMessage: {
        id: "4",
        sender: "GPT",
        content: "gpt contentq asdasd",
      },
    });
  }, []);

  useEffect(() => {
    console.log(chat);
  }, [chat]);

  return (
    <>
      <PinkBackground />
      <Container>
        <Logo type="SMALL" />
        <ChatContainer>
          {chat.message.map((message) => (
            <>
              {message.sender === "USER" ? (
                <UserMessageContainer>
                  <ProfileImg
                    alt="User Profile Img"
                    src="img/userImg.png"
                    sx={{ width: 40, height: 40 }}
                  />
                  <MessageContantContainer>
                    <ProfileText>User</ProfileText>
                    <Content>{message.content}</Content>
                  </MessageContantContainer>
                </UserMessageContainer>
              ) : (
                <GptMessageContainer>
                  <ProfileImg
                    alt="Gpt Profile Img"
                    src="img/gptImg.png"
                    sx={{ width: 40, height: 40 }}
                  />
                  <MessageContantContainer>
                    <ProfileText>Covon persona</ProfileText>
                    <Content>{message.content}</Content>
                  </MessageContantContainer>
                </GptMessageContainer>
              )}
            </>
          ))}
        </ChatContainer>

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

const ProfileImg = styled(Avatar)`
  top: 5px;
  left: 5px;

  border: 2px solid #ff7a85;

  margin-right: 10px;
  margin-bottom: 9px;
`;

const ProfileText = styled.div`
  color: inherit;

  font-size: 15px;
  font-weight: bold;

  margin-top: 3px;
`;

const Content = styled.div`
  width: max-content;
  width: 98%;
  word-break: break-all;

  margin-bottom: 5px;

  color: inherit;
  font-size: 13px;
`;

export default ChatPage;
