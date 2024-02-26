import { useQuez } from '../context/QuezContext'
const Sart = () => {
  const {questionLen,clickStart}=useQuez()
  return (
    <div className='flex flex-col items-center'>
    <h2>Welcome to The React Quiz!</h2>
    <h3>{questionLen} questions to test your React mastery</h3>
    <button className='btn btn-ui' onClick={clickStart}>Let's Go</button>
  </div>
  )
}

export default Sart