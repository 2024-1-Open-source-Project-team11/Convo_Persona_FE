import {
  UserMessageContainer,
  GptMessageContainer,
  MessageContantContainer,
} from "@/component/Container";
import Loading from "@/component/GptLoading";

import * as Styles from "./ChatPageStyles";

type Prop = {
  message: Chat.Message | undefined;
};

const Message = ({ message }: Prop) => (
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
              <Styles.FeedbackButton />
            </MessageContantContainer>
          </GptMessageContainer>
        )}
      </>
    )}
  </>
);

export default Message;
