import React, { useState, useEffect } from "react";

const DataMatch = ({ setTodayData }) => {
  const [data, setData] = useState([]);

  // Function to format the date as YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    // Generate the data when component mounts
    const today = new Date(); // Current date (today)
    const currentDate = formatDate(today); // Format today's date
    const tempData = [];

    for (let i = -10; i <= 4; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i); // Adjust the date by i days
      const formattedDate = formatDate(date); // Format the adjusted date

      tempData.push({
        date: formattedDate,
        ph: (Math.random() * 2 + 7).toFixed(2), // Random ph value between 7.0 and 9.0
        do: (Math.random() * 2 + 6).toFixed(2), // Random DO value between 6.0 and 8.0
        bod: (Math.random() * 3 + 2).toFixed(2), // Random BOD value between 2.0 and 5.0
        totalColiform: Math.floor(Math.random() * 1000), // Random total coliform value
      });
    }
    setData(tempData); // Set the data to state

    // Check if today's date matches any date in the data array and update values if needed
    const todayData = tempData.find((item) => item.date === currentDate);
    if (todayData && typeof setTodayData === "function") {
        
      // If today's data matches and setTodayData is a function, pass it to the parent component
      setTodayData(todayData);
    }
  }, [setTodayData]);

//   const determineClass = (todayData) => {
//     const { ph, do: dissolvedOxygen, bod, totaColiform } = todayData;
  
//     if (
//       ph >= 6.5 &&
//       ph <= 8.5 &&
//       dissolvedOxygen >= 6 &&
//       bod <= 2 &&
//       totaColiform <= 50
//     ) {
//       return "Class A";
//     } else if (
//       ph >= 6.5 &&
//       ph <= 8.5 &&
//       dissolvedOxygen >= 5 &&
//       bod <= 3 &&
//       totaColiform <= 500
//     ) {
//       return "Class B";
//     } else if (
//       ph >= 6 &&
//       ph <= 9 &&
//       dissolvedOxygen >= 4 &&
//       bod <= 3 &&
//       totaColiform <= 5000
//     ) {
//       return "Class C";
//     } else if (
//       ph >= 6.5 &&
//       ph <= 8.5 &&
//       dissolvedOxygen >= 4 &&
//       bod <= 3 &&
//       totaColiform <= 5000
//     ) {
//       return "Class D";
//     } else if (
//       ph >= 6 &&
//       ph <= 8.5 &&
//       dissolvedOxygen >= 4 &&
//       bod <= 3 &&
//       totaColiform <= 5000
//     ) {
//       return "Class E";
//     } else {
//       return "Unknown";
//     }
//   };
  

  return (
    <div>
      {/* Table commented out for now */}
      {/* Uncomment to display data */}
      {/* <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>PH</th>
            <th>DO</th>
            <th>BOD</th>
            <th>COLIFORM</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.ph}</td>
              <td>{item.do}</td>
              <td>{item.bod}</td>
              <td>{item.totalColiform}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default DataMatch;
