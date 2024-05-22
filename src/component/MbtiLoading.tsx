import styled from "@emotion/styled";

import { SyncLoader } from "react-spinners";

const MbtiLoading = () => {
  return (
    <LoadingWrapper>
      <SyncLoader color="white" size={16} speedMultiplier={0.4} />
    </LoadingWrapper>
  );
};

export const LoadingWrapper = styled.div`
  position: relative;
  top: -15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  z-index: 4;
`;

export default MbtiLoading;
