import React from 'react';
import PropTypes from 'prop-types';
import "./Label.css";

const Label = (props) => {
  return (
    <section className='label'>
      <p>Order Id: {props.item_id}</p>
      <p>Bottle Name: {props.name}</p>
      <p>Name Font: {props.name_font}</p>
      <p>Message: {props.message}</p>
      <p>Message Font: {props.message_font}</p>
      <p>Image: {props.image}</p>
    </section>
  );
};

Label.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  name_font: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  message_font: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  item_id: PropTypes.number.isRequired,
};

export default Label;