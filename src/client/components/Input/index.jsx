import "./Input.css";

function Input({ value, onChange, placeholder }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="input"
      type="text"
      rows={1}
      autoCorrect="off"
      autoComplete="off"
      autoCapitalize="off"
      placeholder={placeholder}
    />
  );
}

export default Input;
