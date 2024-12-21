import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="flex items-center justify-center gap-8">
        {options.map(({ value, label }) => (
          <RadioInput
            key={value}
            label={label}
            id={value}
            name={name}
            value={value}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      <div>
        {errors && errors[name] && (
          <span className="text-error block text-sm mb-2 flex-1">
            {errors[name]?.message}
          </span>
        )}
      </div>
    </div>
  );
}

export default RadioInputGroup;

{
  /* <RadioInput
  name={"role"}
  id={"FREELANCER"}
  label={"فریلنسر"}
  value="FREELANCER"
  register={register}
  watch={watch}
  validationSchema={{
    required: "انتخاب نقش ضروری است",
  }}
  errors={errors}
  // onChange={(e) => setRole(e.target.value)}
  // checked={watch("role") === "FREELANCER"}
/> */
}
