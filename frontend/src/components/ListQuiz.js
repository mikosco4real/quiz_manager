import React from 'react'
import { Alignment, Button, Card, Elevation } from "@blueprintjs/core";
import { useHistory } from 'react-router';


const ListQuiz = (props) => {
        const history = useHistory()
    return (
        <div className="quiz_card" >
            {props.quiz.map((quiz) => 
                <Card interactive={true} elevation={Elevation.THREE} key={quiz.id.toString()}>
                <h3>{quiz.title}</h3>
                <p>No of Questions: {quiz.no_questions}</p>
                <p>Duration: {quiz.duration}</p>
                <p>Creation Date: {quiz.date}</p>
                <p>Created By: {quiz.created_by}</p>
                <Button align={Alignment.LEFT} intent="primary" style={{"marginRight": "1em"}} onClick={() => history.push(`/create_quiz/${quiz.id}`)}>Edit</Button>
                <Button align={Alignment.RIGHT} intent="danger" onClick={() => props.removeQuiz(quiz.id)} >Delete</Button>
            </Card>
            )}   
        </div>
    )
}

export default ListQuiz
