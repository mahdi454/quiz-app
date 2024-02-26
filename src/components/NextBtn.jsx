import '../App.css'
import { useQuez } from '../context/QuezContext';
function NextBtn() {
  const {  answer, index,questionLen,clickNext,clickResult }=useQuez()
  if (answer === null) return null;
  if(index<questionLen-1)
  return (
    <button className='btn btn-ui' onClick={clickNext}>Next</button>
  )
  if(index===questionLen-1)
  return (
    <button className='btn btn-ui' onClick={clickResult}>Finish</button>
  )
}

export default NextBtn