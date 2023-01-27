import React from "react";
import Label from "./Label";
// import "./LabelList.css";
import PropTypes from "prop-types";


const LabelList = (props) => {
  return (
    <ul className="label__list">
      {props.labelsData.map((label) => (
        <Label
          key={label.id}
          id={label.id}
          font={label.font}
          name={label.name}
          message={label.message}
          item_id={order.item_id}
        />
      ))}
    </ul>
  );
};

LabelList.propTypes = {
  labelsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      font: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      item_id: PropTypes.number.isRequired,
    })
  ),
};