import '../App.css'
import { useQuez } from '../context/QuezContext'
function Finish() {
  const {mark,maxMark,clickRestart}=useQuez()
    const percent=mark*100/maxMark
  return (
    <>
    <div className='bg-cyan-900 py-4 text-center rounded-full mb-8 text-2xl'>You got {mark} out of {maxMark} ({percent.toFixed(2)} %)</div>
    <button className='bg-slate-600 border-2 border-slate-600 float-right px-12 py-3 rounded-full hover:bg-inherit' onClick={clickRestart}> Restart</button>
    </>
  )
}

export default Finish