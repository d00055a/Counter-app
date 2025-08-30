import { useEffect, useState } from "react";
import "./App.css";
import CounterDisplay from "./CounterDisplay";
import StepInput from "./StepInput";

export default function App() {

  // Counter value state
  const [count, setCount] = useState(0);

  // Step value state
  const [step, setStep] = useState(1);

  // Buttons functions
  const increase = () => setCount(c => c + step);
  const decrease = () => setCount(c => Math.max(0, c - step));
  const reset = () => setCount(0);

  // Input change function
  const onChangeStep = (e) => { 
  const v = parseInt(e.target.value, 10); 
  setStep(Number.isNaN(v) ? 1 : Math.max(1, Math.min(50, v))); 
  };

  // Use effect for keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowUp") increase();
      if (e.key === "ArrowDown") decrease();
      if (e.key.toLowerCase() === "r") reset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);


  return (

    <div className="app">

     <header className="app-header">
        <h1>Counter App</h1>
     </header>


      <section className="content">

      <StepInput step={step} onChangeStep={onChangeStep} />
      <CounterDisplay count={count} increase={increase} decrease={decrease} />

      <button className="reset" onClick={reset}>Reset</button>

      </section>


      <footer className="app-footer">
         <p>© 2025 Daniel Dedja. All rights reserved.</p>
      </footer>

    </div>

  );

}
