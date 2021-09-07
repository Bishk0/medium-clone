import { Link, NavLink } from "react-router-dom"

const TopBar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Medium
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              Sign In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopBar;
