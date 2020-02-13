import React, { useState, useEffect } from "react";

function EffectExample() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = counter;

    return () => (document.title = "React App");
  }, [counter]);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Adicionar 1</button>
    </>
  );
}

export default EffectExample;
