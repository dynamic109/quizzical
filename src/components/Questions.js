import React from "react";
import { Link } from "react-router-dom";
import QuizQuestions from "../data";

const getPaddingClass = (text) => {
  if (text.length <= 5) {
    return "px-6";
  } else if (text.length <= 9) {
    return "px-4";
  } else {
    return "px-2";
  }
};

function Questions({ selectedOptions, setSelectedOptions }) {
  const handleClick = (questionId, optionText) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: optionText,
    }));
  };

  const Quiz = QuizQuestions.map((question) => {
    return (
      <div key={question.id} className="text-[#293264] mb-8">
        <p className="text-[14px] font-semibold mb-4 md:text-base">
          {question.question}
        </p>
        <div className="text-[9px] flex gap-1 md:gap-5 font-bold md:text-[11px] md:font-semibold">
          {["option1", "option2", "option3", "option4"].map((option, index) => (
            <button
              key={index}
              id={index}
              onClick={() => handleClick(question.id, question[option])}
              className={`py-1 sm:w-24 w-35 border-solid border-[1px] rounded-xl border-[#C9C3C3] ${
                selectedOptions[question.id] === question[option]
                  ? "bg-[#4D5B9E] text-white"
                  : "bg-transparent"
              } ${getPaddingClass(question[option])}`}
            >
              {question[option]}
            </button>
          ))}
        </div>
        <hr className="border-[#C9C3C3] mt-5" />
      </div>
    );
  });

  return (
    <div className="w-4/4 sm:px-1 px-8 md:w-7/12 h-screen pt-7">
      {Quiz}
      <Link to={"/answers"}>
        <div className="text-center">
          <button className="p-3 mt-3 w-56 border-none rounded-2xl bg-[#4D5B9E] text-white">
            Check answers
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Questions;
