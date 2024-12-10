function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block mb-4" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className="textField__input mb-6"
        type="text"
        autoComplete="off"
      />
      
    </div>
  );
}

export default TextField;
