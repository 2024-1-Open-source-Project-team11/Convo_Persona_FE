import styled from "@emotion/styled";
import { Controller, useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Container, SignInContainer } from "@/component/Container";
import Logo from "@/component/Logo";

import AuthService from "@/service/AuthService";

const SignInPage = () => {
  const { control, handleSubmit } = useForm<User.SignInReqDto>({
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
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <StyleInput
                type="name"
                label="아이디"
                variant="outlined"
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <StyleInput
                type="password"
                label="비밀번호"
                variant="outlined"
                {...field}
              />
            )}
          />
          <StyleButton type="submit" variant="contained">
            로그인
          </StyleButton>
        </SignInForm>
      </SignInContainer>
    </Container>
  );
};

const StyleInput = styled(TextField)`
  width: 230px;

  margin-bottom: 10px;

  background-color: white;

  border-radius: 5px;
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
