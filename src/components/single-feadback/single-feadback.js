import "./single-feadback.scss";
import addPath from "../../assets/img/add-path.svg";
import { Link, useParams } from "react-router-dom";
import AddComment from "../add-comment/add-comment";
import Button from "../button/button";
import Container from "../container/container";
// import dataJs from "../data/data";
// import { useState } from "react";
import FeadbackCard from "../feadback-card/feadback-card";
import { useContext } from "react";
import { DataContext } from "../../App";

const SingleFeadback = () => {
  const { data } = useContext(DataContext);
  const { id } = useParams();

  const currentTodo = data?.find((todo) => todo.id === +id);

  console.log(currentTodo.id);
  return (
    <Container className="feedback-container">
      <div className="feedback__top">
        <Link className="add__link" to="/">
          <img className="add__path" src={addPath} alt="img" />
          <p className="add__back-home">Go Back</p>
        </Link>
        <Link to={"/edit/ " + currentTodo.id}>
          <Button>Edit Feedback</Button>
        </Link>
      </div>
      <div className="feedback-main">
        <FeadbackCard todo={currentTodo} />
      </div>
      <div className="feedback-list">
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
      </div>
      <AddComment></AddComment>
    </Container>
  );
};

export default SingleFeadback;
