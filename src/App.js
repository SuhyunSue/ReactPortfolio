import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/JS/Topbar";
import Home from "./components/JS/Home";
import AboutMe from "./components/JS/AboutMe";
import Certifications from "./components/JS/Certifications";
import Contact from "./components/JS/Contact";
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
