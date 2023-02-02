import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewLabelForm.css";

const NewLabelForm = ({ addLabelCallback }) => {
  const [labelData, setLabelData] = useState({
    name_font: "",
    name: "",
    message_font: "",
    message: "",
  });

  const submitLabelData = (e) => {
    e.preventDefault();

    addLabelCallback(labelData);
    setLabelData({
      name_font: "",
      name: "",
      message_font: "",
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
          <p className="optional">*up to 50 characters</p>
          <input
            className="field"
            name="name"
            id="name"
            value={labelData.name}
            onChange={handleChange}
          />
          <section>
          <p>Choose Your Bottle Name's Font</p>
            <button
              name="name_font"
              id="name_font"
              value="name_arial"
              onClick={handleChange} 
              className="arial">Arial</button>
            <button
              name="name_font"
              id="name_font"
              value="name_cursive"
              onClick={handleChange}
              className="cursive">Cursive</button>
            <button 
              name="name_font"
              id="name_font"
              value="name_fantasy"
              onClick={handleChange}
              className="fantasy">Fantasy</button>
            <button             
              name="name_font"
              id="name_font"
              value="name_impact"
              onClick={handleChange}
              className="impact">Impact</button>
            <button             
              name="name_font"
              id="name_font"
              value="name_roman"
              onClick={handleChange}
              className="roman">Roman</button>
          </section>
          </section>
          <section className="new__label__fields">
          <label htmlFor="name">Choose Your Message </label>
          <p className="optional">*optional- up to 100 characters</p>
          <input
            className="field"
            name="message"
            id="message"
            value={labelData.message}
            onChange={handleChange}
          />
          <section className="message_preview">
            <p>Choose Your Message's Font</p>
            <button 
              name="message_font"
              id="message_font"
              value="message_arial"
              onClick={handleChange}
              className="arial">Arial</button>
            <button 
              name="message_font"
              id="message_font"
              value="message_cursive"
              onClick={handleChange}
            className="cursive">Cursive</button>
            <button 
              name="message_font"
              id="message_font"
              value="message_fantasy"
              onClick={handleChange}
              className="fantasy">Fantasy</button>
            <button 
              name="message_font"
              id="message_font"
              value="message_impact"
              onClick={handleChange}
              className="impact">Impact</button>
            <button               
              name="message_font"
              id="message_font"
              value="message_roman"
              onClick={handleChange}
              className="roman">Roman</button>
          </section>
          </section>
          <section className="new__label__fields">
          <p>Preview:</p>
          <section className="preview__section">
          <p className={labelData.name_font}>{labelData.name}</p>
          <p className={labelData.message_font}>{labelData.message}</p>
          </section>
          </section>
          <section className="button__section">
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