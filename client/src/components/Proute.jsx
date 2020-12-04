import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../context/user';

const Proute = ({ reverse = false, ...props }) => {
  const { isLogged } = useUser();
  return isLogged === !reverse ? <Route {...props} /> : <Redirect to='/' />;
};

export default Proute;
