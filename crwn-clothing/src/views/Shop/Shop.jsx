import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <Outlet />
      <div>
        <h1>Shop</h1>
      </div>
    </>
  );
};

export default Shop;
