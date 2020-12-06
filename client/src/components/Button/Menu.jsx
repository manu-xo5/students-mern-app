import menu from '../../assets/menu.svg';

const Menu = ({ className = '', ...props }) => {
  return (
    <button
      className={`click transparent menu ${className}`}
      type='button'
      {...props}
    >
      <img className='empty' src={menu} alt='menu button' />
    </button>
  );
};
export default Menu;
