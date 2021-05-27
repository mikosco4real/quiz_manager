import { Card } from '@blueprintjs/core'
import React from 'react'

const Question = (props) => {
    return (
        <div>
            { props.quiz.questions.length > 0 ?
                props.quiz.questions.map((item, index) => 
                <Card key={index}>
                    <p>{item.question}</p>
                    {item.options.length > 0 ? "List the Options": " "}
                </Card>    
                ) :<Card>No Questions Added </Card>}
        </div>
    )
}

export default Question
