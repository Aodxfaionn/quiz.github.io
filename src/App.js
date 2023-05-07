import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import Main from "./views/Main/Main";
import Quiz from "./views/Quiz/Quiz";
import Result from "./views/Result/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async (category = "", difficult = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficult && `&difficult=${difficult}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main fetchQuestions={fetchQuestions} />} />
          <Route
            path="quiz"
            element={
              <Quiz
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route path="result" element={<Result score={score} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
