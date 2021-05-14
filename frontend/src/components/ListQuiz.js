import React from 'react'
import { Alignment, Button, Card, Elevation } from "@blueprintjs/core";


const ListQuiz = () => {
    return (
        <div className="">
            <Card interactive={true} elevation={Elevation.THREE}>
                <h3><a href="#">Quiz 1 - Quiz Title</a></h3>
                <p>How Many Questions</p>
                <p>Difficulty Rating</p>
                <p>Creation Date</p>
                <p>Created By: Michael Okolo</p>
                <Button align={Alignment.RIGHT} className="primary">Submit</Button>
            </Card>
        </div>
    )
}

export default ListQuiz
