import { useQuez } from '../context/QuezContext'
const Sart = () => {
  const {questionLen,clickStart}=useQuez()
  return (
    <div className='flex flex-col items-center gap-1'>
    <h2 className='text-xl font-extrabold tracking-wide sm:text-2xl'>Welcome to The React Quiz!</h2>
    <h3 className='sm:text-lg mb-4'>{questionLen} questions to test your React mastery</h3>
    <button className='bg-slate-600 border-2 border-slate-600 float-right px-12 py-3 rounded-full hover:bg-inherit' onClick={clickStart}>Let's Go</button>
  </div>
  )
}

export default Sart