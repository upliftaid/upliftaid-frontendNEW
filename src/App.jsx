import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar  from "./layout/Navbar";
import Career from "./pages/Career";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Career/>
    </>
  );
}

export default App;
