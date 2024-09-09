import React, { useState, useEffect } from "react";
import './index.css'; // Import the CSS file

function Timer() {
  const [inputTime, setInputTime] = useState(60); // Stores the input time
  const [time, setTime] = useState(0); // Stores the actual countdown time
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && isActive) {
      setIsActive(false); // Stop the timer when it reaches zero
      alert("Time's up!");
    }
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isActive, time]);

  const handleInputChange = (e) => {
    setInputTime(Number(e.target.value)); // Update the inputTime
  };

  const startTimer = () => {
    setTime(inputTime); // Set the countdown to the input time
    setIsActive(true);  // Start the countdown
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(0); // Reset countdown time
  };

  return (
    <div className="timer-container">
      <h1>Timer: {time} seconds</h1>

      {!isActive && (
        <div className="input-container">
          <input
            type="number"
            value={inputTime}
            onChange={handleInputChange}
            min="0"
            placeholder="Set Time in Seconds"
          />
          <button onClick={startTimer} className="btn start-btn">Start Timer</button>
        </div>
      )}

      {isActive && <button onClick={pauseTimer} className="btn pause-btn">Pause</button>}
      <button onClick={resetTimer} className="btn reset-btn">Reset</button>
    </div>
  );
}

export default Timer;
