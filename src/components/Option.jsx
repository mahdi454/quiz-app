import '../App.css'
import { useQuez } from '../context/QuezContext';
const Option = ({ questions }) => {
  const { answer, clickAnswer } = useQuez()
  const hasAnswer = answer !== null;

  return (
    <div className="flex flex-col gap-3 mb-8 group">
      {questions.options.map((option, index) => (<button key={option} className={`block border-2 border-slate-600 bg-slate-600 px-8 py-4 rounded-full cursor-pointer text-left disabled:cursor-not-allowed  transition-transform delay-75 ${index === answer ? 'translate-x-6 ' : 'translate-x-0'} ${hasAnswer ? index === questions.correctOption ? ' bg-cyan-900  ' : 'bg-amber-900 ' : 'hover:translate-x-6 hover:bg-inherit'}`} onClick={()=>clickAnswer(index)} disabled={hasAnswer}>{option}</button>))}


    </div>
  )
}

export default Option