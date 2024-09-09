import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DigitalClock from "./DigitalClock";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";
import './index.css'; // Importing the CSS

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Welcome to the Clock App</h1>

        {/* Navigation Links */}
        <nav>
          <Link to="/digital-clock">Digital Clock</Link> | 
          <Link to="/stopwatch">Stopwatch</Link> | 
          <Link to="/timer">Timer</Link>
        </nav>

        {/* Page Content */}
        <div className="page-container">
          <Routes>
            <Route path="/digital-clock" element={<DigitalClock />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </div>
      </div>
      
      {/* Footer */}
      <footer>
        <p>Created by Clock Enthusiasts | © 2024</p>
      </footer>
    </Router>
  );
}

export default App;
