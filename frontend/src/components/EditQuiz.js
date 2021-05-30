import React from 'react'
import { useParams } from 'react-router';
import CreateQuestion from './CreateQuestion';
import Question from './Question';

const EditQuiz = () => {
    const id = useParams();
    return (
        <div className="add_questions_form">
            <div>
                <CreateQuestion id={id} />
            </div>
            <div>
                <h3>Questions</h3>
                <Question id={id}/>
            </div>
        </div>
    )
}

export default EditQuiz
