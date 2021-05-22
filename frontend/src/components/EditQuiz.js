import React from 'react'

const EditQuiz = (props) => {
    console.log(props)
    return (
        <div>
            Hello World. Our quiz ID is {props.quiz[0].id}. Let us Edit it.
        </div>
    )
}

export default EditQuiz
