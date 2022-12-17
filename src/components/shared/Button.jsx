import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    id, className, value, onClick,
  } = props;
  return (
    <button type="submit" id={id} className={className} value={value} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  id: null,
  className: null,
  value: null,
  onClick: null,
};
Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};
