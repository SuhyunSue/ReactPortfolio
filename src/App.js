import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Topbar, Home, AboutMe, Certifications } from "./components/JS";
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Topbar />   {/* 항상 보이는 상단바 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </Router>
    </>
  );
} 

export default App;
