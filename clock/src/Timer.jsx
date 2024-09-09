import React, { useState, useEffect } from "react";

function Timer() {
  const [inputTime, setInputTime] = useState(60); // Stores the input time
  const [time, setTime] = useState(0); // Stores the actual countdown time
  const [isActive, setIsActive] = useState(false);

  // This effect runs every second if the timer is active and time is greater than 0
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

  // Handles the change in the input field
  const handleInputChange = (e) => {
    setInputTime(Number(e.target.value)); // Update the inputTime
  };

  // Start the timer
  const startTimer = () => {
    setTime(inputTime); // Set the countdown to the input time
    setIsActive(true);  // Start the countdown
  };

  // Pause the timer
  const pauseTimer = () => {
    setIsActive(false);
  };

  // Reset the timer
  const resetTimer = () => {
    setIsActive(false);
    setTime(0); // Reset countdown time
  };

  return (
    <div>
      <h1>Timer: {time} seconds</h1>

      {!isActive && (
        <div>
          <input
            type="number"
            value={inputTime}
            onChange={handleInputChange}
            min="0"
            placeholder="Set Time in Seconds"
          />
          <button onClick={startTimer}>Start Timer</button>
        </div>
      )}

      {isActive && <button onClick={pauseTimer}>Pause</button>}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
