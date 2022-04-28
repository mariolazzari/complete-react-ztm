import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.scss";

const MenuBar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
          <Link className="nav-link" to="/sign-up">
            Sign Up
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MenuBar;
