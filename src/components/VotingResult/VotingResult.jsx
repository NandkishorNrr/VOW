import React, { useState, useEffect } from "react";
import dummyData, { generateRandomVotes } from "../../data/dummyData";

export default function Home() {
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRandomVotes());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const totalVotes = (party) => {
    let total = 0;
    for (let key in party) {
      total += party[key].votes;
    }
    return total;
  };

  return (
    <div id="root" className="app">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex justify-center">
            <div className="bg-orange-400 p-3 rounded-lg md:flex md:justify-between table-container">
              <div className="overflow-auto">
                <div className="overflow-y-auto max-h-[400px]">
                  <table className="w-full rounded-lgborder-collapse border border-gray-700">
                    <thead className="sticky top-0 bg-orange-200 rounded-lg">
                      <tr>
                        <th className="px-6 py-3 border border-gray-700">
                          S.No.
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          Locality
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="src/images/BJP_Flag.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          BJP
                          <br />({totalVotes(data.map((item) => item.BJP))})
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="src/images/INC_Flag.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          INC
                          <br />({totalVotes(data.map((item) => item.INC))})
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="src/images/AAP_Flag.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          AAP
                          <br />({totalVotes(data.map((item) => item.AAP))})
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="src/images/BSP_Flag.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          BSP
                          <br />({totalVotes(data.map((item) => item.BSP))})
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="src/images/CPI_Flag.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          CPI
                          <br />({totalVotes(data.map((item) => item.CPI))})
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="src/images/NPP_Flag.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          NPP
                          <br />({totalVotes(data.map((item) => item.NPP))})
                        </th>
                        <th className="px-6 py-3 border border-gray-700">
                          <img
                            src="src/images/Total_Votes.svg"
                            className="mr-3 h-8"
                            alt="Logo"
                          />
                          Total Votes
                          <br />(
                          {data.reduce((acc, cur) => acc + totalVotes(cur), 0)})
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm font-medium text-gray-700">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm font-medium text-gray-700">
                            {item.locality}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {item.BJP.votes}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {item.INC.votes}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {item.AAP.votes}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {item.BSP.votes}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {item.CPI.votes}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {item.NPP.votes}
                          </td>
                          <td className="px-6 py-4 border border-gray-700 whitespace-nowrap text-sm text-gray-300">
                            {totalVotes(item)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" /> */}
        </div>
      </div>
    </div>
  );
}
