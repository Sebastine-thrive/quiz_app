import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuestions } from "./Api";
import { QuestionState, Difficulty } from "./Api";
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const Total_Questions = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(Total_Questions, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      // check answer against the correct answer
      const correct = questions[number].correct_answer === answer;

      // add score if the answer is correct
      if (correct) {
        setScore((prev) => prev + 1);
      }
      // save answer in the array for user arrays
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if it is not the last
    const nextQuest = number + 1;

    // check if this is the last question
    if (nextQuest === Total_Questions) {
      setGameOver(true);
    } else {
      setNumber(nextQuest);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>
          {" "}
          <span> Thrive </span> General Knowledge Quiz
        </h1>

        {gameOver || userAnswers.length === Total_Questions ? (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
        ) : null}

        {!gameOver ? <p className="score"> Score: {score} </p> : null}

        {loading ? <p className="loading">Loading questions</p> : null}

        {!loading && !gameOver ? (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={Total_Questions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        ) : null}

        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== Total_Questions - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;
