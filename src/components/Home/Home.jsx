import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Vote On Web..!</h1>
      <Link
        to="/voting"
        className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
      >
        Start Voting
      </Link>
    </div>
  );
}

export default Home;
