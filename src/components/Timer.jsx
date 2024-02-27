import { useEffect } from 'react'
import '../App.css'
import { useQuez } from '../context/QuezContext'
function Timer() {
    const {sec}=useQuez()
    const mins=Math.floor(sec/60)
    const seconds=sec%60

    return (
        <div className='py-3 px-10 border-2 border-slate-600 float-left rounded-full'>{mins<10 &&'0'}{mins}:{seconds<10&&` 0`}{seconds}</div>
    )
}

export default Timer