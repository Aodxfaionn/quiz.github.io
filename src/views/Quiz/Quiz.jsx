import React, { useState, useEffect } from "react";
import Title from "../../components/Title/Title";
import Loading from "../../components/Loading/Loading";
import Info from "../../components/Info/Info";
import Question from "../../components/Question/Question";
import "./quiz.css";

const Quiz = ({ questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currentQues, setCurrentQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        getAnswer([
          questions[currentQues].correct_answer,
          ...questions[currentQues].incorrect_answers,
        ])
    );
  }, [currentQues, questions]);

  const getAnswer = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <section className="section quiz">
      {questions ? (
        <>
          <Title text="Choose correct answer" />
          <Info
            choosecategory={questions[currentQues].category}
            score={score}
          />
          <Question
            currentQues={currentQues}
            setCurrentQues={setCurrentQues}
            questions={questions}
            options={options}
            correct={questions[currentQues].correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Quiz;
