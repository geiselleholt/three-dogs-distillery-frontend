import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Userfront from "@userfront/react";
import axios from 'axios';
import "./Item.css";


const Item = (props) => {
  const [status, setStatus] = useState('Processing')

  const changeStatusApi = async (e) => {
    const changeStatus = { status : e };
    await axios.put(`${process.env.REACT_APP_BACKEND_URL}/items/${props.id}/status`, 
    changeStatus);
  };

  const handleChange = (e) => {
    setStatus(e.target.value);
    changeStatusApi(e.target.value);
  };
  

  return (
    <ul className='order__section'>
      <li>Order Id: {props.id}</li>
      <li>Email: {props.email}</li>
      <li>Spirit: {props.spirit}</li>
      <li>Flavor: {props.flavor}</li>
      <li>Bottle: {props.bottle}</li>
      <li>Quantity: {props.quantity}</li>
      <li>
        {Userfront.user.email === "guamgirl1213@gmail.com" ?
          <select
          className="select"
          name="status"
          id="status"
          onChange={handleChange}
          defaultValue={'Processing'}
      >
          <option value="Processing">Processing</option>
          <option value="Fermenting">Fermenting</option>
          <option value={"Aging"}>Aging</option>
          <option value={"Packaging"}>Packaging</option>
          <option value={"Shipped"}>Shipped</option>
        </select> : 
        <p>Order Status: {status}</p>
        }
      </li>

      {props.label ?
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
      </ul> : []}
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