import { useState } from "react";
import "./App.css";

const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [correctAnswerValue, setcorrectAnswerValue] = useState(0);
  const [inCorrectAnswerValue, setInCorrectAnswerValue] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 5);
      setcorrectAnswerValue(correctAnswerValue + 25);
    }

    if (!isCorrect) {
      setScore(score - 4);
      setInCorrectAnswerValue(inCorrectAnswerValue + 25)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">


      {showScore ? (

        <>

         <h3 className="points">
            Points: {score}
          </h3>

          <div className="progress-bar-container">

            <div>
              <p>Right answer</p>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: `${correctAnswerValue}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>


            <div className="wrong-answer-paragrah">
                <p >Wrong  answer</p>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${inCorrectAnswerValue}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>

          </div>



          <div className="score-section">
            Você pontuou {score} de {questions.length}
          </div>

        </>
      ) : (
        <>

          <h3 className="points">
            Points: {score}
          </h3>

          <div className="progress-bar-container">

            <div>
              <p>Right answer:-</p>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: `${correctAnswerValue}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>


            <div>
              <p>Wrong  answer:-</p>
              <div className="progress">
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${inCorrectAnswerValue}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>




          <div className="question-section">
            <div className="question-count">
              <span>Questão {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                  
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>

          <div className="note-container">
            <p>Note: Right ans is 5 points and Wrong ans leads to -4 points</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
