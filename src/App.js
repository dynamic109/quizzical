import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage";
import Questions from "./components/Questions";
import Answers from "./components/Answers";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/answers" element={<Answers />} />
      </Routes>
    </div>
  );
}

export default App;
