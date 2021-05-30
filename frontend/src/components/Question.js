import { Card } from '@blueprintjs/core'
import React from 'react'

const Question = ({id}) => {
    const quiz = {questions: []}
    return (
        <div>
            { quiz.questions.length > 0 ?
                quiz.questions.map((item, index) => 
                <Card key={index} className="bp3-dark">
                    <p>{item.question}</p>
                    {item.options.length > 0 ? <ol className="bp3-list" type="a">
                        { item.options.map((value, key) => <li key={key}>{value}</li>)}
                    </ol>: " "}
                </Card>    
                ) :<Card>No Questions Added </Card>}
        </div>
    )
}

export default Question
