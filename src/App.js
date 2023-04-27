import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive && (mins > 0 || secs > 0)) {
      intervalId = setInterval(() => {
        if (secs === 0) {
          setMins(mins - 1);
          setSecs(59);
        } else {
          setSecs(secs - 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, mins, secs]);

  const handleStart = () => setIsActive(true);
  const handleReset = () => {
    setIsActive(false);
    setMins(0);
    setSecs(0);
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        <label>Minutes:</label>
        <input type="number" onChange={(e) => setMins(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Seconds:</label>
        <input type="number" onChange={(e) => setSecs(parseInt(e.target.value))} />
      </div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
      <div>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</div>
    </div>
  );
}

export default CountdownTimer;


