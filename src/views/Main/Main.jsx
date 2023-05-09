import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import Categories from "../../services/Categories";
import Levels from "../../services/Levels";
import "./main.css"

const Main = ({ fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficult, setDifficult] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const startQuiz = () => {
    fetchQuestions(category, difficult);
    navigate("quiz");
  };
  return (
    <section className="section categories">
      <Title text="Select conditions" />
      <Select
        nameField="chooseCategory"
        text="Choose Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {Categories.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.category}
            </option>
          );
        })}
      </Select>
      <Select
        nameField="chooseLevel"
        text="Choose level"
        value={difficult}
        onChange={(e) => setDifficult(e.target.value)}
      >
        {Levels.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </Select>
      <Button className="btn" onClick={startQuiz} text="Start quiz" />
    </section>
  );
};

export default Main;
