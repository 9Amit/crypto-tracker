// import React, { useEffect } from 'react'
// import { Chart } from "react-google-charts";

// function LineChart(historicalData) {

//     const[data,setData]=useState([["Data","Prices"]])
 
//     useEffect(() => {
//         let dataCopy = [["Date", "Prices"]];
//         if (historicalData.prices) {
//             historicalData.prices.map((item) => {
//                 dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
//             })
//             setData(dataCopy);
//         }
//     },[historicalData])

//   return (
//       <Chart
//           chartType='LineChart'
//           data={data}
//           height="100%"
//           legendToggle
//       />
//   )
// }

// export default LineChart

import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

function LineChart({ historicalData }) {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData?.prices) {
      historicalData.prices.forEach((item) => {
        dataCopy.push([
          new Date(item[0]).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          item[1],
        ]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={{
        title: "Price History",
        hAxis: { title: "Date" },
        vAxis: { title: "Price" },
        legend: "none",
      }}
    />
  );
}

export default LineChart;

