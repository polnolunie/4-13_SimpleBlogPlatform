import { Link } from "react-router-dom";
import "./buttons.css";

const PageButton = ({ to, label }) => {
  return (
    <Link className="page-button" to={to}>
      {label}
    </Link>
  );
};

export default PageButton;
