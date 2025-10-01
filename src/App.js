import Home from "./components/JS/Home";
import './App.css';
import Topbar from "./components/JS/Topbar";

function App() {
  return (
    <>
    <div className="Topbar">
      <Topbar className="topbar" />
    </div>
    <div className="App">
      <Home className="home" />
    </div>
    </>
  );
}

export default App;
