import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";

import "./assets/scss/main.scss";
import SingleTodo from "./pages/single-pages/single";
import AddTodo from "./pages/AddTodo/add-todo";
import dataJs from "./components/data/data";
import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext();

const App = () => {
  const [data, setData] = useState(dataJs);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/SingleTodo/:id" element={<SingleTodo />} />
      </Routes>
    </DataContext.Provider>
  );
};

export default App;

{
  /* <Route path="/" element={<Home feadbacks={feadbacks} />} />
<Route path="/add" element={<AddTodo feadbacks={feadbacks} setFeadbacks={setFeadbacks} />} />
<Route path="/SingleTodo/:id" element={ <SingleTodo feadbacks={feadbacks} setFeadbacks={setFeadbacks} />}  /> */
}
