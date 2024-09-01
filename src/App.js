import "./App.css";
import CountDownTimer from "./components/countdown-timer";

let topics = [
  { title: "Form Validation", component: <></> },
  { title: "Countdown Timer", component: <CountDownTimer /> },
  { title: "Data Pagination", component: <></> },
];

function App() {
  return (
    <div className="App">
      {topics.map((list) => (
        <button
          className="card"
          key={list.title}
          onClick={() => console.log(list.title)}
        >
          <h2>{list.title}</h2>
        </button>
      ))}
    </div>
  );
}

export default App;
