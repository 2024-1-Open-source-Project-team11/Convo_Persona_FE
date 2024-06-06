import { useForm, SubmitHandler } from "react-hook-form";
import styled from "@emotion/styled";

import Button from "@mui/material/Button";

import GrayBackground from "@/component/GrayBackground";

import AuthService from "@/service/AuthService";
import useLayoutState from "@/store/layoutStore";

const SignUp = ({ onClose }: { onClose: () => void }) => {
  const { handleSubmit, register } = useForm<User.SignUpForm>();

  const setMessage = useLayoutState((state) => state.setMessage);
  const { signUp } = AuthService();

  const onSubmit: SubmitHandler<User.SignUpForm> = (data) => {
    if (!data.email || !data.passwordCheck || !data.password || !data.name) {
      setMessage("모든 정보를 입력해주세요.");
      return;
    }
    if (data.password !== data.passwordCheck) {
      setMessage("입력한 비밀번호가 동일하지 않습니다.");
      return;
    }

    signUp({ ...data });

    onClose();
  };

  return (
    <GrayBackground onClose={onClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>SIGN UP</Title>
        <Input placeholder="이메일" {...register("email")} />
        <Input placeholder="아이디" {...register("name")} />
        <Input
          placeholder="비밀번호"
          type="password"
          {...register("password")}
        />
        <Input
          placeholder="비밀번호 재입력"
          type="password"
          {...register("passwordCheck")}
        />
        <StyleButton type="submit" variant="contained">
          대화 시작하기!
        </StyleButton>
      </Form>
    </GrayBackground>
  );
};

export const LoadingWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);

  position: absolute;
  top: 0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 30px;
  color: white;
  font-weight: bold;

  z-index: 40;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: #4d4d4d;

  margin-bottom: 0px;
`;

const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  background-color: white;

  width: 80%;
  height: 45px;

  border: 2px solid #ff4646;
  border-radius: 3px;

  outline: none;

  margin-top: 20px;

  font-size: 16px;
  text-align: center;
  font-family: "Spoqa Han Sans Neo", "sans-seri";

  ::placeholder {
    font-family: "Spoqa Han Sans Neo", "sans-seri";
    text-align: center;
  }
`;

const StyleButton = styled(Button)`
  font-size: 20px;
  font-weight: bold;
  width: 82%;
  height: 50px;

  background-color: #ff4646;

  border: 0px;

  box-shadow: 0px 5px 0 -0.5px black;

  margin-top: 30px;
  margin-bottom: 5px;

  transition: opacity 1s linear;

  font-family: "Spoqa Han Sans Neo", "sans-seri";

  :hover {
    background-color: #ff4646;

    border: 0px;

    box-shadow: 0 0 0 0 black;
    margin-top: 35px;
    margin-bottom: 0px;

    transition: 0s;
  }
`;

export default SignUp;
