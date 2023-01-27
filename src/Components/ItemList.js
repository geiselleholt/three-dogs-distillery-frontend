import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";
import ItemList from "./ComponentsCss/ItemList";


const ItemList = (props) => {
  return (
    <ul>
      {props.itemsData.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          spirit_type={item.spirit_type}
          spirit_flavor={item.spirit_flavor}
          bottle_type={item.bottle_type}
          bottle_quantity={item.bottle_quantity}
          age_time={item.age_time}
          order_id={item.order_id}     
        />
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  itemsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      spirit_type: PropTypes.string.isRequired,
      spirit_flavor: PropTypes.string.isRequired,
      bottle_type: PropTypes.string.isRequired,
      bottle_quantity: PropTypes.number.isRequired,
      age_time: PropTypes.string.isRequired,
      order_id: PropTypes.number.isRequired,
    })
  ),
};

export default ItemList;