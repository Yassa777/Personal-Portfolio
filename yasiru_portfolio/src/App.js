import logo from './logo.svg';
import './App.css';
import LandingPage from './landingPage';
import Projects from './Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
  );
}

export default App;
