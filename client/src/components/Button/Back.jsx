import arrow from "../../assets/arrow.svg";
import { useHistory } from "react-router-dom";

const noop = () => {};

export const Back = ({ className = "", onClick = noop, ...props }) => {
  const history = useHistory();
  return (
    <button
      className={`click transparent back${className}`}
      onClick={() => {
        history.push("/");
        onClick();
      }}
      {...props}>
      <img className="empty" src={arrow} alt="go back" />
    </button>
  );
};
