import '../App.css'
import { useQuez } from '../context/QuezContext';
const Option = ({ questions }) => {
  const { answer, clickAnswer } = useQuez()
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {questions.options.map((option, index) => (<button key={option} className={`btn btn-option ${index === answer ? 'answer' : ''} ${hasAnswer ? index === questions.correctOption ? 'correct' : 'wrong' : ''}`} onClick={()=>clickAnswer(index)} disabled={hasAnswer}>{option}</button>))}

    </div>
  )
}

export default Option