import PropTypes from "prop-types";
import "./SearchBox.css";

const SearchBox = ({ className, placeholder, onChange }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChange}
  />
);

SearchBox.defaultProps = {
  className: "search-text",
  placeholder: "serach...",
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
