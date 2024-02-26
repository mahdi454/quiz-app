import { createContext, useContext, useEffect, useReducer } from "react"


const init = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    mark: 0,
    sec: null
}
function reducer(state, actoin) {
    switch (actoin.type) {
        case 'dataReady':
            return { ...state, questions: actoin.payload, status: 'ready' }
        case 'dataFailed':
            return { ...state, status: 'error' }
        case "btnClick":
            return { ...state, status: 'loadQuestion', sec: state.questions.length * 30 }
        case "result":
            return { ...state, status: 'loadResult' }
        case 'setAnswer':
            const question = state.questions.at(state.index)
            return { ...state, answer: actoin.payload, mark: actoin.payload === question.correctOption ? state.mark + question.points : state.mark }
        case 'nextQuestion':
            return { ...state, index: state.index + 1, answer: null }
        case "restart":
            return { ...init, questions: state.questions, status: 'ready' }
        case "tick":
            return { ...state, sec: state.sec - 1, status: state.sec === 0 ? 'loadResult' : state.status }
        default:
            throw new Error('unknown action')

    }
}

const QuezContext = createContext()
function QuezProvider({ children }) {
    const [{ questions, status, index, answer, mark, sec }, dispatch] = useReducer(reducer, init)
    const questionLen = questions.length
    const maxMark = questions.reduce((x, y) => x + y.points, 0)

    useEffect(() => {
        fetch(`http://localhost:7000/questions`).then((res) => res.json()).then((data) =>

            dispatch({ type: 'dataReady', payload: data })
            )
            .catch((err) => dispatch({ type: 'dataFailed' }))
    }, [])
    useEffect(() => {
        const id = setInterval(() => dispatch({ type: 'tick' }), 1000)
        return () => clearInterval(id)

    }, [dispatch])

    function clickStart() {
        dispatch({ type: 'btnClick' })
    }
    function clickRestart() {
        dispatch({ type: 'restart' })
    }
    function clickAnswer(i) {
        dispatch({ type: 'setAnswer', payload: i })
    }
    function clickNext() {
        dispatch({ type: 'nextQuestion' })
    }
    function clickResult() {
        dispatch({ type: 'result' })
    }


    return <QuezContext.Provider value={{ questions, status, index, answer, mark, sec, questionLen, maxMark, clickStart, clickRestart, clickNext, clickResult, clickAnswer }}>{children}</QuezContext.Provider>
}
function useQuez() {
    const context = useContext(QuezContext)
    return context;
}
export { QuezProvider, useQuez }