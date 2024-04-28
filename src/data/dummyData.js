export const partiesVotes = [
  {
    locality: "Madhya Pradesh",
    BJP: { name: "BJP", votes: 456 },
    INC: { name: "INC", votes: 345 },
    AAP: { name: "AAP", votes: 234 },
    BSP: { name: "BSP", votes: 123 },
    CPI: { name: "CPI", votes: 567 },
    NPP: { name: "NPP", votes: 678 },
    Other: { name: "Other", votes: 789 },
  },
  {
    locality: "Gujarat",
    BJP: { name: "BJP", votes: 654 },
    INC: { name: "INC", votes: 543 },
    AAP: { name: "AAP", votes: 432 },
    BSP: { name: "BSP", votes: 321 },
    CPI: { name: "CPI", votes: 876 },
    NPP: { name: "NPP", votes: 987 },
    Other: { name: "Other", votes: 876 },
  },
  {
    locality: "Rajasthan",
    BJP: { name: "BJP", votes: 345 },
    INC: { name: "INC", votes: 234 },
    AAP: { name: "AAP", votes: 123 },
    BSP: { name: "BSP", votes: 567 },
    CPI: { name: "CPI", votes: 678 },
    NPP: { name: "NPP", votes: 789 },
    Other: { name: "Other", votes: 890 },
  },
  {
    locality: "Uttar Pradesh",
    BJP: { name: "BJP", votes: 456 },
    INC: { name: "INC", votes: 345 },
    AAP: { name: "AAP", votes: 234 },
    BSP: { name: "BSP", votes: 123 },
    CPI: { name: "CPI", votes: 567 },
    NPP: { name: "NPP", votes: 678 },
    Other: { name: "Other", votes: 789 },
  },
  {
    locality: "Bihar",
    BJP: { name: "BJP", votes: 654 },
    INC: { name: "INC", votes: 543 },
    AAP: { name: "AAP", votes: 432 },
    BSP: { name: "BSP", votes: 321 },
    CPI: { name: "CPI", votes: 876 },
    NPP: { name: "NPP", votes: 987 },
    Other: { name: "Other", votes: 876 },
  },
  {
    locality: "Maharashtra",
    BJP: { name: "BJP", votes: 345 },
    INC: { name: "INC", votes: 234 },
    AAP: { name: "AAP", votes: 123 },
    BSP: { name: "BSP", votes: 567 },
    CPI: { name: "CPI", votes: 678 },
    NPP: { name: "NPP", votes: 789 },
    Other: { name: "Other", votes: 890 },
  },
  {
    locality: "Maharashtra",
    BJP: { name: "BJP", votes: 345 },
    INC: { name: "INC", votes: 234 },
    AAP: { name: "AAP", votes: 123 },
    BSP: { name: "BSP", votes: 567 },
    CPI: { name: "CPI", votes: 678 },
    NPP: { name: "NPP", votes: 789 },
    Other: { name: "Other", votes: 890 },
  },
];

export default partiesVotes;

export function generateRandomVotes() {
  return partiesVotes.map((item) => ({
    ...item,
    BJP: {
      name: item.BJP.name,
      votes: item.BJP.votes + Math.floor(Math.random() * 10),
    },
    INC: {
      name: item.INC.name,
      votes: item.INC.votes + Math.floor(Math.random() * 10),
    },
    AAP: {
      name: item.AAP.name,
      votes: item.AAP.votes + Math.floor(Math.random() * 10),
    },
    BSP: {
      name: item.BSP.name,
      votes: item.BSP.votes + Math.floor(Math.random() * 10),
    },
    CPI: {
      name: item.CPI.name,
      votes: item.CPI.votes + Math.floor(Math.random() * 10),
    },
    NPP: {
      name: item.NPP.name,
      votes: item.NPP.votes + Math.floor(Math.random() * 10),
    },
    Other: {
      name: item.Other.name,
      votes: item.Other.votes + Math.floor(Math.random() * 10),
    },
  }));
}
