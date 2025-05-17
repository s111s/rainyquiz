import React from "react";
import quizImage from '../images/quiz-image.png';
import "../styles/question.css"

function Question({ question, options, onAnswer, selectedAnswer }) {
  return (
    <div className="question-page">
      <a href="https://s111s.github.io/mjgtrosesquiz/"><img src={quizImage} alt="My Confession is You"/></a>

      <h1>{question}</h1>
      {options.map((option, index) => (
        <button key={index} 
                onClick={() => onAnswer(option.drink)}
                className={selectedAnswer === option.drink ? "selected" : ""}>
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Question;
