import styled from "@emotion/styled";

import { MoonLoader } from "react-spinners";

const GptLoading = () => {
  return (
    <LoadingWrapper>
      <MoonLoader color="white" size={34} speedMultiplier={0.8} />
    </LoadingWrapper>
  );
};

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  z-index: 4;
`;

export default GptLoading;
