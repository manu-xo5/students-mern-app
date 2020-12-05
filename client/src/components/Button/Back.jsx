import arrow from "../../assets/arrow.svg";
const imageStyles = {
  display: "block",
  width: 20,
  hieght: 20,
};
const Back = ({ className = "", ...props }) => {
  return (
    <button className={`click transparent ${className}`} {...props}>
      <img style={imageStyles} src={arrow} alt="go back" />
    </button>
  );
};
export default Back;
