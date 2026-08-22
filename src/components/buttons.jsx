import "./buttons.css";

function Button({ children, label, className, type = "button", onClick }) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
      {children || label}
    </button>
  );
}

export default Button;