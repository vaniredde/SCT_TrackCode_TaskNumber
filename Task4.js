import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {step === 1 && (
        <div>
          <h2>Select Your Fitness Goal</h2>
          <button onClick={() => setStep(2)}>Lose Weight</button>
          <button onClick={() => setStep(2)}>Build Muscle</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Choose Workout Type</h2>
          <button onClick={() => setStep(3)}>Gym</button>
          <button onClick={() => setStep(3)}>Home</button>
          <button onClick={() => setStep(1)}>Back</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>You're All Set!</h2>
          <button onClick={() => setStep(1)}>Restart</button>
        </div>
      )}
    </div>
  );
}
