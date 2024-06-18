import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Score from './components/Score';
import EnterName from './components/EnterName';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuizSummaryTable from './components/QuizSummaryTable'; // Import the QuizSummaryTable component
import questionsData from './questions'; // Import the JavaScript MCQ questions
import click from "../public/click.mp3"; 
import Sound from './components/Sound';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userName, setUserName] = useState("");
  const [nameEntered, setNameEntered] = useState(false);
  const [userAnswers, setUserAnswers] = useState(Array(questionsData.length).fill(''));


    // const audio = new Audio(click);

    const handleAnswerOptionClick = (isCorrect, selectedOption) => {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[currentQuestion] = selectedOption;
      setUserAnswers(updatedAnswers);

      // Play click sound
      Sound(click);

      if (isCorrect) {
        setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questionsData.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };;

  const handleNameSubmit = (name) => {
    setUserName(name);
    setNameEntered(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userName={userName} />
      <div className="flex-grow flex items-center justify-center bg-gray-950">
        <div className="w-full max-w-[70%] p-6 bg-white rounded-lg shadow-md">
          {!nameEntered ? (
            <EnterName onNameSubmit={handleNameSubmit} />
          ) : showScore ? (
            <>
              <Score score={score} totalQuestions={questionsData.length} userName={userName} />
              <QuizSummaryTable questions={questionsData} userAnswers={userAnswers} />
            </>
          ) : (
            <Quiz
              question={questionsData[currentQuestion]}
              handleAnswerOptionClick={handleAnswerOptionClick} // Pass handleAnswerOptionClick as prop
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
