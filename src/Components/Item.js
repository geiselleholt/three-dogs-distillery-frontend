import React from 'react';
import PropTypes from 'prop-types';
import "./Item.css";

const Item = (props) => {
  return (
    <ul className='order__section'>
      <li>Order Id: {props.id}</li>
      <li>Customer email: {props.email}</li>
      <li>Spirit: {props.spirit}</li>
      <li>Flavor: {props.flavor}</li>
      <li>Bottle: {props.bottle}</li>
      <li>Quantity: {props.quantity}</li>
      <ul> Label Info:
      <li>Id: {props.label[0].id}</li>
      <li>Bottle Name: {props.label[0].name}</li>
      <li>Name Font: {props.label[0].name_font}</li>
      <li>Name Font Color: {props.label[0].name_font_color}</li>
      <li>Message: {props.label[0].message}</li>
      <li>Message Font: {props.label[0].message_font}</li>
      <li>Message Font Color: {props.label[0].message_font_color}</li>
      <li>Image: {props.label[0].image}</li>
      <li>Background Color: {props.label[0].background_color}</li>
      </ul>
    </ul>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  spirit: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  bottle: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  email: PropTypes.string,
  label: PropTypes.array,
};

export default Item;