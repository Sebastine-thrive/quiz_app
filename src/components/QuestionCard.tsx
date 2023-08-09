import React from "react";
import { v4 as uuidv4 } from "uuid";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCardStyles";

type QuestionProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNum}/ {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} className="question" />

      <div className="answers">
        {answers.map((answer) => (
          <ButtonWrapper
            key={uuidv4()}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
