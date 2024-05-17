import { useEffect, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

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

import * as Styles from "./ChatPageStyles";

const ChatPage = () => {
  const { register, handleSubmit, setValue } = useForm<Chat.AddChatReqDto>();

  const addUserMessage = useChatState((state) => state.addUserMessage);
  const { postUserMessage, loadAllChat, refreshInfo } = ChatService();
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
    loadAllChat();
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
        <Styles.Img src="/img/signin_logo.png" alt="logo" />
        <Styles.MbtiContainer>
          <Styles.MbtiSubText>User's MBTI</Styles.MbtiSubText>
          <Styles.MbtiMainText>
            {chat.message[0] && chat.message[0].mbti != "UNDEFINED" ? (
              chat.message[0].mbti
            ) : (
              <Loading />
            )}
          </Styles.MbtiMainText>
        </Styles.MbtiContainer>
        <Styles.RefreshButton
          onClick={() => {
            refreshInfo();
          }}
        />
        <ChatContainer>
          {standby ? (
            <GptMessageContainer>
              <Styles.ProfileImg
                alt="Gpt Profile Img"
                src="img/gptImg.png"
                sx={{ width: 40, height: 40 }}
              />
              <MessageContantContainer>
                <Styles.ProfileText>Covon persona</Styles.ProfileText>
                <Styles.Content style={{ height: "60px" }}>
                  <Loading />
                </Styles.Content>
              </MessageContantContainer>
            </GptMessageContainer>
          ) : null}
          {chat.message.map((message) => (
            <>
              {message.sender === "USER" ? (
                <UserMessageContainer>
                  <Styles.ProfileImg
                    alt="User Profile Img"
                    src="img/userImg.png"
                    sx={{ width: 40, height: 40 }}
                  />
                  <MessageContantContainer>
                    <Styles.ProfileText>User</Styles.ProfileText>
                    <Styles.Content>{message.content}</Styles.Content>
                  </MessageContantContainer>
                </UserMessageContainer>
              ) : (
                <GptMessageContainer>
                  <Styles.ProfileImg
                    alt="Gpt Profile Img"
                    src="img/gptImg.png"
                    sx={{ width: 40, height: 40 }}
                  />
                  <MessageContantContainer>
                    <Styles.ProfileText>Convo Persona</Styles.ProfileText>
                    <Styles.Content>{message.content}</Styles.Content>
                  </MessageContantContainer>
                </GptMessageContainer>
              )}
            </>
          ))}
        </ChatContainer>
        <ChatInputContainer onSubmit={handleSubmit(onSubmit)}>
          <Styles.Input
            placeholder="Message to Convo Persona..."
            {...register("content", { required: "message를 입력해주세요!" })}
          />
          <Styles.SubmitButton
            disabled={standby}
            onClick={handleSubmit(onSubmit)}
          >
            <ArrowUpwardIcon />
          </Styles.SubmitButton>
        </ChatInputContainer>
      </Container>
    </>
  );
};

export default ChatPage;
