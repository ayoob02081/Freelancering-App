import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { getOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const BASE_TIME = 90;

function AuthContainer() {
  const {
    isPending,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setStep(2);
      setTime(BASE_TIME);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("09182221111");
  const [time, setTime] = useState(BASE_TIME);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isPending}
            onSubmit={sendOtpHandler}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            time={time}
            setTime={setTime}
            otpResponse={otpResponse}
            phoneNumber={phoneNumber}
            onBack={() => setStep(1)}
            onResendOtp={sendOtpHandler}
          />
        );

      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
