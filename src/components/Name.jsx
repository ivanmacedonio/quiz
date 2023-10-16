import React, { createContext, useContext, useState } from "react";
import "./c.css";
import userContext from "../context/userContext";
import { Navigate, useNavigate } from "react-router-dom";

export const Name = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    nav("/home");
  };

  const userData = {
    name: name,
  };
  return (
    <div>
      <form className="formulario" onSubmit={handleOnSubmit}>
        <div className="input">
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={handleOnChange}
          />
        </div>
        <div className="button">
          <button type="submit">Start</button>
        </div>
      </form>
    </div>
  );
};
