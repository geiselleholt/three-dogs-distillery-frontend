import React from "react";
import Order from "./Order";
import "./OrderList.css";
import PropTypes from "prop-types";

const OrderList = (props) => {
//   return (
//     <ul className="order__list">
//       {props.ordersData.map((order) => (
//         <Order
//           id={order.id}
//           boardId={order.boardId}
//           message={order.message}
//           likesCount={order.likesCount}
//           key={order.id}
//           handleLikes={props.handleLikes}
//           handleDeleteorder={props.handleDeleteorder}
//         />
//       ))}
//     </ul>
//   );
// };

// OrderList.propTypes = {
//   ordersData: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       boardId: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//       likesCount: PropTypes.number.isRequired,
//     })
//   ),
//   handleLikes: PropTypes.func.isRequired,
//   handleDeleteOrder: PropTypes.func.isRequired,
};

export default OrderList;