import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dummyPeople from "../../data/dummyPeople";

function Voting() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [adharNo, setAdharNo] = useState("");
  const [adharNoError, setAdharNoError] = useState("");
  const [voterId, setVoterId] = useState("");
  const [voterIdError, setVoterIdError] = useState("");
  const [address, setAddress] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpErrorCls, setOtpErrorCls] = useState("");
  const [linkageMessage, setLinkageMessage] = useState("");
  const [timer, setTimer] = useState(30);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [voted, setVoted] = useState(sessionStorage.getItem(adharNo));

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAdharNoChange = (e) => {
    const inputValue = e.target.value;
    // Validate if input is a 12-digit number
    if (/^\d{0,12}$/.test(inputValue) || inputValue === "") {
      setAdharNo(inputValue);
      setAdharNoError(""); // Clear error message
    } else {
      setAdharNoError("Adhar No must be a 12-digit number."); // Set error message
    }
  };

  const handleVoterIdChange = (e) => {
    const inputValue = e.target.value.toUpperCase();
    // Validate if input is in the format "AAA1234567" (3 capital letters followed by 7 digits)
    if (/^[A-Z]{0,3}\d{0,7}$/.test(inputValue) || inputValue === "") {
      setVoterId(inputValue);
      setVoterIdError(""); // Clear error message
    } else {
      setVoterIdError(
        "Invalid Voter ID format. Please enter 3 capital letters followed by 7 digits."
      ); // Set error message
    }
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = () => {
    // In real implementation, this would be handled by an API
    const person = dummyPeople.find((p) => p.aadharNo === adharNo);
    if (person) {
      if (person.voterId === voterId) {
        setLinkageMessage("Adhar and Voter ID verified");

        setTimeout(() => {
          setIsOtpSent(true);
          setLinkageMessage("");
          setOtpError(
            `OTP Sent Successfully, on your registered mobile number ending with ******${person.mobileNumber
              .toString()
              .slice(-4)}`
          );
          setOtpErrorCls("text-green-600");
        }, 1500);
      } else {
        setLinkageMessage("Adhar and Voter ID not linked");
      }
    } else {
      setLinkageMessage("Invalid Adhar no. or Voter ID");
    }
  };

  const handleVerify = () => {
    // In real implementation, this would be handled by an API
    const dummyVerified = otp === "123456"; // Dummy OTP for verification
    if (dummyVerified) {
      setIsVerified(true);
      const person = dummyPeople.find((p) => p.aadharNo === adharNo);
      setUserDetails(person);
      setFullName(`${firstName} ${lastName}`);

      // Update person's voted status
      const updatedPeople = dummyPeople.map((p) => {
        if (p.aadharNo === adharNo) {
          return { ...p, voted: true };
        }
        return p;
      });

      // Replace dummyPeople with updatedPeople
      dummyPeople.splice(0, dummyPeople.length, ...updatedPeople);
    } else {
      setOtpErrorCls("text-red-600");
      setOtpError("OTP verification failed.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleVote = () => {
    // alert("You have already voted." + userDetails.voted);
    if (!userDetails.voted) {
      navigate(`/voting-page/${adharNo}`); // Pass Aadhar Number to Voting Page
    } else {
      // alert("You have already voted.");
      navigate("/");
    }
  };

  useEffect(() => {
    let interval;
    if (isOtpSent && !isVerified) {
      interval = setInterval(() => {
        if (timer === 0) {
          clearInterval(interval);
          setIsOtpSent(false);
        } else {
          setTimer((prev) => prev - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOtpSent, isVerified, timer]);

  return (
    <div className="flex justify-center items-center">
      <div className=" grid grid-cols-1 w-2/3 h-2/3 m-16 bg-orange-300 bg-opacity-50 rounded-lg p-8 md:grid-cols-2">
        <div className="p-6 mr-2 sm:rounded-lg">
          <img src="src/images/VOW-voting.png" alt="" />
        </div>
        <form
          className="p-6 flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          {!isVerified && !isOtpSent && !registrationSuccess && (
            <>
              <div className="flex flex-col ">
                <label htmlFor="adharNo">Adhar No</label>
                <input
                  type="text"
                  name="adharNo"
                  id="adharNo"
                  placeholder="Adhar No"
                  onChange={handleAdharNoChange}
                  value={adharNo}
                  className={`w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none ${
                    adharNoError ? "border-red-500" : ""
                  }`}
                />
                {adharNoError && (
                  <p className="text-red-500 text-sm mt-1">{adharNoError}</p>
                )}
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="voterId">Voter ID</label>
                <input
                  type="text"
                  name="voterId"
                  id="voterId"
                  placeholder="Voter ID"
                  onChange={handleVoterIdChange}
                  value={voterId}
                  className={`w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none ${
                    voterIdError ? "border-red-500" : ""
                  }`}
                />
                {voterIdError && (
                  <p className="text-red-500 text-sm mt-1">{voterIdError}</p>
                )}
              </div>
              <button
                type="button"
                onClick={handleSendOtp}
                className="md: bg-green-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-700 transition ease-in-out duration-300"
              >
                Verify Adhar & Voter ID
              </button>
              <p className="text-green-500 text-lg  p-2">{linkageMessage}</p>
            </>
          )}
          {isOtpSent && !isVerified && !registrationSuccess ? (
            <div className="flex flex-col mt-2">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                name="otp"
                id="otp"
                placeholder="OTP"
                onChange={handleOtpChange}
                value={otp}
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              />
              <p className={`text-lg max-w-fit p-4 ${otpErrorCls} `}>
                {otpError}
              </p>
              <p className="text-orange-700 ">Time Left: {timer}s</p>
              <button
                type="button"
                onClick={handleVerify}
                className=" bg-green-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-700 transition ease-in-out duration-300"
              >
                Verify OTP
              </button>
            </div>
          ) : null}
          {(isVerified || userDetails.voted) && !registrationSuccess && (
            <>
              <div className="flex flex-col items-center mt-2 ">
                <img
                  src={userDetails.profilePhoto}
                  alt=""
                  className="w-32 h-32 object-cover rounded-lg"
                />{" "}
                {/* Adjust size as needed */}
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="fullName" className="font-semibold">
                  Name:
                </label>
                <div>{userDetails ? userDetails.fullName : fullName}</div>
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="address" className="font-semibold">
                  Address:
                </label>
                <div>{userDetails ? userDetails.address : address}</div>
              </div>
              {userDetails.voted ? (
                <button
                  onClick={handleVote}
                  className="bg-orange-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-700 transition ease-in-out duration-300"
                >
                  Your vote has been considered..!
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleVote}
                  className="bg-green-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-700 transition ease-in-out duration-300"
                >
                  Go For Vote
                </button>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Voting;
