import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const Input = styled.input`
  background-color: white;

  width: 220px;
  height: 45px;

  border: 0px white solid;
  border-left: 5px white solid;
  border-radius: 3px;

  outline: none;

  margin-bottom: 10px;

  font-size: 15px;
  text-align: center;
  font-family: "Spoqa Han Sans Neo", "sans-seri";
`;

export const SignUpButton = styled.div`
  font-size: 15px;
  color: white;
  width: 160px;

  margin-top: 10px;
  margin-bottom: 3px;
  text-shadow: 0px 3px 0px rgba(0, 0, 0, 0.5);

  :hover {
    margin-top: 13px;
    margin-bottom: 0px;
    text-shadow: none;
  }
`;

export const StyleButton = styled(Button)`
  font-size: 17px;
  font-weight: bold;
  width: 230px;
  height: 45px;

  background-color: #ff4646;

  border: 0px;

  box-shadow: 0px 5px 0 -0.5px black;

  margin-bottom: 5px;

  transition: 0s;

  :hover {
    background-color: #ff4646;

    border: 0px;

    box-shadow: 0 0 0 0 black;
    margin-top: 5px;
    margin-bottom: 0px;

    transition: 0s;
  }
`;

export const SignInForm = styled.form`
  width: 20%;
  aspect-ratio: 1;

  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  position: absolute;

  top: -12px;
  left: -29px;
  width: 150px;
`;
