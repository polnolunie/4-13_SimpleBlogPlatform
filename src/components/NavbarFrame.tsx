import { Link } from "react-router-dom";
import Signin from "../pages/Signin";

function Navigation() {
  return (
    <header className="navigation">
      <div className="navigation__container">
        <nav className="navigation__links">
          <h2>Realworld Blog</h2>
          <Link to="/">Home</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/signup">Sign up</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
