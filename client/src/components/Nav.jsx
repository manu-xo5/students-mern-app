import { Link } from "react-router-dom";
import { useUser } from "../context/user";
import { Back } from "./Button";

const Navbar = ({ isMenuOpen, toggleMenu, className = "" }) => {
  const { user } = useUser();
  return (
    <nav
      className={`${className} ${isMenuOpen ? "open" : ""}`}
      onScroll={(ev) => ev.preventDefault()}
    >
      <ul >
        <li>
          <Back onClick={() => toggleMenu(false)} />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {user?.isLogged ? (
            <Link to="/profile">{user.name}</Link>
          ) : (
            <Link to="/login">Login / Sign Up</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
