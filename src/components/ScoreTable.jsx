import React, { useEffect, useState } from "react";
import "./c.css";
export const ScoreTable = ({ score }) => {
  const username = localStorage.getItem("name");

  const [list, setList] = useState([]);
  const addResult = () => {
    const newResult = { username, score };
    setList([...list, newResult]);
  };
  useEffect(() => {
    addResult();
  }, []);
  return (
    <div>
      <div className="table">
        {list.map((res) => (
          <div className="table">
            <span>Player: {res.username}</span>
            <span>Score : {res.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
