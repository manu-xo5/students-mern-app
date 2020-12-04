import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';
import './signup.css';

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleRegister = async ev => {
    ev.preventDefault();
    try {
      const {
        name,
        password,
        phone,
        dob,
        college,
        address,
        identity,
        note,
      } = ev.target.elements;
      setIsLoading(true);
      const res = await fetch('/students', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          password: password.value,
          phone: phone.value,
          dob: dob.value,
          college: college.value,
          address: address.value,
          identity: identity.value,
          note: note.value,
        }),
      });
      const { student } = await res.json();
      console.log({ student });
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleRegister}>
        <Input label='Name' name='name' />
        <Input label='Password' name='password' type='password' />
        <Input label='Phone' name='phone' type='tel' inputMode='tel' />
        <Input label='DOB (optional)' name='dob' type='date' />
        <Input label='College' name='college' />
        <Input label='Address' name='address' />
        <Input as='select' label='Identity' name='identity'>
          <option value='AMERICAN'>America</option>
          <option value='ASIAN'>Asian</option>
        </Input>
        <Input as='textarea' label='Note to yourself (BIO)' name='note' />
        <button className='submit-btn' type='submit' disabled={isLoading}>
          Login in
        </button>
      </form>
      <p>
        <Link to='/login'>Already have account?</Link>
      </p>
    </>
  );
};
export default Signup;
