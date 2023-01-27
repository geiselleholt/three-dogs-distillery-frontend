import React from 'react';
import PropTypes from 'prop-types';
// import './Order.css';

const Order = (props) => {
  return (
    <li>
      Hello
    </li>
  );
};

Order.propTypes = {
  id: PropTypes.number.isRequired,
  sub_total: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  delivery_date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Order;