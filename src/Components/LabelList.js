import React from "react";
import Label from "./Label";
import PropTypes from "prop-types";
import "./LabelList.css";


const LabelList = (props) => {
  return (
    <ul className="label__list">
      {props.labelsData.map((label) => (
        <Label
          key={label.id}
          id={label.id}
          name={label.name}
          name_font={label.name_font}
          message={label.message}
          message_font={label.message_font}
          image={label.image}
          item_id={label.item_id}
        />
      ))}
    </ul>
  );
};

LabelList.propTypes = {
  labelsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      name_font: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      message_font: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      item_id: PropTypes.number.isRequired,
    })
  ),
};

export default LabelList;