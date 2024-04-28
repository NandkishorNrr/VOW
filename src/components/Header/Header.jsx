import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const votingEndTime = new Date("2024-04-30T00:00:00Z").getTime(); // Set the end time here
    const now = new Date().getTime();
    const difference = votingEndTime - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  }

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-orange-200 rounded-md border-gray-200 px-2 lg:px-6 py-1">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="src\images\VOW-logo.png"
              className="mr-3 h-12"
              alt="HomeLogo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <p className="text-orange-700 font-bold text-2xl">
              {timeLeft.days} Day,{" "}
              {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}:
              {timeLeft.minutes < 10
                ? `0${timeLeft.minutes}`
                : timeLeft.minutes}
              :
              {timeLeft.seconds < 10
                ? `0${timeLeft.seconds}`
                : timeLeft.seconds}{" "}
            </p>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <Link to="/votingResult">
                <img src="" className=" h-16" alt="LogoVotingResult" />
              </Link>
              <Link to="/voting">
                <img
                  src="src\images\VOW-voteIndial.png"
                  className=" h-16"
                  alt="LogoGoForVote"
                />
              </Link>
              <Link to="/voterRegistration">
                <img src="" className=" h-16" alt="voterRegistration" />
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
