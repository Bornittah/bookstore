import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { id, value, onClick } = props;
  return (
    <button type="submit" id={id} value={value} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  id: null,
  value: null,
  onClick: null,
};
Button.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};
