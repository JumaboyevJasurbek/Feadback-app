import "./feadback-card.scss";
import LikeButton from "../like-feadback/like-feadback";
import likeImg from "../../assets/img/path.svg";
import commentImg from "../../assets/img/comment.svg";
import TypeBadge from "../type-badge/type-badge";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { DataContext } from "../../App";

// import dataJs from "../data/data";
// import { useState } from "react";

const FeadbackCard = ({ todo }) => {
  // const { data } = useContext(DataContext);
  // const [data, setData] = useState(dataJs);
  // console.log(todo);
  return (
    <div todo={todo} className="feadback-card">
      {/* {todo.map((todo) => ( */}
      <div className="feadback-box">
        <div className="feadback-section">
          <LikeButton className="like__button">
            <img src={likeImg} alt="" /> {todo.upvotes}
          </LikeButton>
          <div className="feadback-section__wrapper">
            <Link to={"/SingleTodo/ " + todo.id}>
              <h2 className="feadback-section__heading">{todo.title}</h2>
            </Link>
            <p className="feadback-section__text">{todo.description}</p>
            <TypeBadge>{todo.category}</TypeBadge>
          </div>
        </div>
        <div className="feadback-section__right">
          <img src={commentImg} alt="" />
          <span className="feadback-section__right__span">
            <div>{todo.comments ? todo.comments.length : 0}</div>
          </span>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};
export default FeadbackCard;
