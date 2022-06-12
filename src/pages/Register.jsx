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
            Already have an account? <Link to="/login">Login Here</Link>
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
  background-color: #02bd82;

  form {
    color: #fffcfc;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    /* background-color: #00000040; */
    background-color: #b6b6b6;
    border-radius: 1rem;
    padding: 4rem 5rem;

    button {
      background-color: #02bd82;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: bold;
      padding: 1rem 2rem;
      border: none;
      border-radius: 0.5rem;
      /* click finger mouse pointer when hovering over button */
      cursor: pointer;
      transition: 0.5s ease-in-out;

      &:hover {
        background-color: #0470f5;
      }
    }

    input {
      background-color: #d8d8d883;
      padding: 1rem;
      border: 0.2rem solid #000000;
      border-radius: 0.5rem;
      color: black;
      font-weight: bold;
      width: 100%;
      font-size: 1rem;
      /* These elements apply when we focus/highlight on the particular input field */
      &:focus {
        outline: none;
        /* When we click on an indiviual input field */
        border: 0.2rem solid #0470f5;
      }
    }
  }

  span {
    color: white;
    a {
      color: blue;
      text-transform: none;
      text-decoration: none;
      font-weight: bold;
    }
  }

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
`;

export default Register;
