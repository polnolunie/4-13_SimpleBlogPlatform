import { Link } from "react-router-dom";

const PageButton = ({ to, label }) => {
  return (
    <Link className="page-button" to={to}>
      {label}
    </Link>
  );
};

export default PageButton;
