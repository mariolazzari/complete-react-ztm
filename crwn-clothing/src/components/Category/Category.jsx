import "./Category.scss";
import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { imageUrl, title } = category;
  const backgroundImage = `url(${imageUrl})`;

  return (
    <div className="category-container">
      <div className="background-image" style={{ backgroundImage }} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
