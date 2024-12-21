import Loading from "../../UI/Loading";
import TextField from "../../UI/TextField";

function SendOTPForm({ onSubmit, register, isSendingOtp, errors }) {

  return (
    <div className="space-y-8">
      <form className="" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          register={register}
          required
          validationSchema={{
            required: "شماره موبایل ضروری است",
            minLength: { value: 11, message: "شماره موبایل نامعبتر است" },
          }}
          errors={errors}
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
