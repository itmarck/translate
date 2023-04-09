import "./Button.css";

function Button({ type, content }) {
  return (
    <button type={type} className="link-button">
      {content}
    </button>
  );
}

export default Button;
