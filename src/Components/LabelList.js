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
          name_font_color={label.name_font_color}
          message={label.message}
          message_font={label.message_font}
          message_font_color={label.message_font_color}
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
      name: PropTypes.string,
      name_font: PropTypes.string,
      name_font_color: PropTypes.string,
      message: PropTypes.string,
      message_font: PropTypes.string,
      message_font_color: PropTypes.string,
      image: PropTypes.string,
      item_id: PropTypes.number.isRequired,
    })
  ),
};

export default LabelList;