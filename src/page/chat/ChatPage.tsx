import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useForm, SubmitHandler } from "react-hook-form";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Avatar from "@mui/material/Avatar";
import RefreshIcon from "@mui/icons-material/Refresh";

import { useNavigate } from "react-router-dom";

import useUserState from "@/store/userStore";
import { PAGE_URL } from "@/config/path";

import useChatState from "@/store/chatStore";
import ChatService from "@/service/ChatService";

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
import Loading from "@/component/GptLoading";

const ChatPage = () => {
  const { register, handleSubmit, setValue } = useForm<Chat.AddChatReqDto>();

  const addUserMessage = useChatState((state) => state.addUserMessage);
  //const { postUserMessage, loadAllChat } = ChatService();
  const { postUserMessage } = ChatService();
  const [standby, setStandby] = useState<boolean>(false);

  const chat = useChatState((state) => state.chat);
  const isSignIn = useUserState((state) => state.isSignIn);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Chat.AddChatReqDto> = (data) => {
    addUserMessage(data.content);
    setValue("content", "");
    setStandby(true);
  };

  useEffect(() => {
    if (!isSignIn) {
      navigate(PAGE_URL.SignIn);
      return;
    }
    //loadAllChat();
  }, []);

  useEffect(() => {
    if (standby) {
      postUserMessage(chat.message[0].content).then(() => setStandby(false));
    }
  }, [standby]);

  return (
    <>
      <PinkBackground />
      <Container>
        <Logo type="SMALL" />
        <RefreshButton />
        <ChatContainer>
          {standby ? (
            <GptMessageContainer>
              <ProfileImg
                alt="Gpt Profile Img"
                src="img/gptImg.png"
                sx={{ width: 40, height: 40 }}
              />
              <MessageContantContainer>
                <ProfileText>Covon persona</ProfileText>
                <Content style={{ height: "60px" }}>
                  <Loading />
                </Content>
              </MessageContantContainer>
            </GptMessageContainer>
          ) : null}
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
                    <ProfileText>Convo Persona</ProfileText>
                    <Content>{message.content}</Content>
                  </MessageContantContainer>
                </GptMessageContainer>
              )}
            </>
          ))}
        </ChatContainer>

        <ChatInputContainer onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Message to Convo Persona..."
            {...register("content", { required: "message를 입력해주세요!" })}
          />
          <SubmitButton disabled={standby} onClick={handleSubmit(onSubmit)}>
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

const RefreshButton = styled(RefreshIcon)`
  position: absolute;
  top: 14px;
  right: -7px;

  font-size: 45px;
  color: white;
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
