import React, { useState } from "react";
import { dummyPeople } from "../../data/dummyPeople";
import { useNavigate } from "react-router-dom";

function VoterRegistration() {
  // State variables to manage form input
  const [adharNo, setAdharNo] = useState("");
  const [voterID, setVoterID] = useState("");
  const [voterIdError, setVoterIdError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [adharNoError, setAdharNoError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [validate, setValidate] = useState(false);
  const [showExistingError, setShowExistingError] = useState(false);

  // Function to check if Aadhar number or Voter ID already exists
  const voterExists = () => {
    return dummyPeople.some(
      (person) => person.aadharNo === adharNo || person.voterId === voterID
    );
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if Aadhar number and Voter ID meet conditions
    if (adharNo.length === 12 && voterID.length === 10) {
      // If conditions are met, set validation flag to true
      setValidate(true);
    } else {
      // If conditions are not met, show error message or handle accordingly
      // For example, you can display an error message to the user
      // Or perform some other action based on your application's requirements
      // Here, we can just log an error message to the console
      console.error(
        "Aadhar number must be 12 digits and Voter ID must be 10 digits."
      );
      return; // Exit the function early since validation failed
    }

    // If validation passes, proceed with further checks or registration logic
    if (validate) {
      if (voterExists()) {
        // If voter already exists, set error flags accordingly
        setShowExistingError(true);
        setRegistered(true);
      } else {
        // If voter doesn't exist, proceed with registration logic
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
      setShowPopup(true);

      // Optionally, you can save the data into a file here
      // saveDataToFile();
      // alert("Registered successfuly!");
    }
  };

  const handleAdharNoChange = (e) => {
    const inputValue = e.target.value;
    // Validate if input is a 12-digit number
    if (/^\d{0,12}$/.test(inputValue) || inputValue === "") {
      setAdharNo(inputValue);
      // setValidate(true);
      setAdharNoError(""); // Clear error message
    } else {
      setAdharNoError("Adhar No must be a 12-digit number."); // Set error message
    }
  };

  const handleVoterIdChange = (e) => {
    const inputValue = e.target.value.toUpperCase();
    // Validate if input is in the format "AAA1234567" (3 capital letters followed by 7 digits)
    if (/^[A-Z]{0,3}\d{0,7}$/.test(inputValue) || inputValue === "") {
      setVoterID(inputValue);
      setVoterIdError(""); // Clear error message
    } else {
      setVoterIdError(
        "Invalid Voter ID format. Please enter 3 capital letters followed by 7 digits."
      ); // Set error message
    }
  };

  // Function to handle photo change event
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    // Check if file size is less than 150KB
    if (file.size / 1024 <= 150) {
      setPhoto(file);
      setPhotoError("");
    } else {
      setPhotoError("Photo size must be less than 150KB.");
    }
  };

  // Function to handle first name change
  const handleFirstNameChange = (e) => {
    const inputValue = e.target.value;
    // Validate if input contains only alphabets
    if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === "") {
      setFirstName(inputValue);
    }
  };

  // Function to handle last name change
  const handleLastNameChange = (e) => {
    const inputValue = e.target.value;
    // Validate if input contains only alphabets
    if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === "") {
      setLastName(inputValue);
    }
  };

  // Function to handle mobile number change
  const handleMobileNumberChange = (e) => {
    const inputValue = e.target.value;
    // Validate if input is a 10-digit number
    if (/^\d{0,10}$/.test(inputValue) || inputValue === "") {
      setMobileNumber(inputValue);
    }
  };

  // Function to handle email change
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    // Validate email format using regex
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue) ||
      inputValue === ""
    ) {
      setEmail(inputValue);
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      {!registrationSuccess ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-orange-200 p-8 rounded-md shadow-lg  flex"
        >
          {/* Logo image */}
          <div className="w-1/2 flex justify-center items-center rounded-lg m-2">
            <img
              src="src\images\VOW-About.png" // Replace with your image path
              alt="Logo"
              className="max-w-full h-auto"
            />
          </div>
          {/* Input forms */}
          <div className="w-1/2 flex m-2 flex-col justify-center">
            {/* Aadhar No input */}
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
            {/* Voter ID input */}

            <div className="flex flex-col mt-2">
              <label htmlFor="voterId">Voter ID</label>
              <input
                type="text"
                name="voterId"
                id="voterId"
                placeholder="Voter ID"
                onChange={handleVoterIdChange}
                value={voterID}
                className={`w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none ${
                  voterIdError ? "border-red-500" : ""
                }`}
              />
              {voterIdError && (
                <p className="text-red-500 text-sm mt-1">{voterIdError}</p>
              )}
            </div>
            {/* Submit button */}

            {registered ? (
              <button
                onClick={() => {
                  navigate("/voting");
                  // Reset form fields
                  setAdharNo("");
                  setVoterID("");
                  setFirstName("");
                  setLastName("");
                  setAddress("");
                  setMobileNumber("");
                  setEmail("");
                }}
                className="bg-green-600 hover:bg-green-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-700 transition ease-in-out duration-300"
              >
                Vote Now
              </button>
            ) : (
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-dark text-white font-bold py-3 px-6 rounded-lg mt-2 hover:bg-orange-700 "
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
              <p className="text-green-500 mt-4"> </p>
            )}
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="min-w-l max-w-l bg-orange-200 p-2 mx-16 rounded-md shadow-lg flex"
        >
          <div className="w-2/5 flex justify-center items-center rounded-lg m-2">
            <img
              src="src\images\VOW-About.png" // Replace with your image path
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
                  readOnly // Make it read-only to prevent user modification
                  className={`mt-2 py-1 px-1 border border-red-500 rounded-md p-2 w-full bg-gray-200 text-orange-500 font-bold`}
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
                  readOnly // Make it read-only to prevent user modification
                  className={`mt-2 py-1 px-1 border border-red-500 rounded-md p-2 w-full bg-gray-200 text-orange-500 font-bold`}
                />
              </div>
            </div>
            {/* First Name and Last Name inputs */}
            <div className="flex flex-row mb-4">
              <div className="flex flex-col w-1/2 mr-2">
                <label htmlFor="firstName" className="mb-2 font-semibold">
                  First Name:
                </label>
                {/* First Name input */}
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleFirstNameChange}
                  value={firstName}
                  className={`w-100 mt-2 py-1 px-1 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none`}
                />
              </div>
              <div className="flex flex-col w-1/2 ml-2">
                <label htmlFor="lastName" className="mb-2 font-semibold">
                  Last Name:
                </label>
                {/* Last Name input */}
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={handleLastNameChange}
                  value={lastName}
                  className={`w-100 mt-2 py-1 px-1 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none`}
                  required
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
                placeholder="Address"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
                className={`w-100 mt-2 py-1 px-1 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none`}
              />
            </div>
            {/* Mobile Number and Email inputs */}
            <div className="flex flex-row mb-4">
              <div className="flex flex-col w-1/2 mr-2">
                <label htmlFor="mobileNumber" className="mb-2 font-semibold">
                  Mobile No.:
                </label>
                {/* Mobile Number input */}
                <input
                  type="tel"
                  name="mobileNumber"
                  id="mobileNumber"
                  placeholder="Mobile Number"
                  onChange={handleMobileNumberChange}
                  value={mobileNumber}
                  className={`w-100 mt-2 py-1 px-1 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none`}
                  required
                />
              </div>
              <div className="flex flex-col w-1/2 ml-2">
                <label htmlFor="email" className="mb-2 font-semibold">
                  Email:
                </label>
                {/* Email input */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleEmailChange}
                  value={email}
                  className={`w-100 mt-2 py-1 px-1 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none`}
                  required
                />
              </div>
            </div>
            {/* Passport-sized photo input */}
            <div className="flex flex-col mb-4">
              <label htmlFor="photo" className="mb-2 font-semibold">
                Passport-sized Photo (max 150kb):
              </label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                className="border rounded-md p-2 w-full"
                onChange={handlePhotoChange}
                required
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

      {showPopup ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-orange-400 text-white rounded-lg p-4 max-w-lg text-center">
            <div>
              <p>{firstName},</p>
              <p>you registered with </p>
              <p>voter ID: {voterID}</p>
              <p>Successfuly..!</p>
            </div>
            <button
              onClick={() => {
                setShowPopup(false);
                navigate("/voting");
              }}
              className="bg-green-700 hover:bg-orange-700 text-grey-600 m-4 font-bold py-2 px-4 rounded"
            >
              Vote Now
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default VoterRegistration;
