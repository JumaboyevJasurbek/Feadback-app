import "./like-feadback.scss";

const LikeButton = ({ children, className }) => {
  return <button className={`like-feadback ${className}`}>{children}</button>;
};

export default LikeButton;
