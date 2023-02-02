import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewLabelForm.css";

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
        <div >
          <section className="new__label__fields">
          <label htmlFor="name">Choose Your Bottle's Name</label>
          <input
            name="name"
            id="name"
            value={labelData.name}
            onChange={handleChange}
            className={labelData.name.length === 0 ? "invalid__form__input" : ""}
          />
          <section>
          <p>Choose Your Bottle Name's Font</p>
            <button className="arial">Arial</button>
            <button className="cursive">Cursive</button>
            <button className="fantasy">Fantasy</button>
            <button className="impact">Impact</button>
            <button className="roman">Roman</button>
          </section>
          </section>
          <section className="new__label__fields">
          <label htmlFor="name">Choose Your Message (optional)</label>
          <input
            name="message"
            id="message"
            value={labelData.message}
            onChange={handleChange}
          />
          <section>
            <p>Choose Your Message's Font</p>
            <button className="arial">Arial</button>
            <button className="cursive">Cursive</button>
            <button className="fantasy">Fantasy</button>
            <button className="impact">Impact</button>
            <button className="roman">Roman</button>
          </section>
          </section>
          <section className="new__label__fields">
          <p>Preview:</p>
          <section className="preview__section">
          <p>{labelData.name}</p>
          <p>{labelData.message}</p>
          </section>
          </section>
          <section className="button__section">
          <button
            className="submit__button"
            type="submit"
            disabled={
              labelData.font.length === 0 || labelData.name.length === 0
            }
          >
            Add to Order to Cart
          </button>
          </section>
        </div>
      </section>
    </form>
  );
};

NewLabelForm.propTypes = {
  addLabelCallback: PropTypes.func.isRequired,
};

export default NewLabelForm;