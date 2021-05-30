import React from 'react'
import { Alignment, Button, Card, Elevation } from "@blueprintjs/core";
import { useHistory } from 'react-router';
import { connect } from 'react-redux'
import { removeQuiz } from '../actions';


const ListQuiz = ({quiz, removeQuiz}) => {
        const history = useHistory()
    return (
        <div className="quiz_card" >
            {quiz.map((quiz) => 
                <Card interactive={true} elevation={Elevation.THREE} key={quiz.id.toString()}>
                <h3>{quiz.title}</h3>
                <p>No of Questions: {quiz.no_questions}</p>
                <p>Duration: {quiz.duration}</p>
                <p>Creation Date: {quiz.date}</p>
                <p>Created By: {quiz.created_by}</p>
                <Button align={Alignment.LEFT} intent="primary" style={{"marginRight": "1em"}} onClick={() => history.push(`/edit_quiz/${quiz.id}`)}>Edit</Button>
                <Button align={Alignment.RIGHT} intent="danger" onClick={() => removeQuiz(quiz.id)} >Delete</Button>
            </Card>
            )}   
        </div>
    )
}

const mapStateToProps = state => ({
    quiz: state.quiz,
});
const mapDispatchToProps = dispatch => ({
    removeQuiz: id => dispatch(removeQuiz(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListQuiz)
