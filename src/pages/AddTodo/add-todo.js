import "../../components/Add-pages/Add-pages.scss";
import addImg from "../../assets/img/add-img.svg";
import addPath from "../../assets/img/add-path.svg";
// import Container from "../container/container";
// import TypeBadge from "../type-badge/type-badge";
// import Button from "../button/button";

import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import Container from "../../components/container/container";
import TypeBadge from "../../components/type-badge/type-badge";
import Button from "../../components/button/button";
import { DataContext } from "../../App";
// import { useState } from "react";

const AddTodo = () => {
  const { data, setData } = useContext(DataContext);

  const inputName = useRef();
  const filterType = useRef();
  const inputComments = useRef();

  const handleFormClick = (evt) => {
    evt.preventDefault();
    const inputValue = inputName.current.value;
    const inputFilter = filterType.current.value;
    const inputDesc = inputComments.current.value;
    if (inputValue && inputDesc) {
      const newFeadback = {
        // id: Math.floor(Math.random() * 1000),
        title: inputValue,
        category: <TypeBadge>{inputFilter}</TypeBadge>,
        upvotes: 0,
        status: 0,
        description: inputDesc,
        comments: 0,
      };
      setData([newFeadback, ...data]);
    }
    inputName.current.value = "";
    inputComments.current.value = "";
    // setClick();
  };

  const addSection = [
    {
      id: 1,
      title: "Feedback Title",
      span: " Add a short, descriptive headline",
      input: (
        <input ref={inputName} type="text" required className="add__input" />
      ),
    },
    {
      id: 2,
      title: "Category",
      span: "Choose a category for your feedback",
      input: (
        <select ref={filterType} className="add__input">
          <option value="1">
            <TypeBadge>Feature</TypeBadge>
          </option>
          <option value="2">
            <TypeBadge>UI</TypeBadge>
          </option>
          <option value="3">
            <TypeBadge>UX</TypeBadge>
          </option>
          <option value="4">
            <TypeBadge>Enhancement</TypeBadge>
          </option>
          <option value="5">
            <TypeBadge>Bug</TypeBadge>
          </option>
        </select>
      ),
    },
    {
      id: 3,
      title: "Feedback Detail",
      span: "Include any specific comments on what should be improved, added, etc.",
      input: (
        <input
          ref={inputComments}
          type="text"
          className="add__input add__input--comments"
        />
      ),
    },
  ];
  //   const [click, setClick] = useState();

  return (
    <>
      <Container className="add__container">
        <div className="add__wrapper">
          <Link className="add__link" to="/">
            <img className="add__path" src={addPath} alt="img" />
            <p className="add__back-home">Go Back</p>
          </Link>
          <div className="add__card">
            <img className="add__img" src={addImg} alt="img" />
            <h2 className="add__heading">Create New Feedback</h2>
            <form onSubmit={handleFormClick} className="add__form">
              {addSection.map((todo) => (
                <div key={todo.id}>
                  <h3 className="add__title">{todo.title}</h3>
                  <span className="add__span">{todo.span}</span>
                  <div className="add__input-div">{todo.input}</div>
                </div>
              ))}
              <div className="add__button">
                <Link to="/">
                  <Button className="add__cancel">Cancel</Button>
                </Link>
                <Button className="add__submit">Add Feedback</Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddTodo;
