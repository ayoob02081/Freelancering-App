function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      //   name={value}
      //   id={value}
      className="textField__input py-2 text-xs bg-secondary-0"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
