import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -52%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 340px;
  height: 630px;
`;

export const SignInContainer = styled.div`
  background-color: #ff8e99;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 7px;

  width: 100%;
  height: 520px;

  overflow-y: scroll;

  margin-top: 10px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatContainer = styled.div`
  background-color: white;

  display: flex;

  align-items: center;
  flex-direction: column-reverse;

  border-radius: 7px;

  width: 100%;
  height: 520px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatInputContainer = styled.form`
  display: flex;

  align-items: center;
  flex-direction: column-reverse;

  border-radius: 7px;

  width: 100%;
  height: 520px;

  overflow-y: scroll;

  justify-content: space-between;
  flex-direction: row;

  width: 100%;
  height: 40px;

  margin-top: 10px;

  overflow-y: unset;
`;

export const GptMessageContainer = styled(ChatContainer)`
  position: relative;

  color: white;

  background-color: #ff7a85;

  border: 2px solid #ff7a85;
  border-radius: 3px;

  align-items: unset;
  flex-direction: row;

  height: unset;
  width: 95%;
  overflow-y: unset;

  margin-bottom: 6px;
`;

export const UserMessageContainer = styled(GptMessageContainer)`
  color: #ff7a85;

  background-color: white;

  border: 2px solid #ff7a85;
`;

export const MessageContantContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
