import "./Error.css";
import Cat from "./cat.jpg";

const ErrorGlobal = () => {
  return (
    <div className="errorContainer">
      <h1>
  There is nothing
  <span className="dots">
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </span>
</h1>
      <p>Except cat</p>
      <img src={Cat} alt="black cat image" />
    </div>
  );
};

export default ErrorGlobal;