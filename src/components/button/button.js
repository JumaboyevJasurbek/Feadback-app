// import { useState } from "react";
import { Link } from "react-router-dom";
import "./button.scss";

// const Button1 = () => {
//   const [button, setButton] = useState("");
//   return (
//     <Link to="/add">
//       <div href="/" className="button">
//         + Add Feedback
//       </div>
//     </Link>
//   );
// };

const NeededComponent = (props) =>
  props.to ? <Link {...props} /> : <button {...props} />;

const Button = ({ className = "", ...props }) => {
  return <NeededComponent {...props} className={`button ${className}`} />;
};

export default Button;
