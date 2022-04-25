import { Outlet } from "react-router-dom";
import Categories from "../../components/Categories";
import categories from "./categories.json";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Categories categories={categories} />;
    </div>
  );
};

export default Home;
