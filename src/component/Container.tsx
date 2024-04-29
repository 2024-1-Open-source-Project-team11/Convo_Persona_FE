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

export const ChatContainer = styled.div`
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  border-radius: 7px;

  width: 100%;
  height: 520px;
`;

export const ChatInputContainer = styled(ChatContainer)`
  background-color: unset;
  flex-direction: row;

  width: 100%;
  height: 40px;

  margin-top: 10px;
`;

export const MassageContainer = styled(ChatContainer)`
  background-color: #ff7493;

  flex-direction: row;

  height: unset;
  width: 93%;
`;
