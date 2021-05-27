import React from 'react'
import CreateQuestion from './CreateQuestion';
import Question from './Question';

const EditQuiz = (props) => {
    return (
        <div className="add_questions_form">
            <div>
                <CreateQuestion quiz={props.quiz} update={props.update}/>
            </div>
            <div>
                <h3>Questions</h3>
                <Question quiz={props.quiz}/>
            </div>
        </div>
    )
}

export default EditQuiz
