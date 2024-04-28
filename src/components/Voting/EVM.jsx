import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import parties from "../../data/partiesCandidates";
import dummyPeople, { setVotedStatus } from "../../data/dummyPeople";

function EVM() {
  const { adharNo } = useParams();
  const navigate = useNavigate();
  const [voter, setVoter] = useState("");
  const [voterID, setVoterID] = useState("");
  const [voted, setVoted] = useState(false);
  const [selectedParty, setSelectedParty] = useState(null);
  const [selectedPartyFlag, setSelectedPartyFlag] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const handleVoteClick = (partyName, partyFlag) => {
    setVotedStatus(adharNo);
    setSelectedParty(partyName);
    setSelectedPartyFlag(partyFlag);
    setShowPopup(true);
  };

  useEffect(() => {
    const user = dummyPeople.find((person) => person.aadharNo === adharNo);
    setUserDetails(user);
    setVoter(user.fullName);
    setVoterID(user.voterId);
    setVoted(sessionStorage.getItem(adharNo) ? true : false);
  }, [adharNo]);

  return (
    <div className="flex flex-col mt-4">
      <h2 className="text-2xl text-orange-600 font-semibold mb-1">
        Voting Page
      </h2>
      <p className="text-2xl text-green-600 font-bold mb-2">
        Dear voter, with voter ID: {voterID}
      </p>
      <p className="text-lg text-blue-600">
        Click the button below to vote for your preferred candidate from the
        list..!
      </p>
      <div className="flex justify-center items-center my-4 h-full">
        <table className="border bg-orange-200 border-gray-600 w-full md:w-2/3 lg:w-1/2 rounded-lg overflow-hidden">
          <thead>
            <tr className="border border-gray-600">
              <th className="border border-gray-600 px-4 py-2">Party</th>
              <th className="border border-gray-600 px-4 py-2">Candidate</th>
              <th className="border border-gray-600 px-4 py-2">Vote</th>
            </tr>
          </thead>
          <tbody>
            {parties.map((party, index) => (
              <tr key={index} className="border border-gray-600">
                <td className="border border-gray-600 px-4 py-2">
                  <img
                    src={party.partyFlag}
                    alt={`${party.partyName} Flag`}
                    className="w-8 h-8 mr-2 inline"
                  />
                  {party.partyName}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  {party.candidateName}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  <PartyButton
                    partyName={party.partyName}
                    handleVoteClick={handleVoteClick}
                    disabled={
                      voted ||
                      (selectedParty && selectedParty !== party.partyName)
                    }
                    partyFlag={party.partyFlag}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-orange-400 text-white rounded-lg p-4 max-w-lg text-center">
            <div>
              <p>{voter}, Voted to</p>
              <p>
                <img
                  src={selectedPartyFlag}
                  alt={`${selectedParty} Flag`}
                  className="w-8 h-8 mr-2 inline"
                />
              </p>
              <p>{selectedParty}</p>
              Successfully!
            </div>
            <button
              onClick={() => {
                setShowPopup(false);
                navigate("/");
              }}
              className="bg-green-700 hover:bg-orange-700 text-grey-600 m-4 font-bold py-2 px-4 rounded"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function PartyButton({ partyName, handleVoteClick, disabled, partyFlag }) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => handleVoteClick(partyName, partyFlag)}
        disabled={disabled}
        className={` ${disabled ? "cursor-not-allowed" : ""}`}
      >
        <img
          src={
            disabled
              ? "/src/images/VOW-CantVote.png"
              : "/src/images/VOW-CanVote.png"
          }
          alt={disabled ? "Can't Vote" : "Can Vote"}
          style={{
            width: "35px",
            height: "35px",
            marginRight: "5px",
            cursor: "pointer",
          }}
        />
      </button>
    </div>
  );
}

export default EVM;
