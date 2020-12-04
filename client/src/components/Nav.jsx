import { Link } from 'react-router-dom';
import { useUser } from '../context/user';

const Navbar = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          {user?.isLogged ? (
            <Link to='/me'>{user.name}</Link>
          ) : (
            <Link to='/login'>Login / Sign Up</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
