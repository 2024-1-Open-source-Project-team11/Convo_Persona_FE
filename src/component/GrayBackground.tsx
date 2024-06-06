import styled from "@emotion/styled";
import { ReactNode } from "react";

const GrayBackground = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => (
  <>
    <Background onClick={onClose} />
    <Container>{children}</Container>
  </>
);

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 105vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 3;
`;

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 5px;

  width: 338px;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 4;
`;

export default GrayBackground;
