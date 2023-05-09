import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./result.css"

const Result = ({ score }) => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <section className="section result">
      <p className="result__congratulate">Congratulate, your score: {score}.</p>
      <p className="result__text">Did you like the game?</p>
      <Button className="btn" onClick={backHome} text="Choose new category" />
    </section>
  );
};

export default Result;
