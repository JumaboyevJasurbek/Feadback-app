import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../App";
import Container from "../../components/container/container";
import "./edit.scss";
import addPath from "../../assets/img/add-path.svg";
import editImg from "../../assets/img/edit-img.svg";
import Button from "../../components/button/button";
const EditPages = () => {
  const { id } = useParams();

  const { data, setData } = useContext(DataContext);

  const navigate = useNavigate();

  const currentData = data.find((dataItem) => dataItem.id === +id);

  const [titleValue, setTitleValue] = useState(currentData?.title);
  const [categoryValue, setCategoryValue] = useState(currentData?.category);
  const [statusValue, setStatusValue] = useState(currentData?.status);
  const [descriptionValue, setDescriptionValue] = useState(
    currentData?.description
  );

  console.log(currentData);

  if (!currentData) {
    return <h1>hech balo yoq</h1>;
  }

  const handleTitleChange = (evt) => {
    setTitleValue(evt.target.value);
  };

  const handleCategoryChange = (evt) => {
    setCategoryValue(evt.target.value);
  };

  const handleStatusChange = (evt) => {
    setStatusValue(evt.target.value);
  };
  const handleDescChange = (evt) => {
    setDescriptionValue(evt.target.value);
  };

  const handleEditSubmit = (evt) => {
    evt.preventDefault();

    const editableItemIndex = data.findIndex(
      (dataItem) => dataItem.id === currentData.id
    );

    const editedFeadback = {
      id: currentData.id,
      category: categoryValue,
      upvotes: currentData.upvotes,
      description: descriptionValue,
      status: statusValue,
      title: titleValue,
      comments: currentData.comments,
    };

    const newFeadbacks = [
      ...data.slice(0, editableItemIndex),
      editedFeadback,
      ...data.slice(editableItemIndex + 1),
    ];

    console.log(newFeadbacks);
    setData(newFeadbacks);
    navigate(`/SingleTodo/${currentData.id}`);
  };

  const handleBackClick = () => {
    navigate(`/SingleTodo/${currentData.id}`);
  };

  return (
    <Container>
      <div className="edit__wrapper">
        <div onClick={handleBackClick} className="edit__link">
          <img className="edit__path" src={addPath} alt="img" />
          <p className="edit__back-home">Go Back</p>
        </div>

        <div className="edit-main">
          <div className="edit-main__wrapper">
            <img className="edit-main__img" src={editImg} alt="img" />

            <h2 className="edit-main__heading">
              Editing 'Add a dark theme option'
            </h2>

            <form className="edit-main__form" onSubmit={handleEditSubmit}>
              <h3 className="edit-main__heading">Feedback Title</h3>
              <h5 className="edit-main__span">
                Add a short, descriptive headline
              </h5>
              <input
                className="edit-main__input"
                value={titleValue}
                onChange={handleTitleChange}
                type="text"
              />

              <h3 className="edit-main__heading">Category</h3>
              <h5 className="edit-main__span">
                Choose a category for your feedback
              </h5>
              <select
                className="edit-main__input"
                onChange={handleCategoryChange}
                value={categoryValue}
              >
                <option className="edit-main__category-option">Feature</option>
                <option className="edit-main__category-option">All</option>
                <option className="edit-main__category-option">UI</option>
                <option className="edit-main__category-option">UX</option>
                <option className="edit-main__category-option">
                  Enhancement
                </option>
                <option className="edit-main__category-option">Bug</option>
              </select>

              <select
                className="edit-main__input"
                onChange={handleStatusChange}
                value={statusValue}
              >
                <option className="edit-main__category-option">Planned</option>
                <option className="edit-main__category-option">
                  Suggestion
                </option>
                <option className="edit-main__category-option">Planned</option>
                <option className="edit-main__category-option">
                  In-Progress
                </option>
                <option className="edit-main__category-option">
                  Enhancement
                </option>
                <option className="edit-main__category-option">Live</option>
              </select>

              <h3 className="edit-main__heading">Feedback Detail</h3>
              <h5 className="edit-main__span">
                Include any specific comments on what should be improved, added,
                etc.
              </h5>
              <input
                className="edit-main__input edit-main__input--desc"
                value={descriptionValue}
                onChange={handleDescChange}
                type="text"
              />

              <Button>Add Feadback</Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EditPages;
