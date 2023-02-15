import Title from "./components/Title";
import {
  useState, useEffect
} from "react";

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
      <Title />
    </div>
  );
}

export default App;
