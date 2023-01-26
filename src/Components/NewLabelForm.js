import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewLabelForm.css";

const NewlabelForm = ({ addLabelCallback }) => {
  const [labelData, setLabelData] = useState({
    title: "",
    owner: "",
  });

  const submitLabelData = (e) => {
    e.preventDefault();

    addLabelCallback(labelData);
    setLabelData({ title: "", owner: "" });
  };

  const handleChange = (e) => {
    setLabelData({ ...labelData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitlabelData}>
      <section>
        <div className="new__label__fields">
          <label htmlFor="name">Label Name</label>
          <input
            name="title"
            id="title"
            value={labelData.title}
            onChange={handleChange}
            className={labelData.title.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">Your Name</label>
          <input
            name="owner"
            id="owner"
            value={labelData.owner}
            onChange={handleChange}
            className={labelData.owner.length === 0 ? "invalid__form__input" : ""}
          />
          <p className="required">* required</p>
          <p>
            Preview: {labelData.title} - {labelData.owner}
          </p>
          <button
            className="submit__button"
            type="submit"
            disabled={
              labelData.title.length === 0 || labelData.owner.length === 0
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