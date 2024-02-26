import { useQuez } from '../context/QuezContext'
function Progress() {
  const { index, questionLen, mark, maxMark, answer } = useQuez()
  return (
    <header className='grid'>
      <progress max={questionLen} value={answer === null ? index : index + 1} />
      <div className='flex justify-between  text-2xl  p-2'>

        <p>Question {index + 1}/{questionLen}</p>
        <p>{mark}/{maxMark}</p>
      </div>

    </header>
  )
}

export default Progress