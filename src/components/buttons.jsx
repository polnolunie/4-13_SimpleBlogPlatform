import "./buttons.css";

function Button({ children, label, className }) {
  return (
    <button className={className}>
      {children || label}
    </button>
  );
}

export default Button;