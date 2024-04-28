import fs from "fs";

let dummyPeople = [
  {
    id: "123456789012",
    firstName: "John",
    lastName: "Doe",
    fullName: "John Doe",
    address: "123 Main St, City, Country",
    mobileNumber: "+1234567890",
    email: "john.doe@example.com",
    aadharNo: "123456789012",
    voterId: "VOT1234567",
    verified: true,
    profilePhoto: "https://via.placeholder.com/150/FF5733/FFFFFF?text=John+Doe", // Placeholder URL for profile photo
    voted: false,
  },
  {
    id: "234567890123",
    firstName: "Alice",
    lastName: "Smith",
    fullName: "Alice Smith",
    address: "456 Elm St, City, Country",
    mobileNumber: "+1987654321",
    email: "alice.smith@example.com",
    aadharNo: "234567890123",
    voterId: "VOT2345678",
    verified: true,
    profilePhoto:
      "https://via.placeholder.com/150/FFC300/FFFFFF?text=Alice+Smith", // Placeholder URL for profile photo
    voted: false,
  },
  {
    id: "345678901234",
    firstName: "Michael",
    lastName: "Johnson",
    fullName: "Michael Johnson",
    address: "789 Oak St, City, Country",
    mobileNumber: "+1122334455",
    email: "michael.johnson@example.com",
    aadharNo: "345678901234",
    voterId: "VOT3456789",
    verified: true,
    profilePhoto:
      "https://via.placeholder.com/150/DAF7A6/000000?text=Michael+Johnson", // Placeholder URL for profile photo
    voted: false,
  },
  {
    id: "456789012345",
    firstName: "Emily",
    lastName: "Brown",
    fullName: "Emily Brown",
    address: "8910 Pine St, City, Country",
    mobileNumber: "+1567890123",
    email: "emily.brown@example.com",
    aadharNo: "456789012345",
    voterId: "VOT4567890",
    verified: true,
    profilePhoto:
      "https://via.placeholder.com/150/96D9D6/000000?text=Emily+Brown", // Placeholder URL for profile photo
    voted: false,
  },
  {
    id: "567890123456",
    firstName: "David",
    lastName: "Martinez",
    fullName: "David Martinez",
    address: "1011 Cedar St, City, Country",
    mobileNumber: "+1654321897",
    email: "david.martinez@example.com",
    aadharNo: "567890123456",
    voterId: "VOT5678901",
    verified: true,
    profilePhoto:
      "https://via.placeholder.com/150/C0C0C0/FFFFFF?text=David+Martinez", // Placeholder URL for profile photo
    voted: false,
  },
  {
    id: "678901234567",
    firstName: "Olivia",
    lastName: "Wilson",
    fullName: "Olivia Wilson",
    address: "1213 Walnut St, City, Country",
    mobileNumber: "+1432189675",
    email: "olivia.wilson@example.com",
    aadharNo: "678901234567",
    voterId: "VOT6789012",
    verified: true,
    profilePhoto:
      "https://via.placeholder.com/150/536DFE/FFFFFF?text=Olivia+Wilson", // Placeholder URL for profile photo
    voted: false,
  },
  {
    id: "789012345678",
    firstName: "William",
    lastName: "Taylor",
    fullName: "William Taylor",
    address: "1415 Maple St, City, Country",
    mobileNumber: "+1987254361",
    email: "william.taylor@example.com",
    aadharNo: "789012345678",
    voterId: "VOT7890123",
    verified: true,
    profilePhoto:
      "https://via.placeholder.com/150/FFC0CB/000000?text=William+Taylor", // Placeholder URL for profile photo
    voted: false,
  },
  {
    id: "890123456789",
    firstName: "Sophia",
    lastName: "Anderson",
    fullName: "Sophia Anderson",
    address: "1617 Birch St, City, Country",
    mobileNumber: "+1789456123",
    email: "sophia.anderson@example.com",
    aadharNo: "890123456789",
    voterId: "VOT8901234",
    verified: true,
    profilePhoto:
      "https://via.placeholder.com/150/00BFFF/FFFFFF?text=Sophia+Anderson", // Placeholder URL for profile photo
    voted: false,
  },
  {
    id: "901234567890",
    firstName: "James",
    lastName: "Thomas",
    fullName: "James Thomas",
    address: "1819 Oak St, City, Country",
    mobileNumber: "+1789456789",
    email: "james.thomas@example.com",
    aadharNo: "901234567890",
    voterId: "VOT9012345",
    verified: true,
    profilePhoto:
      "https://via.placeholder.com/150/FF5733/FFFFFF?text=James+Thomas", // Placeholder URL for profile photo
    voted: false,
  },
  {
    id: "012345678901",
    firstName: "Emma",
    lastName: "Hernandez",
    fullName: "Emma Hernandez",
    address: "2021 Pine St, City, Country",
    mobileNumber: "+1567890432",
    email: "emma.hernandez@example.com",
    aadharNo: "012345678901",
    voterId: "VOT0123456",
    verified: false,
    profilePhoto:
      "https://via.placeholder.com/150/2ECC71/FFFFFF?text=Emma+Hernandez", // Placeholder URL for profile photo
    voted: false,
  },
];

export function functionTake(aadharNo) {
  const person = dummyPeople.find((person) => person.aadharNo === aadharNo);
  if (person && !person.voted) {
    person.voted = true;
    updateVotedInFile(aadharNo);
  }
}

export function setVoted(aadharNo) {
  const person = dummyPeople.find((person) => person.aadharNo === aadharNo);
  if (person) {
    person.voted = true;
    updateVotedInFile(aadharNo);
  }
}

export function updateVotedInFile(aadharNo) {
  const personIndex = dummyPeople.findIndex(
    (person) => person.aadharNo === aadharNo
  );
  if (personIndex !== -1) {
    dummyPeople[personIndex].voted = true;
    fs.writeFile("dummyPeople.json", JSON.stringify(dummyPeople), (err) => {
      if (err) throw err;
      console.log("Data has been written to the file");
    });
  }
}

export function setVotedStatus(aadharNo) {
  sessionStorage.setItem(aadharNo, true);
}

export default dummyPeople;
export { dummyPeople };
