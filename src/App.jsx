import { useEffect, useReducer } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Button from './components/Button'
import Sart from './components/Sart'
import Error from './components/Error'
import Loader from './components/Loader'
import Question from './components/question'
import NextBtn from './components/NextBtn'
import Progress from './components/Progress'
import Finish from './components/Finish'
import Timer from './components/Timer'
import Footer from './components/Footer'
import {  useQuez } from './context/QuezContext'

function App() {
  const { status } = useQuez()
  return (
    <div className='flex flex-col justify-center items-center' >
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <Sart />}
        {status === 'loadResult' && <Finish />}
        {status === 'loadQuestion' && <>
          <Progress />
          <Question />
          <Footer>
            <NextBtn />
            <Timer />

          </Footer>
        </>}
      </Main>

    </div>

  )
}


export default App
