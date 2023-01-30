import React from "react";
import Order from "./Order";
import PropTypes from "prop-types";


const OrderList = (props) => {
  return (
    <ul>
      {props.ordersData.map((order) => (
        <Order
          key={order.id}
          id={order.id}
          sub_total={order.sub_total}
          total={order.total}
          delivery_date={order.delivery_date}
          status={order.status}
          customer_id={order.customer_id}
        />
      ))}
    </ul>
  );
};

OrderList.propTypes = {
  ordersData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sub_total: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      delivery_date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      customer_id: PropTypes.number.isRequired,
    })
  ),
};

export default OrderList;