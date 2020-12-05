import menu from "../../assets/menu.svg";
const imageStyles = {
  display: "block",
  width: 24,
  hieght: 24,
};
const Menu = ({ className = "", ...props }) => {
  return (
    <button
      className={`click transparent ${className}`}
      type="button"
      {...props}
    >
      <img style={imageStyles} src={menu} alt="menu button" />
    </button>
  );
};
export default Menu;
