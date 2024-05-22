import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import RefreshIcon from "@mui/icons-material/Refresh";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SendIcon from "@mui/icons-material/Send";

export const Input = styled.input`
  background-color: white;

  width: 266px;
  height: 40px;

  border: 0px white solid;
  border-left: 5px white solid;
  border-radius: 7px;

  outline: none;

  font-size: 15px;
`;

export const SubmitButton = styled.button`
  background-color: #ff4646;

  width: 57px;
  height: 42px;

  border: 0px white solid;
  border-radius: 7px;

  box-shadow: 0px 5px 0 -0.5px black;

  margin-top: -3px;
  margin-bottom: 5px;

  color: white;

  :hover {
    box-shadow: 0 0 0 0 black;
    margin-bottom: -5px;
  }
`;

export const RefreshButton = styled(RefreshIcon)`
  position: absolute;
  top: 14px;
  right: -7px;

  font-size: 45px;
  color: white;
`;

export const ProfileImg = styled(Avatar)`
  top: 5px;
  left: 5px;

  border: 2px solid #ff7a85;

  margin-right: 10px;
  margin-bottom: 9px;
`;

export const ProfileText = styled.div`
  color: inherit;

  font-size: 15px;
  font-weight: bold;

  margin-top: 3px;
`;

export const Content = styled.div`
  width: max-content;
  width: 98%;
  word-break: break-all;

  margin-bottom: 5px;

  color: inherit;
  font-size: 13px;
`;

export const MbtiContainer = styled.div`
  position: absolute;

  border: 5px white solid;
  border-radius: 10px;

  width: 130px;
  height: 130px;

  left: -150px;
  top: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const MbtiMainText = styled.div`
  color: inherit;

  font-size: 46px;
  font-weight: bold;

  margin-top: 3px;

  color: white;

  margin-top: 10px;
  margin-bottom: 20px;
`;

export const MbtiSubText = styled.div`
  background-color: white;
  width: 100%;
  height: 30%;

  color: #ff7a85;

  border: 3px white solid;

  font-size: 18px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  position: absolute;

  top: -10px;
  left: -180px;
  width: 150px;

  z-index: 3;
`;

export const FeedbackButton = styled(FeedbackIcon)`
  position: absolute;

  font-size: 19px;
  top: 2px;
  right: 6px;

  filter: drop-shadow(0px 3px 0px black);

  &:hover {
    filter: drop-shadow(0px 0px 0px black);

    margin-bottom: 4px;
    margin-top: 3px;
  }
`;

export const FeedbackContainer = styled.form`
  position: relative;
  width: 92%;
  height: 100px;

  margin-bottom: 23px;
`;

export const FeedbackInput = styled.textarea`
  width: 100%;
  height: 100%;

  border: 5px white solid;
  background-color: white;
  border-radius: 3px;

  ::placeholder {
    font-family: Helvetica, Arial, sans-serif;
  }
`;

export const FeedbackSubmitButton = styled(SubmitButton)`
  position: absolute;
  bottom: -9px;
  right: -9px;

  :hover {
    box-shadow: 0 0 0 0 black;
    margin-bottom: 0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;

  background-color: white;

  border: 0px;

  top: 7px;
  right: -8px;

  font-size: 13px;
  color: gray;
`;
