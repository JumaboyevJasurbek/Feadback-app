import Container from "../../components/container/container";
import FeadbackCard from "../feadback-card/feadback-card";
// import SingleFeadback from "../single-feadback/single-feadback";
import "./feadback-map.scss";

const FeadbackMap = ({ todo }) => {
  return (
    <div className="feadback-map">
      <Container className="feadback-map__container">
        {todo.map((todo) => (
          <FeadbackCard key={todo.id} todo={todo} />
        ))}
      </Container>
    </div>
  );
};
export default FeadbackMap;
