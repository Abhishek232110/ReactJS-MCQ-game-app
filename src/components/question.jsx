import React from "react";

const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl">{question}</h2>
      <div className="text-lg space-x-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="hover:text-indigo-300"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
