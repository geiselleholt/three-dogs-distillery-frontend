import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewLabelForm.css";


const NewLabelForm = ({ addLabelCallback, item }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [labelData, setLabelData] = useState({
    name: "",
    name_font: "",
    name_font_color: "",
    message: "",
    message_font: "",
    message_font_color: "",
    image: "",
    background_color: "",
  });
  const [image, setImage] = useState("")

  const submitLabelData = (e) => {
    e.preventDefault();
    
    addLabelCallback(labelData);
    toggleSubmitButton();
    setLabelData({
      name: "",
      name_font: "",
      name_font_color: "",
      message: "",
      message_font: "",
      message_font_color: "",
      image: "",
      background_color: "",
    });
  };


  const toggleSubmitButton = () => {
    setIsSubmitted(!isSubmitted);
  };

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'three_dogs_images')

    const response = await fetch('https://api.cloudinary.com/v1_1/dsaawpdte/image/upload',
    {
      method: 'POST',
      body: data
    })

    const file = await response.json()
    setImage(file.secure_url)
    const image = file.secure_url
    setLabelData({ ...labelData, [e.target.name]: e.target.value, item_id: item.id, image: image });
  }

  const handleChange = (e) => {
    setLabelData({ ...labelData, [e.target.name]: e.target.value });
  };


  return (
    <form onSubmit={submitLabelData}>
      <section>
        <div className="label_spirit" >
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
              type="button"
              name="name_font"
              id="name_font"
              value="arial"
              onClick={handleChange} 
              className="arial">Arial</button>
            <button
              type="button"
              name="name_font"
              id="name_font"
              value="cursive"
              onClick={handleChange}
              className="cursive">Cursive</button>
            <button 
              type="button"
              name="name_font"
              id="name_font"
              value="fantasy"
              onClick={handleChange}
              className="fantasy">Fantasy</button>
            <button
              type="button"             
              name="name_font"
              id="name_font"
              value="courier"
              onClick={handleChange}
              className="courier">Courier</button>
            <button
              type="button"             
              name="name_font"
              id="name_font"
              value="roman"
              onClick={handleChange}
              className="roman">Roman</button>
          </section>
          <section className="message_preview">
            <p>Choose Your Name Font's Color</p>
            <button
              type="button" 
              name="name_font_color"
              id="name_font_color"
              value="blue"
              onClick={handleChange}
              className="blue">Blue</button>
            <button
              type="button" 
              name="name_font_color"
              id="name_font_color"
              value="red"
              onClick={handleChange}
            className="red">Red</button>
            <button
              type="button" 
              name="name_font_color"
              id="name_font_color"
              value="green"
              onClick={handleChange}
              className="green">Green</button>
            <button
              type="button" 
              name="name_font_color"
              id="name_font_color"
              value="yellow"
              onClick={handleChange}
              className="yellow">Yellow</button>
            <button
              type="button"               
              name="name_font_color"
              id="name_font_color"
              value="purple"
              onClick={handleChange}
              className="purple">Purple</button>
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
              type="button" 
              name="message_font"
              id="message_font"
              value="arial"
              onClick={handleChange}
              className="arial">Arial</button>
            <button
              type="button" 
              name="message_font"
              id="message_font"
              value="cursive"
              onClick={handleChange}
            className="cursive">Cursive</button>
            <button
              type="button" 
              name="message_font"
              id="message_font"
              value="fantasy"
              onClick={handleChange}
              className="fantasy">Fantasy</button>
            <button
              type="button" 
              name="message_font"
              id="message_font"
              value="courier"
              onClick={handleChange}
              className="courier">Courier</button>
            <button
              type="button"               
              name="message_font"
              id="message_font"
              value="roman"
              onClick={handleChange}
              className="roman">Roman</button>
          </section>
          <section className="message_preview">
            <p>Choose Your Message Font's Color</p>
            <button
              type="button" 
              name="message_font_color"
              id="message_font_color"
              value="blue"
              onClick={handleChange}
              className="blue">Blue</button>
            <button
              type="button" 
              name="message_font_color"
              id="message_font_color"
              value="red"
              onClick={handleChange}
            className="red">Red</button>
            <button
              type="button" 
              name="message_font_color"
              id="message_font_color"
              value="green"
              onClick={handleChange}
              className="green">Green</button>
            <button
              type="button" 
              name="message_font_color"
              id="message_font_color"
              value="yellow"
              onClick={handleChange}
              className="yellow">Yellow</button>
            <button
              type="button"               
              name="message_font_color"
              id="message_font_color"
              value="purple"
              onClick={handleChange}
              className="purple">Purple</button>
          </section>
          </section>
          <section className="new__label__fields">
          <label htmlFor="name">Choose Your Image </label>
            <p className="optional">*optional</p>
            <input className="choose__file" type="file" placeholder="Upload an Image"
            onChange={uploadImage}/>
                      <section className="message_preview">
            <p>Choose Your Message Font's Color</p>
            <button
              type="button" 
              name="background_color"
              id="background_color"
              value="blue"
              onClick={handleChange}
              className="blue">Blue</button>
            <button
              type="button" 
              name="background_color"
              id="background_color"
              value="red"
              onClick={handleChange}
            className="red">Red</button>
            <button
              type="button" 
              name="background_color"
              id="background_color"
              value="green"
              onClick={handleChange}
              className="green">Green</button>
            <button
              type="button" 
              name="background_color"
              id="background_color"
              value="yellow"
              onClick={handleChange}
              className="yellow">Yellow</button>
            <button
              type="button"               
              name="background_color"
              id="background_color"
              value="purple"
              onClick={handleChange}
              className="purple">Purple</button>
          </section>
          </section>

          <section className="preview__label__fields">
          <p className="label__preview">Label Preview:</p>
          <section style={{border: 'solid black 5pt', textAlign: 'center', width: '550pt',
            backgroundColor: labelData.background_color}}
            >
          <p style={{color: labelData.name_font_color, fontFamily: labelData.name_font,
               fontSize: 45}}>{labelData.name}</p>
            <img alt= '' src={image} className='image'/>
            <p style={{color: labelData.message_font_color, fontFamily: labelData.message_font,
               fontSize: 25}}>{labelData.message}</p>
          </section>
          </section>
          <section className="button__section">
          </section>
        </div>
      </section>
      <section className="button">
    <button
    type="submit"
    className={!isSubmitted ? "label__button" : "submitted"}
    disabled={isSubmitted}
    >
      {!isSubmitted ? "Add Label" : "Label Added"}
    </button>
    </section>
    </form>
  );
};

NewLabelForm.propTypes = {
  addLabelCallback: PropTypes.func.isRequired,
};

export default NewLabelForm;