import { useQuez } from '../context/QuezContext';
import Option from './Option';
function Question() {
    const { questions,index}=useQuez()
    const questionsList=questions.at(index)
    return (
        <div className='w-full '>
            <h4 className='text-lg mb-2 ' >{questionsList.question}</h4>
            <Option questions={questionsList} />

        </div>
    )
}
export default Question;