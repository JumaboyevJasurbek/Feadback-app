// import { useParams } from "react-router-dom";
// import AddComment from "../../components/add-comment/add-comment";
// import FeadbackCard from "../../components/feadback-card/feadback-card";

import SingleFeadback from "../../components/single-feadback/single-feadback";
import "./single.scss";
const SinglePage = ({ feadbacks }) => {
  return <SingleFeadback todo={feadbacks} />;
};

export default SinglePage;
