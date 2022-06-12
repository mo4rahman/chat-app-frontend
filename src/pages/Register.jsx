import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

function handleChange(event) {
  // event.preventDefault();
}

function handleSubmit(event) {
  event.preventDefault();
  alert("form");
}

function Register() {
  return (
    <>
      <FormContainter>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="app-logo">
            <img src={Logo} alt="Logo" />
            <h1>CHATTY</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="Password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Enter password again"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </FormContainter>
    </>
  );
}

const FormContainter = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #03bf83;
  .app-logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: #fffcfc;
    }
  }
  form {
    color: #fffcfc;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    /* background-color: #00000040; */
    background-color: #b6b6b6;

    border-radius: 3rem;
    padding: 4rem 5rem;
    input {
      background-color: #d8d8d840;
      padding: 1rem;
      border: 0.2rem solid #000000;
      border-radius: 0.5rem;
      color: black;
      font-weight: bold;
    }
  }
`;

export default Register;
