import React from "react";

const Quiz = ({ question, handleAnswerOptionClick }) => {
  return (
    <div>
      <div className="text-2xl mb-6">{question.question}</div>
      <div className="">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="text-center bg-[#1a2434] m-2 p-2 text-white rounded-md hover:bg-[#475f86] w-[45%] "
            onClick={() =>
              handleAnswerOptionClick(option === question.answer, option)
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
