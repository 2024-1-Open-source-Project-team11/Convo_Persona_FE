import { useEffect } from "react";
import styled from "@emotion/styled";
import useLayoutState from "@/store/layoutStore";

export const StatusMessage = () => {
  const { message, setMessage } = useLayoutState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <MessageContainer show={message !== false}>{message}</MessageContainer>
  );
};

const MessageContainer = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  background-color: #e23e3e;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  position: fixed;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.5s;
  opacity: ${({ show }) => (show ? 1 : 0)};

  box-shadow: 0px 4px 3px 0 #0000008b;

  font-size: 215x;

  z-index: 100;
`;
