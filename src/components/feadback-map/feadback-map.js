import { useContext } from "react";
import { DataContext } from "../../App";
import Container from "../../components/container/container";
import FeadbackCard from "../feadback-card/feadback-card";
// import SingleFeadback from "../single-feadback/single-feadback";
import "./feadback-map.scss";

const FeadbackMap = () => {
  const { data } = useContext(DataContext);
  return (
    <div className="feadback-map">
      <Container className="feadback-map__container">
        {data.map((todo) => (
          <FeadbackCard key={todo.id} todo={todo} />
        ))}
      </Container>
    </div>
  );
};
export default FeadbackMap;
