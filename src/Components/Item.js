import React from 'react';
import PropTypes from 'prop-types';
// import './Item.css';

const Item = (props) => {
  return (
    <li>
      Hello
    </li>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  spirit_type: PropTypes.string.isRequired,
  spirit_flavor: PropTypes.string.isRequired,
  bottle_type: PropTypes.string.isRequired,
  bottle_quantity: PropTypes.number.isRequired,
  age_time: PropTypes.string.isRequired,
  order_id: PropTypes.number.isRequired,
};

export default Item;