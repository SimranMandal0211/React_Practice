import { useEffect } from "react";
import { useState } from "react";

function App(){
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() =>{
    if(!isRunning) return;

    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  // Calculating Minutes & seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return(
    <>
      <h1>Timer</h1>

      <h2>
        {String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}
      </h2>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap:  "10px", flexWrap: "wrap"}}>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button onClick={() => {
          setTime(0);
          setIsRunning(false);
        }}>Reset</button>
      </div>


    </>
  )
}

export default App;