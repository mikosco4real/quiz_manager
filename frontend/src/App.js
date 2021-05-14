import Header from './components/Header'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import CreateQuiz from './Pages/CreateQuiz'

function App() {
  return (
    <div className="container">
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create_quiz" exact component={CreateQuiz} />
          <Route path="*" exact component={CreateQuiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
