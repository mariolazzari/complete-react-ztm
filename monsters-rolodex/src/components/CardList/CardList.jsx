import PropTypes from "prop-types";

const CardList = props => {
  return (
    <div>
      {props.items.map(monster => (
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
      ))}
    </div>
  );
};

CardList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CardList;
