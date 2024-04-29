import { useEffect } from "react";
import styled from "@emotion/styled";

import useChatState from "@/store/chatStore";

import { Background } from "@/component/Background";
import { Container, ChatContainer } from "@/component/Container";

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
      </Container>
    </>
  );
};

export default ChatPage;
