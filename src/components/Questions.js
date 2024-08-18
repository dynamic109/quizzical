import React from "react";
import { Link } from "react-router-dom";
import QuizQuestions from "../data";

function Questions() {
  const getPaddingClass = (text) => {
    if (text.length <= 5) {
      return "px-6"; // More padding for shorter text
    } else if (text.length <= 9) {
      return "px-4"; // Moderate padding for medium text
    } else {
      return "px-2"; // Less padding for longer text
    }
  };

  function handleClick(event) {}

  const Quiz = QuizQuestions.map((question) => {
    return (
      <div key={question.id} className="text-[#293264] mb-6">
        <p className="text-base font-semibold mb-2">{question.question}</p>
        <div className="text-[10px] flex gap-8 font-semibold">
          {["option1", "option2", "option3", "option4"].map((option, index) => (
            <button
              key={index}
              id={index}
              onClick={handleClick}
              className={`bg-transparent w-35 border-solid border-[1px] rounded-xl border-[#C9C3C3] ${getPaddingClass(
                question[option]
              )}`}
            >
              {question[option]}
            </button>
          ))}
        </div>
        <hr className=" border-[#C9C3C3] mt-3" />
      </div>
    );
  });

  return (
    <div className="w-4/4 px-5 md:w-4/12">
      {Quiz}
      <Link to={"/answers"}>
        <div className="text-center">
          <button className=" p-3 mt-8 w-48 border-none rounded-2xl bg-[#4D5B9E] text-white">
            Check answers
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Questions;
