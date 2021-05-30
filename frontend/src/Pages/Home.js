import { Button } from '@blueprintjs/core'
import React from 'react'
import { Link } from 'react-router-dom'
import ListQuiz from '../components/ListQuiz'

function Home(props) {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/create_quiz"><Button className="bp3-button" icon="add" text="New" intent="primary" style={{margin: "2em"}}/> </Link>
            <div>
                <ListQuiz />
            </div>
        </div>
    )
}

export default Home
