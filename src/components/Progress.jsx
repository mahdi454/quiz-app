import { useQuez } from '../context/QuezContext'
function Progress() {
  const { index, questionLen, mark, maxMark, answer } = useQuez()
  return (
    <header className='grid mb-2 '>
      <progress className='w-full h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-sky-400 [&::-moz-progress-bar]:bg-sky-400' max={questionLen} value={answer === null ? index : index + 1} />
      <div className='flex justify-between  text-sm  py-1'>

        <p>Question {index + 1}/{questionLen}</p>
        <p>{mark}/{maxMark}</p>
      </div>

    </header>
  )
}

export default Progress