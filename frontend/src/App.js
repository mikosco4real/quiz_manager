import Header from './components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import CreateQuiz from './Pages/CreateQuiz'
import PageNotFound from './Pages/PageNotFound'
import { useState } from 'react'
import EditQuiz from './components/EditQuiz'

function App() {
  const quiz_data = [
      {
        "id": 1,
        "title": "Microservices",
        "created_by": "Michael Okolo",
        "date": "16/5/2021",
        "duration": "15 mins",
        "no_questions": 15,
        "questions": [],
      },
      {
        "id": 2,
        "title": "Docker",
        "created_by": "Michael Okolo",
        "date": "16/5/2021",
        "duration": "40 mins",
        "no_questions": 25,
        "questions": [],
      },
      {
        "id": 3,
        "title": "DevOPs",
        "created_by": "Michael Okolo",
        "date": "16/5/2021",
        "duration": "60 mins",
        "no_questions": 30,
        "questions": [],
      },
      {
        "id": 4,
        "title": "Jenkins",
        "created_by": "Michael Okolo",
        "date": "16/5/2021",
        "duration": "30 mins",
        "no_questions": 15,
        "questions": [],
      },
    ];
  const [quiz, setQuiz] = useState(quiz_data);

  const handleRemove = (id) => {
    const newQuizData = quiz.filter((quiz) => quiz.id !== id);
    setQuiz(newQuizData);
  };

  const addQuiz = (data) => {
    const maxId = Math.max(...quiz.map((q) => q.id))
    const today = new Date().toLocaleDateString()
    data.id = maxId + 1
    data.date = today
    setQuiz([...quiz, data]);
  };

  const updateQuiz = (data) => {
    const quizObject = quiz.filter((quiz) => quiz.id !== data.id)
    setQuiz([...quizObject, data])
  }

  return (
    <div className="container">
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={ () => <Home quiz={quiz} removeQuiz={handleRemove} />} />
          <Route path="/create_quiz" exact component={() => <CreateQuiz quiz={quiz} add={addQuiz} update={updateQuiz}/>} />
          <Route path="/edit_quiz/:id" exact component={() => <EditQuiz />} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
