import PropTypes from "prop-types";
import "./SearchBox.css";

const SearchBox = props => {
  return (
    <div>
      <input
        className={`search-box ${props.className}`}
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

SearchBox.defaultProps = {
  className: "search-text",
  placeholder: "serach...",
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
