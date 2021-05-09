type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: string;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCardComponent: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => (
    <>
      <div>
          <p className='number'>
              Question: {questionNr} / {totalQuestions}
          </p>
          <p dangerouslySetInnerHTML={{__html: question}} />
          <div>
              {answers.map(answer => (
                  <div>
                      <button disabled={userAnswer} onClick={callback}>
                          <span dangerouslySetInnerHTML={{__html: answer}} />
                      </button>
                  </div>
              ))}
          </div>
      </div>
    </>
)

export default QuestionCardComponent;