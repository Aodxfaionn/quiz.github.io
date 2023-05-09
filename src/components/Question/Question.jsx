import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../Error/Error";
import Button from "../Button/Button";
import "./question.css";

const Question = ({
  currentQues,
  setCurrentQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "good";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "good";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const clickNext = () => {
    if (currentQues > 8) {
      navigate("../result");
    } else if (selected) {
      setCurrentQues(currentQues + 1);
      setSelected();
    } else setError(true);
  };

  const backCategory = () => {
    setCurrentQues(0);
    setQuestions();
    navigate("/");
  };

  return (
    <div className="question">
      <h3 className="question__number">Question {currentQues + 1}:</h3>
      <h4 className="question__text">{questions[currentQues].question}</h4>
      {error && <Error text="Please, select an option" />}
      <div className="questions__list">
        {options &&
          options.map((i) => (
            <button
              className={`questions__list-item ${selected && handleSelect(i)}`}
              key={i}
              onClick={() => handleCheck(i)}
              disabled={selected}
            >
              {i}
            </button>
          ))}
      </div>
      <div className="questions__btns">
        <Button className="btn" onClick={backCategory} text="Categories" />
        <Button className="btn" onClick={clickNext} text="Next questions" />
      </div>
    </div>
  );
};

export default Question;
