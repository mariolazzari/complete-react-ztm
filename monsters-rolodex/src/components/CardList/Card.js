import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ item }) => {
  const { id, name, email } = item;

  return (
    <div key={id} className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`Monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
