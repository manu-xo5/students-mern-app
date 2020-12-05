import StudentsList from "./StudentsList";
import { Menu } from "./Button";
import { useReducer } from "react";
import Navbar from "./Nav";

const Home = () => {
  const [isMenuOpen, toggleMenu] = useReducer((p, a) => a ?? !p, false);
  return (
    <>
      <Navbar
        className="mobile"
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <Menu onClick={() => toggleMenu(true)} />
      <h1>List of all students</h1>
      <StudentsList />
    </>
  );
};

export default Home;
