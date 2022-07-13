import { Link } from "react-router-dom";
import "./roadmap.scss";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmap__wrapper">
        <div className="roadmap__wrapper-top">
          <h2 className="roadmap__heading">Roadmap</h2>
          <Link className="roadmap__link" to="/roadmap-pages">
            View
          </Link>
        </div>

        <div className="roadmap__list-wrapper">
          <ul className="roadmap__list">
            <li className="roadmap__item">Planned</li>
            <li className="roadmap__item">In-Progress</li>
            <li className="roadmap__item">Live</li>
          </ul>

          <ul className="roadmap__list">
            <li className="roadmap__item-number">2</li>
            <li className="roadmap__item-number">3</li>
            <li className="roadmap__item-number">1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
