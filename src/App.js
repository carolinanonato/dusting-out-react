import {
  useState, useEffect
} from "react";

import Title from "./components/Title";
import QuestionBlock from "./components/QuestionBlock";
import QuestionsBlock from "./components/QuestionsBlock";

const App = () => {


  const [quiz, setQuiz] = useState(false)

  const fetchData = async () => {

    try {
      const response = await fetch('http://localhost:8000/quiz');
      const json = await response.json();
      console.log(json);
      setQuiz(json);
    } catch (error) {
      console.log(error);
    }


  }

  useEffect(() => { fetchData() }, [])

  return (
    <div>
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz && quiz?.content.map(contentItem => (
        <QuestionsBlock key={contentItem.id} quizItem={contentItem} />
      ))}
    </div>
  );
}

export default App;
