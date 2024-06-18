import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
  

const ChartComponent = () => {    
    const [chartData, setChartData] = useState({});

      useEffect(()=>{

       setChartData({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'July', 'Aug']
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      })
      }, [])
    return (
        <>
            <h1>hello</h1>
            <div>

        {chartData.options && chartData.series ? (
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              width="500"
            />
        ): (
            <p>Loading...</p>
          )}
    
            </div>
        </>
    );

}
export default ChartComponent;
