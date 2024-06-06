import { useState } from "react";
import { useForm } from "react-hook-form";

import { Container, SignInContainer } from "@/component/Container";
import Logo from "@/component/Logo";
import SignUp from "../signUp/SignUp";

import AuthService from "@/service/AuthService";
import useLayoutState from "@/store/layoutStore";

import * as Styles from "./SignInPageStyles";

const SignInPage = () => {
  const [onCreate, setOnCreate] = useState(false);
  const { register, handleSubmit } = useForm<User.SignInReqDto>({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const setMessage = useLayoutState((state) => state.setMessage);
  const { signin } = AuthService();

  const onSubmit = (data: User.SignInReqDto) => {
    if (data.name === "" || data.password === "")
      setMessage("모든 정보를 입력해주세요!");
    else signin(data);
  };

  return (
    <>
      {onCreate && (
        <SignUp
          onClose={() => {
            setOnCreate(false);
          }}
        />
      )}
      <Container>
        <Styles.Img src="/img/signin_logo.png" alt="logo" />
        <SignInContainer>
          <Logo type="BIG" />

          <Styles.SignInForm onSubmit={handleSubmit(onSubmit)}>
            <Styles.Input placeholder="아이디" {...register("name")} />
            <Styles.Input
              placeholder="비밀번호"
              type="password"
              {...register("password")}
            />
            <Styles.StyleButton type="submit" variant="contained">
              대화하러 가기!
            </Styles.StyleButton>

            <Styles.SignUpButton
              onClick={() => {
                setOnCreate(true);
              }}
            >
              혹시 아직 계정이 없나요?
            </Styles.SignUpButton>
          </Styles.SignInForm>
        </SignInContainer>
      </Container>
    </>
  );
};

export default SignInPage;
