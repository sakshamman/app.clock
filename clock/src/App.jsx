import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DigitalClock from "./DigitalClock";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to the Clock</h1>

        {/* Navigation Links */}
        <Link to="/digital-clock">Digital Clock</Link> | <Link to="/stopwatch">Stopwatch</Link> | <Link to="/timer">Timer</Link>

        {/* Routes */}
        <Routes>
          <Route path="/digital-clock" element={<DigitalClock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
