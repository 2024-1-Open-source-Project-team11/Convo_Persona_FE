import { useState, useRef } from "react";

import SendIcon from "@mui/icons-material/Send";

import {
  UserMessageContainer,
  GptMessageContainer,
  MessageContantContainer,
} from "@/component/Container";
import Loading from "@/component/GptLoading";

import * as Styles from "./ChatPageStyles";

import FeedbackService from "@/service/FeedbackService";

type Prop = {
  message: Chat.Message | undefined;
};

const Message = ({ message }: Prop) => {
  const [feedBackOn, setFeedBackOn] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { uploadFeedback } = FeedbackService();

  return (
    <>
      {!message ? (
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
      ) : (
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
                {!feedBackOn ? (
                  <Styles.FeedbackButton
                    onClick={() => {
                      setFeedBackOn(true);
                    }}
                  />
                ) : (
                  <Styles.FeedbackContainer>
                    <Styles.CloseButton
                      onClick={() => {
                        setFeedBackOn(false);
                      }}
                    >
                      X
                    </Styles.CloseButton>
                    <Styles.FeedbackInput
                      placeholder="Write Feedback..."
                      ref={textAreaRef}
                    ></Styles.FeedbackInput>
                    <Styles.FeedbackSubmitButton
                      onClick={() => {
                        if (
                          textAreaRef.current &&
                          textAreaRef.current.value != ""
                        ) {
                          uploadFeedback({
                            id: message.id,
                            feedback: textAreaRef.current.value,
                          });
                          setFeedBackOn(false);
                        }
                      }}
                    >
                      <SendIcon />
                    </Styles.FeedbackSubmitButton>
                  </Styles.FeedbackContainer>
                )}
              </MessageContantContainer>
            </GptMessageContainer>
          )}
        </>
      )}
    </>
  );
};

export default Message;
