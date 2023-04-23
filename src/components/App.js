import React, { useState } from "react";
import Question from "./Question";
import quiz from "../data/quiz";

function App() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  function handleQuestionAnswered(isCorrect) {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(null);
    }

    if (isCorrect) {
      setScore(score + 1);
    }
  }

  const currentQuestion = currentQuestionIndex !== null ? questions[currentQuestionIndex] : null;

  return (
    <main>
      <section>
        {currentQuestion ? (
          <Question question={currentQuestion} onAnswered={handleQuestionAnswered} />
        ) : (
          <>
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
