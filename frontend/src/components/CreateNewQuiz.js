import { Button, FormGroup, InputGroup } from '@blueprintjs/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'
import { createQuiz } from '../actions'

const CreateNewQuiz = ({createNewQuizPressed, }) => {
    const history = useHistory()
    const dataSchema = {
        "title": "",
        "created_by": "Michael Okolo",
        "duration": "",
        "no_questions": 0,
        "questions": [],
    }

    const[quizData, setQuizData] = useState(dataSchema)

    const handleInput = (e) => {
        setQuizData({...quizData, [e.target.name]: e.target.value})
    }

    const addNewQuiz = (e) => {
        e.preventDefault()
        createNewQuizPressed(quizData)
        history.push("/")
    }
    return (
        <div>
            <h1> Add New Quiz </h1>
            <form onSubmit={addNewQuiz}>
            <FormGroup helperText="Enter the Quiz title. This is a required field" label="Title" labelFor="title" labelInfo="(required)">
                <InputGroup id="title" placeholder="Quiz Title" value={quizData.title} name="title" onChange={e => handleInput(e)} />
            </FormGroup>
            <FormGroup helperText="Enter the duration of the Quiz. This is a required field" label="Duration" labelFor="Duration" labelInfo="(required)">
                <InputGroup id="duration" placeholder="Duration" value={quizData.duration} name="duration" onChange={e => handleInput(e)} />
            </FormGroup>
            <Button onClick={addNewQuiz} text="Add Quiz" className="bp3-button" intent="primary" icon="add" />
            </form>
            
        </div>
    )
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    createNewQuizPressed: quiz => dispatch(createQuiz(quiz))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewQuiz);
