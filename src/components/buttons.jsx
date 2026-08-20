import { Link } from "react-router-dom";
import "./buttons.css";

function Button({ children, className }) {
  return (
    <button className={className}>
      {children}
    </button>
  );
}

export default Button;