import styled from "@emotion/styled";

import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <LoadingWrapper>
      <MoonLoader color="#ff7a85" size={150} speedMultiplier={0.8} />
    </LoadingWrapper>
  );
};

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default Loading;
