import "./header.scss";
import bulb from "../../assets/img/bulb.svg";
import Button from "../button/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__top">
          <div className="header__top__left">
            <img src={bulb} alt="bulb" className="header__top__bulb" />
            <h2 className="header__top__suggest">6 Suggestions</h2>
          </div>
          <div className="header__top__right">
            <p className="header__top__text ">Sort by :</p>
            <select className="header__top__select">
              <option className="header__top__option">Most Upvotes</option>
              <option className="header__top__option">Most Upvotes</option>
              <option className="header__top__option">Least Upvotes</option>
              <option className="header__top__option">Most Comments</option>
              <option className="header__top__option">Least Comments</option>
            </select>
          </div>
          <Link to="/add">
            <Button className="header__top__button">+ Add Feedback</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
