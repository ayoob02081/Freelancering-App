function TextField({
  label,
  name,
  register,
  validationSchema,
  type = "text",
  required,
  errors,
}) {
  return (
    <div>
      <label className="block mb-2 text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        className="textField__input mb-4"
        {...register(name, validationSchema)}
        id={name}
        name={name}
        type={type}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mb-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
