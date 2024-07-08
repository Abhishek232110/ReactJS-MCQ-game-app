import "./App.css";
import Quiz from "./components/quiz";

function App() {
  return (
    <>
      <div className="bg-gray-800 h-screen pt-20 space-y-5">
        <h1 className="text-3xl">React MCQ Game</h1>
        <Quiz />
      </div>
    </>
  );
}

export default App;
