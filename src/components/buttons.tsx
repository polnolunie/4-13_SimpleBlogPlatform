import { Link } from "react-router-dom";
import "./buttons.css";
import icon from "./icon.png";

const PageButton = ({ to, label }) => {
  return (
    <Link className="page-button" to={to}>
      <div>
     <img className="imageIcon" src={icon} alt="icon image" />
      </div>
      {label}
    </Link>
  );
};

export default PageButton;
