import { useState } from "react";
import TextField from "../../UI/textField";
import RadioInput from "../../UI/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Lodaing from "../../UI/Lodaing";

function ComoleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { message, user } = await mutateAsync({ name, email, role });
      toast.success(message);

      if (user.useState !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👍" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full sm:max-w-sm">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="ایمیل"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex items-center justify-center gap-8">
          <RadioInput
            name={"role"}
            id={"OWNER"}
            label={"کارفرما"}
            onChange={(e) => setRole(e.target.value)}
            checked={role === "OWNER"}
          />
          <RadioInput
            name={"role"}
            id={"FREELANCER"}
            label={"فریلنسر"}
            onChange={(e) => setRole(e.target.value)}
            checked={role === "FREELANCER"}
          />
        </div>
        <div>
          {isPending ? (
            <Lodaing />
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

export default ComoleteProfileForm;
