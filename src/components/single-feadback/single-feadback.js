import "./single-feadback.scss";
import addPath from "../../assets/img/add-path.svg";
import { Link, useParams } from "react-router-dom";
import AddComment from "../add-comment/add-comment";
import Button from "../button/button";
import Container from "../container/container";
// import dataJs from "../data/data";
// import { useState } from "react";
import FeadbackCard from "../feadback-card/feadback-card";

const SingleFeadback = ({ feadbacks }) => {
  const { id } = useParams();
  const currentTodo = feadbacks.find((todo) => todo.id === +id);
  return (
    <Container className="feedback-container">
      <div className="feedback__top">
        <Link className="add__link" to="/">
          <img className="add__path" src={addPath} alt="img" />
          <p className="add__back-home">Go Back</p>
        </Link>{" "}
        <Button className="fea=edback--">Edit Feedback</Button>
      </div>
      <div className="feedback-list">
        <div className="feedback">
          <hr className="hr" />
        </div>

        {/* <div className="feedback-main">
          <FeadbackCard todo={currentTodo} />
        </div> */}

        {currentTodo ? (
          currentTodo.comments.map((todo) => (
            <div key={todo.id} className="feedback-comment">
              <div className="feedback-comment__list">
                <div className="feadback-top">
                  <div className="feadback-top__left">
                    <img src={todo.user.image} alt="img" />
                    <div className="feadback-top__name">
                      <h5 className="feadback-top__title">{todo.user.name}</h5>
                      <a className="feadback-top__link" href="/">
                        {todo.user.username}
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="reply">Reply</p>
                  </div>
                </div>
                <div className="feadback-bottom">
                  <p className="feadback-bottom__text">{todo.content}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <FeadbackCard />
        )}
        <AddComment current={currentTodo.comments}></AddComment>
      </div>
    </Container>
  );
};
// const Feedback = ({feedbacks}) => {
//   const {id} = useParams()
//   const currentTodo = feedbacks.find(todo => todo.id === +id)
//
// const [data] = useState(dataJs);
// return (
//   <div className="feadback-card">
//     {data.map((todo) => (
//       <div key={todo.id} className="feadback-box">
//         <div className="feadback-section">
//           <LikeButton className="like__button">
//             <img src={likeImg} alt="" /> {todo.upvotes}
//           </LikeButton>
//           <div className="feadback-section__wrapper">
//             <Link to="/SingleTodo">
//               <h2 className="feadback-section__heading">{todo.title}</h2>
//             </Link>
//             <p className="feadback-section__text">{todo.description}</p>
//             <TypeBadge>{todo.category}</TypeBadge>
//           </div>
//         </div>
//         <div className="feadback-section__right">
//           <img src={commentImg} alt="" />
//           <span className="feadback-section__right__span">
//             <div>{todo.comments ? todo.comments.length : 0}</div>
//           </span>
//         </div>
//       </div>
//     ))}
//   </div>
// );
// };

export default SingleFeadback;
