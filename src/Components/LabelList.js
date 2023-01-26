import React from "react";
import Label from "./Label";
import "./LabelList.css";
import PropTypes from "prop-types";

const LabelList = (props) => {
//   return (
//     <ul className="label__list">
//       {props.labelsData.map((label) => (
//         <Label
//           id={label.id}
//           boardId={label.boardId}
//           message={label.message}
//           likesCount={label.likesCount}
//           key={label.id}
//           handleLikes={props.handleLikes}
//           handleDeletelabel={props.handleDeletelabel}
//         />
//       ))}
//     </ul>
//   );
// };

// LabelList.propTypes = {
//   labelsData: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       boardId: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//       likesCount: PropTypes.number.isRequired,
//     })
//   ),
//   handleLikes: PropTypes.func.isRequired,
//   handleDeleteLabel: PropTypes.func.isRequired,
};

export default LabelList;