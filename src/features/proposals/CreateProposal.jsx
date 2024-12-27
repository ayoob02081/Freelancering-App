import { useForm } from "react-hook-form";
import TextField from "../../UI/TextField";
import Loading from "../../UI/Loading";
import useCreateProposal from "./useCraeateProposal";

function CreateProposal({ onClose, projectId }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { createProposal, isCreating } = useCreateProposal();

  const onSubmit = (data) => {
    createProposal({ ...data, projectId }, { onSuccess: () => onClose() });
  };

  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: { value: 10, message: "حداقل 10 کاراکتر را وارد کنید" },
          }}
        />
        <TextField
          label="قیمت"
          name="price"
          type="number"
          register={register}
          required
          errors={errors}
          validationSchema={{ required: "قیمت ضروری است" }}
        />
        <TextField
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          required
          errors={errors}
          validationSchema={{ required: "مدت زمان ضروری است" }}
        />
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateProposal;
