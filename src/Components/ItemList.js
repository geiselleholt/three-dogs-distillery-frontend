import React from "react";
import Item from "./Item";
import "./ItemList.css";
import PropTypes from "prop-types";

const ItemList = (props) => {
//   return (
//     <ul className="item__list">
//       {props.itemsData.map((item) => (
//         <Item
//           id={item.id}
//           boardId={item.boardId}
//           message={item.message}
//           likesCount={item.likesCount}
//           key={item.id}
//           handleLikes={props.handleLikes}
//           handleDeleteitem={props.handleDeleteitem}
//         />
//       ))}
//     </ul>
//   );
// };

// ItemList.propTypes = {
//   itemsData: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       boardId: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//       likesCount: PropTypes.number.isRequired,
//     })
//   ),
//   handleLikes: PropTypes.func.isRequired,
//   handleDeleteItem: PropTypes.func.isRequired,
};

export default ItemList;