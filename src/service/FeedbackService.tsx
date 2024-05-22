import { API } from "@/config/axios";

const FeedbackService = () => {
  const URL = "/api/v1/feedback";

  const uploadFeedback = async (feedback: Chat.Feedback) => {
    //console.log(feedback);
    await API.post(`${URL}`, feedback);
  };

  return { uploadFeedback };
};

export default FeedbackService;
