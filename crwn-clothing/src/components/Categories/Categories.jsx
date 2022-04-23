import "./Categories.scss";
import Category from "../Category";
import PropTypes from "prop-types";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(c => (
        <Category key={c.id} category={c} />
      ))}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Categories;
