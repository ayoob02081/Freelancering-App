import TextField from "../../UI/textField";
import Lodaing from "../../UI/Lodaing";

function SendOTPForm({ onSubmit, phoneNumber, onChange, isSendingOtp }) {
  return (
    <div className="space-y-8">
      <form className="" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phonenumber"
          value={phoneNumber}
          onChange={onChange}
        />
        {isSendingOtp ? (
          <Lodaing />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            ارسال کد تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default SendOTPForm;
