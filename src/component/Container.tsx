import styled from "@emotion/styled";

export const Container = styled.div`
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

export const ChatContainer = styled(Container)`
  background-color: white;

  border-radius: 10px;

  width: 100%;
  height: 580px;
`;
