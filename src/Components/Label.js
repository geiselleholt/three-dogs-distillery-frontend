import React from 'react';
import PropTypes from 'prop-types';
import "./Label.css";

const Label = (props) => {
  return (
    <li>
      Hello
    </li>
  );
};

Label.propTypes = {
  id: PropTypes.number.isRequired,
  font: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  item_id: PropTypes.number.isRequired,
};

export default Label;