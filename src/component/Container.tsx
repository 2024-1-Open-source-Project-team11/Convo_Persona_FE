import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: blue;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 340px;
  height: 620px;
`;

export const ChatContainer = styled.div`
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  border-radius: 7px;

  width: 100%;
  height: 530px;
`;

export const ChatInputContainer = styled(ChatContainer)`
  background-color: unset;
  flex-direction: row;

  width: 100%;
  height: 40px;

  margin-top: 10px;
`;
