import { Link } from "react-router-dom";
import "./NavbarFrame.css";

function NavbarFrame() {
  return (
    <header className="navigation">
      <div className="navigation_container">
        <h2 className="navigation_header">Realworld Blog</h2>
        <nav className="navigation_links">
          <Link className="navChild" to="/">
            Home
          </Link>
          <Link className="navChild" to="/signin">
            Sign in
          </Link>
          <Link className="navChild" to="/signup">
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavbarFrame;
