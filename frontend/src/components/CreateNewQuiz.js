import { Button, FormGroup, InputGroup } from '@blueprintjs/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const CreateNewQuiz = (props) => {
    const history = useHistory()
    const dataSchema = {
        "id": 0,
        "title": "",
        "created_by": "Michael Okolo",
        "date": "",
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
        props.add(quizData)
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

export default CreateNewQuiz
