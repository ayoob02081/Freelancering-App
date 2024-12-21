function RadioInput({
  name,
  id,
  label,
  register,
  value,
  watch,
  validationSchema,
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-secondary-600">
        <input
          className="cursor-pointer w-4 h-4 text-primary-900 form-radio focus:ring-primary-900"
          type="radio"
          name={name}
          id={id}
          value={value}
          {...register(name, validationSchema)}
          checked={watch(name) === value}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
}

export default RadioInput;
