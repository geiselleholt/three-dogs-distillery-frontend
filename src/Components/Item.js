import React from 'react';
import PropTypes from 'prop-types';
import "./Item.css";

const Item = (props) => {
  return (
    <section className='order__section'>
      <p>Order Id: {props.id}</p>
      <p>Customer email: {props.email}</p>
      <p>Spirit: {props.spirit}</p>
      <p>Flavor: {props.flavor}</p>
      <p>Bottle: {props.bottle}</p>
      <p>Quantity: {props.quantity}</p>
    </section>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  spirit: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  bottle: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default Item;