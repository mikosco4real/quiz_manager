import Header from './components/Header'
import ListQuiz from './components/ListQuiz'


function App() {
  return (
    <div className="container">
      <Header />
      <div className="quiz_card">
        <ListQuiz />
        <ListQuiz />
        <ListQuiz />
        <ListQuiz />
        <ListQuiz />
        <ListQuiz />
      </div>
    </div>
  );
}

export default App;
