import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, HashRouter, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { useTheme } from "./utils/use-theme";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import Main from "./views/Main/Main";
import Quiz from "./views/Quiz/Quiz";
import Result from "./views/Result/Result";
import BtnToggle from "./components/BtnToggle/BtnToggle";

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
      <HashRouter>
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
          <Route path="result" element={<Result score={score} />} />
        </Routes>
        <BtnToggle />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
