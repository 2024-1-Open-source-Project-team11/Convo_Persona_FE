import { useForm } from "react-hook-form";

import { Container, SignInContainer } from "@/component/Container";
import Logo from "@/component/Logo";

import AuthService from "@/service/AuthService";

import * as Styles from "./SignInPageStyles";

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
      <Styles.Img src="/img/signin_logo.png" alt="logo" />
      <SignInContainer>
        <Logo type="BIG" />

        <Styles.SignInForm onSubmit={handleSubmit(onSubmit)}>
          <Styles.Input
            placeholder="아이디"
            {...register("name", { required: "아이디를 입력해주세요!" })}
          />
          <Styles.Input
            placeholder="비밀번호"
            type="password"
            {...register("password", { required: "비밀번호를 입력해주세요!" })}
          />
          <Styles.StyleButton type="submit" variant="contained">
            로그인
          </Styles.StyleButton>
        </Styles.SignInForm>
      </SignInContainer>
    </Container>
  );
};

export default SignInPage;
