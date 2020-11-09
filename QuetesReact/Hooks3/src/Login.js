import React, { useState, useEffect } from "react";

const Login = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleChangeInput = (event) => {
    setName(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      onSubmit(name);
    } else {
      setError("Rentrer un nom svp");
    }
  };

  return (
    <>
      <h1>Please Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={name}
          onChange={handleChangeInput}
          placeholder="Mary Poppins"
        />
        <button type="submit">Log in</button>
        <p>{error}</p>
      </form>
    </>
  );
};

export default Login;
