import React, { useState } from "react";
import { dummyPeople } from "../../data/dummyPeople";
import { Link } from "react-router-dom";

function VoterRegistration() {
  // State variables to manage form input
  const [adharNo, setAdharNo] = useState("");
  const [voterID, setVoterID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registered, setRegistered] = useState(false);

  const [showExistingError, setShowExistingError] = useState(false);

  // Function to check if Aadhar number or Voter ID already exists
  const voterExists = () => {
    return dummyPeople.some(
      (person) => person.aadharNo === adharNo || person.voterId === voterID
    );
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if Aadhar number or Voter ID already exists
    if (voterExists()) {
      setShowExistingError(true);
      setRegistered(true);
    } else {
      // Perform registration logic here (save data into dummyPeople.js)
      // For demonstration purposes, let's log the form data
      console.log("Form submitted:", {
        adharNo,
        voterID,
        // Add other form fields here
      });
      // Set registration success to true
      setRegistrationSuccess(true);
    }
  };

  // Function to handle form reset
  const handleReset = () => {
    // Reset all editable fields to their initial values
    setFirstName("");
    setLastName("");
    setAddress("");
    setMobileNumber("");
    setEmail("");
  };

  // Function to handle registration process
  const handleRegistration = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if Aadhar number or Voter ID already exists
    if (voterExists()) {
      setShowExistingError(true);
      setRegistered(true);
    } else {
      // Perform registration logic here (save data into dummyPeople.js)
      // For demonstration purposes, let's log the form data
      console.log("Form submitted:", {
        adharNo,
        voterID,
        firstName,
        lastName,
        address,
        mobileNumber,
        email,
      });
      // Set registration success to true
      setRegistrationSuccess(true);
      // Reset form fields
      setAdharNo("");
      setVoterID("");
      setFirstName("");
      setLastName("");
      setAddress("");
      setMobileNumber("");
      setEmail("");
      // Optionally, you can save the data into a file here
      // saveDataToFile();
    }
  };

  return (
    <div className="flex justify-center items-center p-4  h-screen">
      {!registrationSuccess ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-gray-100 p-8 rounded-md shadow-lg flex"
        >
          {/* Logo image */}
          <div className="w-1/2 flex justify-center items-center bg-orange-300 rounded-lg m-2">
            <img
              src="/path/to/your/image.jpg" // Replace with your image path
              alt="Logo"
              className="max-w-full h-auto"
            />
          </div>
          {/* Input forms */}
          <div className="w-1/2 flex m-2 flex-col justify-center">
            {/* Aadhar No input */}
            <div className="flex flex-col mb-4">
              <label htmlFor="adharNo" className="mb-2 font-semibold">
                Aadhar No:
              </label>
              <input
                type="text"
                id="adharNo"
                value={adharNo}
                required
                onChange={(e) => setAdharNo(e.target.value)}
                className="border rounded-md p-2"
              />
            </div>
            {/* Voter ID input */}
            <div className="flex flex-col mb-4">
              <label htmlFor="voterID" className="mb-2 font-semibold">
                Voter ID:
              </label>
              <input
                type="text"
                id="voterID"
                value={voterID}
                required
                onChange={(e) => setVoterID(e.target.value)}
                className="border rounded-md p-2"
              />
            </div>
            {/* Submit button */}

            {registered ? (
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="bg-green-600 hover:bg-green-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-700 transition ease-in-out duration-300"
              >
                Go For Vote
              </button>
            ) : (
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-700 transition ease-in-out duration-300"
              >
                Submit
              </button>
            )}
            {/* Error message for existing voter */}
            {registered ? (
              <p className="text-red-500 mt-4">
                Voter with Aadhar or Voter ID already exists!
              </p>
            ) : (
              <p className="text-green-500 mt-4">Is Voter already exists?</p>
            )}
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-gray-100 p-8 rounded-md shadow-lg flex"
        >
          <div className="w-2/5 flex justify-center items-center bg-orange-300 rounded-lg m-2">
            <img
              src="/path/to/your/image.jpg" // Replace with your image path
              alt="Logo"
              className="max-w-full h-auto"
            />
          </div>

          <div className="w-1/2 flex m-2 flex-col justify-center">
            {/* Aadhar and Voter ID fields */}
            <div className="flex flex-row mb-4">
              <div className="flex flex-col w-1/2 mr-2">
                <label htmlFor="adharNo" className="mb-2 font-semibold">
                  Aadhar No:
                </label>
                <input
                  type="text"
                  id="adharNo"
                  value={adharNo}
                  required
                  readOnly // Make it read-only to prevent user modification
                  className="border rounded-md p-2 w-full bg-gray-200"
                />
              </div>
              <div className="flex flex-col w-1/2 ml-2">
                <label htmlFor="voterID" className="mb-2 font-semibold">
                  Voter ID:
                </label>
                <input
                  type="text"
                  id="voterID"
                  value={voterID}
                  required
                  readOnly // Make it read-only to prevent user modification
                  className="border rounded-md p-2 w-full bg-gray-200"
                />
              </div>
            </div>
            {/* First Name and Last Name inputs */}
            <div className="flex flex-row mb-4">
              <div className="flex flex-col w-1/2 mr-2">
                <label htmlFor="firstName" className="mb-2 font-semibold">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="flex flex-col w-1/2 ml-2">
                <label htmlFor="lastName" className="mb-2 font-semibold">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  className="border rounded-md p-2 w-full"
                />
              </div>
            </div>
            {/* Address input */}
            <div className="flex flex-col mb-4">
              <label htmlFor="address" className="mb-2 font-semibold">
                Address:
              </label>
              <input
                type="text"
                id="address"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
                className="border rounded-md p-2 w-full"
              />
            </div>
            {/* Mobile Number and Email inputs */}
            <div className="flex flex-row mb-4">
              <div className="flex flex-col w-1/2 mr-2">
                <label htmlFor="mobileNumber" className="mb-2 font-semibold">
                  Mobile No.:
                </label>
                <input
                  type="text"
                  id="mobileNumber"
                  value={mobileNumber}
                  required
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="flex flex-col w-1/2 ml-2">
                <label htmlFor="email" className="mb-2 font-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-md p-2 w-full"
                />
              </div>
            </div>
            {/* Passport-sized photo input */}
            <div className="flex flex-col mb-4">
              <label htmlFor="photo" className="mb-2 font-semibold">
                Passport-sized Photo:
              </label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                className="border rounded-md p-2 w-full"
                // Handle photo upload logic here
              />
            </div>
            {/* Submit and Reset buttons */}
            <div className="flex flex-row justify-between">
              <button
                type="submit"
                onClick={handleRegistration}
                className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
              >
                Register
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-orange-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-700 transition duration-300 ease-in-out"
              >
                Reset
              </button>
            </div>
            {/* Error message for existing voter */}
          </div>
        </form>
      )}
    </div>
  );
}

export default VoterRegistration;
