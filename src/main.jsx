import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import VotingResult from "./components/VotingResult/VotingResult.jsx";
import Voting from "./components/Voting/Voting.jsx";
import VoterRegistration from "./components/VoterRegistrartion/VoterRegistration.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="votingResult" element={<VotingResult />} />
      <Route path="voting" element={<Voting />} />
      <Route path="voterRegistration" element={<VoterRegistration />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
