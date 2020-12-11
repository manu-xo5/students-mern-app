import StudentsList from './StudentsList';
import { Menu } from './Button';
import { useReducer } from 'react';
import Navbar from './Nav';

const Home = () => {
  const [isMenuOpen, toggleMenu] = useReducer((p, a) => a ?? !p, false);
  return (
    <>
      <Navbar
        className='mobile'
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <h1>
        <Menu onClick={() => toggleMenu(true)} />
        <span>Students</span>
        <div className='empty'></div>
      </h1>
      <StudentsList />
    </>
  );
};

export default Home;
