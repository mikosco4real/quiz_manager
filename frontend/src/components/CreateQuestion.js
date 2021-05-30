import React, { useState } from 'react'
import {FormGroup, InputGroup, ControlGroup, Divider, HTMLSelect, Button } from '@blueprintjs/core'
import { connect } from 'react-redux'
import { updateQuiz } from '../actions'

const CreateQuestion = ({quiz, id, updateQuizPressed}) => {
    const quizObject = quiz.find(q => q.id === 1)
    const [quizData, setQuizData] = useState(quizObject)
    console.log(quizData)
    const [question, setQuestion] = useState({question: "", type: "", options: [], answer:""})
    let addButton = false;
    const [formStates, setFormStates] = useState({questionInputIntent: "default", questionInputLabel: ""})

    const handleInput = (e) => {
        setQuizData({...quizData, [e.target.name]: e.target.value})
    }

    const handleQuestions = (e) => {
        if(e.target.name==="type"){
            setQuestion({...question, [e.target.name]: e.target.value, options: []})
        }
        else{
            if(e.target.name === "question" && e.target.value !== ""){
                setFormStates({...formStates, questionInputIntent: "default"})
            }
            else{
                setFormStates({...formStates, questionInputIntent: "danger"})
            }
            setQuestion({...question, [e.target.name]: e.target.value})
        }
    }

    const handleOptions = (e) => {
        let options = question.options
        options[e.target.name] = e.target.value
        setQuestion({...question, options: options})
    }

    if (question.type === "3" || question.type === "4" || question.type === "5"){
        addButton = true;
    }

    const addOptionsForm = () => {
        let options = question.options
        options.push("")
        setQuestion({...question, options: options})
    }

    const deleteOption = (key) => {
        let options = question.options
        options.splice(key, 1)
        setQuestion({...question, options: options})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(question.question === ""){
            setFormStates({questionInputIntent: "danger", questionInputLabel: "(required)"})
            return
        }
        updateQuizPressed({...quizData, questions: [...quizData.questions, question]})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <ControlGroup fill={true} vertical={false}>
                <FormGroup label="Title" labelFor="title" labelInfo="">
                    <InputGroup id="title" placeholder="Quiz Title" value={quizData.title} name="title" onChange={e => handleInput(e)} />
                </FormGroup>
                <FormGroup label="Duration" labelFor="Duration" labelInfo="">
                    <InputGroup id="duration" placeholder="Duration" value={quizData.duration} name="duration" onChange={e => handleInput(e)} />
                </FormGroup>
            </ControlGroup>
            <h3> Add a Question </h3>
            <Divider />
            <FormGroup label="Question" labelFor="question" labelInfo={formStates.questionInputLabel}>
                <InputGroup intent={formStates.questionInputIntent} id="question" placeholder="question" value={question.question} name="question" onChange={e => handleQuestions(e)} />
            </FormGroup>
            <FormGroup label="Question Type" labelFor="question" labelInfo=" (Type of question)">
                <HTMLSelect className="bp3-fill" name="type" onChange={handleQuestions}>
                    <option defaultValue> Choose a type ...</option>
                    <option value="1" > Theory </option>
                    <option value="2" > Open Ended Questions</option>
                    <option value="3" > Objective</option>
                    <option value="4" > Multiple Answers</option>
                    <option value="5" > Yes or No </option>
                </HTMLSelect>
            </FormGroup>
            <div id="addOptionsForm">
                { question.options.map((item, key) =>
                <FormGroup key={key}> 
                    <ControlGroup id="Options" fill={false} vertical={false}> 
                        <InputGroup fill={true} placeholder="question" value={question.options[key]} name={key} onChange={handleOptions} /> 
                        <Button icon="trash" intent="danger" className="bp3-button" onClick={() => deleteOption(key)}> </Button>
                    </ControlGroup>
                </FormGroup> 
                )}
                
            </div>
            {addButton ? <Button icon="add" intent="success" className="bp3-button" onClick={addOptionsForm}> Add Options </Button> : "" }

            { question.options.length > 1 ? <FormGroup style={{"marginTop": "2em"}}>
                    <HTMLSelect className="bp3-fill" name="answer" onChange={handleQuestions}>
                        <option defaultValue> Choose the correct Answer </option>
                        { question.options.map((item, index) => 
                        <option value={index} key={index}> Option {index +1 }</option>
                        )}
                    </HTMLSelect>
                </FormGroup> : " "}
            
            <FormGroup style={{"marginTop": "2em"}}>
                <Button intent="primary" className="bp3-button bp3-fill" onClick={handleSubmit}> Submit </Button>
            </FormGroup>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    quiz: state.quiz,
});
const mapDispatchToProps = dispatch => ({
    updateQuizPressed: quiz => dispatch(updateQuiz(quiz)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
