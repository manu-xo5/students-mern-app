import { Back } from './Button';
const Error404 = () => {
  return (
    <div className='error-404'>
      <h1>
        <Back />
        <span>404</span>
        <div className='empty'></div>
      </h1>
    </div>
  );
};
export default Error404;
