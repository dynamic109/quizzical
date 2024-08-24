import React from "react";
import { Link } from "react-router-dom";

function Answers({ selectedOptions, quizQuestions, onPlayAgain }) {
  const safeQuizQuestions = quizQuestions || [];

  const correctAnswers = safeQuizQuestions.reduce((accurate, question) => {
    accurate[question.id] = question.correctOption;
    return accurate;
  }, {});

  const score = safeQuizQuestions.reduce((total, question) => {
    const userAnswer = selectedOptions[question.id];
    const correctAnswer = correctAnswers[question.id];
    if (userAnswer === correctAnswer) {
      return total + 1;
    }
    return total;
  }, 0);

  const getPaddingClass = (text) => {
    if (text.length <= 5) {
      return "px-6";
    } else if (text.length <= 9) {
      return "px-4";
    } else {
      return "px-2";
    }
  };

  return (
    <div className="w-full sm:px-1 px-8 md:w-7/12 h-screen pt-7">
      {safeQuizQuestions.map((question) => {
        const userAnswer = selectedOptions[question.id];
        const correctAnswer = correctAnswers[question.id];

        return (
          <div key={question.id} className="text-[#293264] mb-8">
            <p className="text-[14px] font-semibold mb-4 md:text-base">
              {question.question}
            </p>
            <div className="text-[9px] flex gap-1 md:gap-5 font-bold md:text-[11px] md:font-semibold">
              {["option1", "option2", "option3", "option4"].map(
                (optionKey, index) => {
                  const optionText = question[optionKey];
                  const isCorrect = optionText === correctAnswer;
                  const isSelected = optionText === userAnswer;

                  let backgroundColor = "bg-transparent";

                  if (isCorrect) {
                    backgroundColor = "bg-green-500";
                  } else if (isSelected) {
                    backgroundColor = "bg-red-500";
                  }

                  return (
                    <button
                      key={index}
                      className={`py-1 px-1 sm:w-25 w-40 border-solid border-[1px] rounded-xl border-[#C9C3C3] ${backgroundColor}`}
                      disabled
                    >
                      {optionText}
                    </button>
                  );
                }
              )}
            </div>
            <hr className="border-[#C9C3C3] mt-5" />
          </div>
        );
      })}

      <div className="text-center">
        <h3>You scored {score}/5 correct answers</h3>
        <Link to="/questions">
          <button
            onClick={onPlayAgain}
            className=" p-3 my-8 w-48 border-none rounded-2xl bg-[#4D5B9E] text-white"
          >
            Play again
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Answers;
