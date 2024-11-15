import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="#">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="title">
        <h1>Composant React</h1>
      </div>
      <div className="card"></div>
    </>
  );
}

export default App;
