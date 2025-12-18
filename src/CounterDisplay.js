
export default function CounterDisplay({ count, increase, decrease }) {

  return (

    <div className="counter">

      <button aria-label="Decrease" onClick={decrease}>−</button>
      <span className="value" role="status" aria-live="polite">{count}</span>
      <button aria-label="Increase" onClick={increase}>+</button>
      
    </div>

  );

}
