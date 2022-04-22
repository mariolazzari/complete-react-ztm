import PropTypes from "prop-types";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ items }) => (
  <div className="card-list">
    {items.map(item => (
      <Card item={item} />
    ))}
  </div>
);

CardList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CardList;
