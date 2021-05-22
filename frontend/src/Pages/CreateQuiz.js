import React from 'react'
import { useParams } from 'react-router'
import CreateNewQuiz from '../components/CreateNewQuiz';
import EditQuiz from '../components/EditQuiz';

function CreateQuiz(props) {
    let { id } = useParams();
    let foundQuiz = null

    if(id){
        foundQuiz = props.quiz.filter((quiz) => quiz.id === parseInt(id))
        if(foundQuiz.length === 0){
            id = null;
        }
    }
    return (
        <div className="add_quiz_form">
            { id ? <EditQuiz quiz={foundQuiz}/> : <CreateNewQuiz add={props.add}/> }
        </div>
    )
}

export default CreateQuiz
