
export default function StepInput({ step, onChangeStep }) {

  return (

    <label className="step">
      Step:
      <input
        type="number"
        min="1"
        max="50"
        value={step}
        onChange={onChangeStep}
      />
    </label>

  );
  
}
