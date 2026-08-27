import "./buttons.css";

function Button({ children, label, className, type = "button", onClick }) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {children || label}
    </button>
  );
}

export default Button;