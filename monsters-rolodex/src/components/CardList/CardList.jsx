import PropTypes from "prop-types";
import Card from "./Card";
import "./CardList.css";

const CardList = props => {
  return (
    <div className="card-list">
      {props.items.map(item => (
        <Card item={item} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CardList;
