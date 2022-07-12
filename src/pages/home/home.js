import Container from "../../components/container/container";
import Intro from "../../components/intro/intro";
import Header from "../../components/header/header";
import Roadmap from "../../components/roadmap/roadmap";
import TypeFilter from "../../components/type-filter/type-filter";
// import FeadbackCard from "../../components/feadback-card/feadback-card";
import FeadbackMap from "../../components/feadback-map/feadback-map";
import "./home.scss";

const Home = ({ feadbacks }) => {
  return (
    <main className="home">
      <Container className="home__container">
        <div className="home__left">
          <Intro />
          <TypeFilter />
          <Roadmap />
        </div>
        <div className="home__right">
          <Header />
          <FeadbackMap />
        </div>
      </Container>
    </main>
  );
};

export default Home;
