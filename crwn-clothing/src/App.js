import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import MenuBar from "./views/MenuBar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
