import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Container, SignInContainer } from "@/component/Container";
import Logo from "@/component/Logo";

import AuthService from "@/service/AuthService";

const SignInPage = () => {
  const { register, handleSubmit } = useForm<User.SignInReqDto>({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const [signin] = AuthService();

  const onSubmit = (data: User.SignInReqDto) => {
    signin(data);
  };

  return (
    <Container>
      <SignInContainer>
        <Logo type="BIG" />
        <SignInForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="아이디"
            {...register("name", { required: "아이디를 입력해주세요!" })}
          />{" "}
          <Input
            placeholder="비밀번호"
            {...register("password", { required: "비밀번호를 입력해주세요!" })}
          />
          <StyleButton type="submit" variant="contained">
            로그인
          </StyleButton>
        </SignInForm>
      </SignInContainer>
    </Container>
  );
};

const Input = styled.input`
  background-color: white;

  width: 266px;
  height: 40px;

  border: 0px white solid;
  border-left: 5px white solid;
  border-radius: 7px;

  outline: none;

  font-size: 15px;
`;

const StyleButton = styled(Button)`
  font-size: 17px;
  font-weight: bold;
  width: 230px;
  height: 50px;

  background-color: #ff4646;

  border: 0px;

  box-shadow: 0px 5px 0 -0.5px black;

  margin-bottom: 5px;

  :hover {
    background-color: #ff4646;

    border: 0px;

    box-shadow: 0 0 0 0 black;
    margin-top: 5px;
    margin-bottom: 0px;

    transition: 0s;
  }
`;

const SignInForm = styled.form`
  width: 20%;
  aspect-ratio: 1;

  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SignInPage;
