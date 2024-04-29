import React, { useState, useEffect } from "react";
import "./Home.css"; // Import CSS file for styling

function Home() {
  const dummyElectionData = {
    title: "2024 Presidential Election",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum quam sit amet dui semper, nec posuere libero tempor. Nunc eu ipsum justo. Vivamus non ex eros.",
  };

  const [electionData, setElectionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchElectionData = async () => {
    setTimeout(() => {
      setElectionData(dummyElectionData);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchElectionData();
  }, []);

  return (
    <div className="home">
      <h1 className="title">Upcoming Elections</h1>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          {electionData ? (
            <div className="election-info">
              <h2 className="election-title">{electionData.title}</h2>
              <p className="election-description">{electionData.description}</p>
            </div>
          ) : (
            <p className="no-data">No election data available</p>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
