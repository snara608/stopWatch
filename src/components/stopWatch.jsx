import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const handleStartStop = () => {
    setRunning(!running);
  };

  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div>
      <h1>Stopwatch</h1>

      <p>
        Time: {minutes}:{secs < 10 ? `0${secs}` : secs}
      </p>

      <button onClick={handleStartStop}>
        {running ? "Stop" : "Start"}
      </button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
