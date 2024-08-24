import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage";
import Questions from "./components/Questions";
import Answers from "./components/Answers";
import QuizQuestions from "./data";

function App() {
  const [selectedOptions, setSelectedOptions] = useState({});

  const resetSelectedOptions = () => {
    setSelectedOptions({});
  };

  return (
    <div className=" md:mt-8 flex items-center justify-center h-screen">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          path="/questions"
          element={
            <Questions
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          }
        />
        <Route
          path="/answers"
          element={
            <Answers
              selectedOptions={selectedOptions}
              quizQuestions={QuizQuestions}
              onPlayAgain={resetSelectedOptions}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
