import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AnswerObject } from '../App'



type QuestionProps = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined ;
    questionNum: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<QuestionProps> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions }) => {
    return (
        <div>
            <p className='number'>
                Question: {questionNum}/ {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />

            <div>
                {answers.map(answer => (
                    <div key={uuidv4()}>
                        <button disabled={userAnswer ? true : false} value={answer}  onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard