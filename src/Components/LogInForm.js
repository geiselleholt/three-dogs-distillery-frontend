import React, { useState } from "react";
import PropTypes from "prop-types";
import LoginForm from "./ComponentsCss/LoginForm";

const LoginForm = ({ addLoginCallback }) => {
  const [loginData, setLoginData] = useState({
    user_name: "",
    password: "",
  });

  const submitLoginData = (e) => {
    e.preventDefault();

    addLoginCallback(loginData);
    setLoginData({
      user_name: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitLoginData}>
      <section>
        <div className="new__login__fields">
          <login htmlFor="name">User Name</login>
          <input
            name="user_name"
            id="user_name"
            value={loginData.user_name}
            onChange={handleChange}
            className={loginData.user_name.length === 0 ? "invalid__form__input" : ""}
          />
          <login htmlFor="name">Password</login>
          <input
            name="password"
            id="password"
            value={loginData.password}
            onChange={handleChange}
          />
          <p className="required">* required</p>
          <button
            className="submit__button"
            type="submit"
            disabled={
              loginData.user_name.length === 0 || loginData.name.length === 0
            }
          >
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};

LoginForm.propTypes = {
  addLoginCallback: PropTypes.func.isRequired,
};

export default LoginForm;