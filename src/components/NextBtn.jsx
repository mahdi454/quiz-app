import '../App.css'
import { useQuez } from '../context/QuezContext';
function NextBtn() {
  const {  answer, index,questionLen,clickNext,clickResult }=useQuez()
  if (answer === null) return null;
  if(index<questionLen-1)
  return (
    <button className='bg-slate-600 border-2 border-slate-600 float-right px-12 py-3 rounded-full hover:bg-inherit' onClick={clickNext}>Next</button>
  )
  if(index===questionLen-1)
  return (
    <button className='bg-slate-600 border-2 border-slate-600 float-right px-12 py-3 rounded-full hover:bg-inherit' onClick={clickResult}>Finish</button>
  )
}

export default NextBtn