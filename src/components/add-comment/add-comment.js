import { useEffect, useState } from "react";
import Button from "../button/button";
import "./add-comment.scss";

const MAX_COUNT = 250;

const AddComment = () => {
  const [textareaValue, settextareaValue] = useState("");
  const [message, setMessage] = useState("");

  // const leftLettersCount = +(MAX_COUNT - textareaValue.length);

  // const handlyFormSubmit = (evt) => {
  //   evt.preventDefault;
  // };

  const handlyTextareaChange = (evt) => {
    evt.preventDefault();
    if (MAX_COUNT - evt.target.value.length >= 0) {
      settextareaValue(evt.target.value);
    }
  };

  useEffect(() => {
    if (MAX_COUNT - textareaValue.length === 0) {
      setMessage("soz tugadi :>");
    } else {
      setMessage("soz kiriting");
    }
  }, [textareaValue]);

  return (
    <div className="add-comment__section">
      <h2 className="add-comment__heading">Add Comment</h2>
      <form className="add-comment__form">
        <textarea
          className="add-comment__textarea"
          value={textareaValue}
          type="text"
          onChange={handlyTextareaChange}
          placeholder="Type your comment here"
        />
        <div className="add-comment__div">
          <p className="add-coment__text">
            {MAX_COUNT - textareaValue.length} Characters left
          </p>
          <Button>Post Comment</Button>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
