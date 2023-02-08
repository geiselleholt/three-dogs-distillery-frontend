import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";
import "./ItemList.css";


const ItemList = (props) => {
  return (
    <ul>
      {props.itemsData.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          spirit={item.spirit}
          flavor={item.flavor}
          bottle={item.bottle}
          // quantity={item.quantity}     
        />
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  itemsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      spirit: PropTypes.string.isRequired,
      lavor: PropTypes.string.isRequired,
      bottle: PropTypes.string.isRequired,
      // quantity: PropTypes.number.isRequired,
    })
  ),
};

export default ItemList;