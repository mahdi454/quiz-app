import '../App.css'
import { useQuez } from '../context/QuezContext'
function Finish() {
  const {mark,maxMark,clickRestart}=useQuez()
    const percent=mark*100/maxMark
  return (
    <>
    <div className='result'>You got {mark} out of {maxMark} ({percent.toFixed(2)} %)</div>
    <button className='btn btn-ui' onClick={clickRestart}> Restart</button>
    </>
  )
}

export default Finish