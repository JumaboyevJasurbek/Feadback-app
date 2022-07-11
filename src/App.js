import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";

import "./assets/scss/main.scss";
import SingleTodo from "./pages/single-pages/single";
import AddTodo from "./pages/AddTodo/add-todo";
import dataJs from "./components/data/data";
import { useState } from "react";

const App = () => {
  const [feadbacks, setFeadbacks] = useState(dataJs);

  return (
    <Routes>
      <Route path="/" element={<Home feadbacks={feadbacks} />} />
      <Route
        path="/add"
        element={<AddTodo feadbacks={feadbacks} setFeadbacks={setFeadbacks} />}
      />
      <Route
        path="/SingleTodo/:id"
        element={
          <SingleTodo feadbacks={feadbacks} setFeadbacks={setFeadbacks} />
        }
      />
    </Routes>
  );
};

export default App;
