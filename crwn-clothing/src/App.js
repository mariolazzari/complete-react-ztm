import { Routes, Route } from "react-router-dom";
import MenuBar from "./views/MenuBar";
import Home from "./views/Home";
import Shop from "./views/Shop";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
