import styled from "@emotion/styled";

const Logo = ({ type }: { type: "BIG" | "SMALL" }) => (
  <>
    {type === "SMALL" ? (
      <SmallLogoImg src="/img/logo.png" alt="logo" />
    ) : (
      <BigLogoImg src="/img/logo.png" alt="logo" />
    )}
  </>
);

const SmallLogoImg = styled.img`
  height: 60px;
`;

const BigLogoImg = styled.img`
  width: 270px;
  height: 140px;
`;

export default Logo;
