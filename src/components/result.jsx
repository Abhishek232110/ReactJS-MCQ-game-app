import React from "react";

const Result = ({ score, total }) => {
  return (
    <div>
      <h2>Quiz Finished!</h2>
      <p>
        Your Score: {score} / {total}
      </p>
    </div>
  );
};

export default Result;
