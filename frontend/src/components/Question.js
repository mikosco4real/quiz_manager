import { Card } from '@blueprintjs/core'
import React from 'react'
import { connect } from 'react-redux'

const Question = ({id, quiz}) => {
    const quizItem = quiz.find(q => q.id === parseInt(id.id));
    return (
        <div>
            { quizItem.questions.length > 0 ?
                quizItem.questions.map((item, index) => 
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

const mapStateToProps = state => ({
    quiz: state.quiz,
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Question)
