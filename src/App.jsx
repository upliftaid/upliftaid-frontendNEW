import React from "react";
import AuthPage from "./pages/AuthPage";
import "./index.css";

function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#00733C] via-white to-[#00b894] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>
      <AuthPage />
    </div>
  );
}

export default App;
