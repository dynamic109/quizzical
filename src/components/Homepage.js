import React from "react";

import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="text-center">
      <h1 className="text-[30px] font-bold text-[#293264]">Quizzical</h1>
      <p>Test your knowledge on general questions</p>
      <Link to="/questions">
        <button className=" p-3 mt-8 w-48 border-none rounded-2xl bg-[#4D5B9E] text-white">
          Start quiz
        </button>
      </Link>
    </div>
  );
}

export default Homepage;
