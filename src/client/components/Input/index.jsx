import "./Input.css";

function Input({ placeholder }) {
  return (
    <textarea
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
