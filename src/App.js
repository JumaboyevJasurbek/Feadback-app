import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";

import "./assets/scss/main.scss";
import SingleTodo from "./pages/single-pages/single";
import AddTodo from "./pages/AddTodo/add-todo";
import dataJs from "./components/data/data";
import { useState } from "react";
import { createContext } from "react";
import EditPages from "./pages/edit-page/edit";
import RoadmapPages from "./pages/Roadmap/Roadmap-pages";

export const DataContext = createContext();

const App = () => {
  const [data, setData] = useState(dataJs);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/edit/:id" element={<EditPages />} />
        <Route path="/roadmap-pages" element={<RoadmapPages />} />
        <Route path="/SingleTodo/:id" element={<SingleTodo />} />
      </Routes>
    </DataContext.Provider>
  );
};

export default App;
