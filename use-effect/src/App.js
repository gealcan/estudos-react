import React, { useState } from "react";
import Effect from "./EffectExample";
function App() {
  const [visible, setVisible] = useState(true);
  setTimeout(() => {
    setVisible(false);
  }, 5000);
  return visible && <Effect />;
}
export default App;
