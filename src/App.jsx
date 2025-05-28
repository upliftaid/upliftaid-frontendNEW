import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Causes from "./pages/causes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Causes />
    </div>
  );
}

export default App;
