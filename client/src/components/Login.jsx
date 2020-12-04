import { Link } from 'react-router-dom';
import Input from './Input';
import query from '../helpers/query';
import { useToken } from '../context/token';

const Login = () => {
  const { setToken } = useToken();
  const handleLogin = async ev => {
    ev.preventDefault();
    const { name, password } = ev.target.elements;
    const { token, error } = await query('/auth', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    });
    if (error) return alert(error);
    setToken(token);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input label='Name' name='name' required />
        <Input label='Password' type='password' name='password' required />
        <button className='submit-btn' type='submit'>
          Login in
        </button>
      </form>
      <p>
        <Link to='/signup'>or register</Link>
      </p>
    </>
  );
};
export default Login;
