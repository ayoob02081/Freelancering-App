import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../UI/Loading";

function CheckOTPForm({
  phoneNumber,
  onBack,
  onReSendOtp,
  time,
  setTime,
  otpResponse,
}) {
  console.log(phoneNumber);

  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      // name, email, role=> active? => push to "/owner or "/freelancer" : push to "?complete-profile" -> set name,...
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast.error("پروفایل شما در انتظار تایید است");
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "ADMIN") return navigate("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="flex flex-col gap-4">
      <span className="flex flex-col gap-2">
        <button
          className="flex gap-2 items-center text-secondary-500"
          onClick={onBack}
        >
          <HiArrowRight className="w-6 h-6" />
          <span className="flex gap-2 items-center ">
            <p className="text-sm ">برگشت و ویرایش شماره موبایل</p>
            <CiEdit className="w-6 h-6 text-primary-900" />
          </span>
        </button>
        {otpResponse && (
          <p className="text-primary-900 font-bold">{otpResponse?.message}</p>
        )}
      </span>
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد </p>
        ) : (
          <button onClick={onReSendOtp}>ارسال مجدد کد</button>
        )}
      </div>
      <form className="space-y-10" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800 mb-">
          کد تایید را وارد کنید
        </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span> - </span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-400))",
            borderRadius: "0.5rem",
          }}
        />
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
