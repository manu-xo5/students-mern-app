import { Link } from "react-router-dom";
import { useUser } from "../context/user";
import { Back } from "./Button";

export const Navbar = ({ isMenuOpen, toggleMenu, className = "" }) => {
  const { user, logout } = useUser();
  return (
    <nav
      className={`${className} ${isMenuOpen ? "open" : ""}`}
      onScroll={ev => ev.preventDefault()}>
      <ul>
        <li>
          <Back onClick={() => toggleMenu(false)} />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="https://github.com/manu-xo5/students-mern-app">Github</a>
        </li>
        <li className="hr">
          <hr />
        </li>
        <li>
          {user?.isLogged ? (
            <Link to="/profile">Account</Link>
          ) : (
            <Link to="/login">Login / Sign Up</Link>
          )}
        </li>
        <li className="hr">
          <hr />
        </li>
        {user.isLogged && (
          <li>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
