import React, { useState } from "react";
import PropTypes from "prop-types";
// import "./NewLabelForm.css";

const NewLabelForm = ({ addLabelCallback }) => {
  const [labelData, setLabelData] = useState({
    font: "",
    name: "",
    message: "",
  });

  const submitLabelData = (e) => {
    e.preventDefault();

    addLabelCallback(labelData);
    setLabelData({
      font: "",
      name: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setLabelData({ ...labelData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitLabelData}>
      <section>
        <div className="new__label__fields">
          <label htmlFor="name">What kind of Font would you like?</label>
          <input
            name="font"
            id="font"
            value={labelData.font}
            onChange={handleChange}
            className={labelData.font.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">What would you like your Bottle Name to be?</label>
          <input
            name="name"
            id="name"
            value={labelData.name}
            onChange={handleChange}
            className={labelData.name.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">Would you like to add a message on your bottle?</label>
          <input
            name="message"
            id="message"
            value={labelData.message}
            onChange={handleChange}
          />
          <p className="required">* required</p>
          <p>
            Preview: {labelData.font} - {labelData.name}
          </p>
          <button
            className="submit__button"
            type="submit"
            disabled={
              labelData.font.length === 0 || labelData.name.length === 0
            }
          >
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};

NewLabelForm.propTypes = {
  addLabelCallback: PropTypes.func.isRequired,
};

export default NewLabelForm;