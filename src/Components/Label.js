import React from 'react';
import PropTypes from 'prop-types';
import "./Label.css";

const Label = (props) => {
  return (
    <section className='label'>
      <p>Order Id: {props.item_id}</p>
      <p>Bottle Name: {props.name}</p>
      <p>Name Font: {props.name_font}</p>
      <p>Name Font Color: {props.name_font_color}</p>
      <p>Message: {props.message}</p>
      <p>Message Font: {props.message_font}</p>
      <p>Message Font Color: {props.message_font_color}</p>
      <p>Image: {props.image}</p>
    </section>
  );
};

Label.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  name_font: PropTypes.string,
  name_font_color: PropTypes.string,
  message: PropTypes.string,
  message_font: PropTypes.string,
  message_font_color: PropTypes.string,
  image: PropTypes.string,
  item_id: PropTypes.number.isRequired,
};

export default Label;