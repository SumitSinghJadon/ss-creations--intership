import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import data from "./data";

const ChartStudent=()=>{

    const [chartData, setChartData] = useState({});


    useEffect(() => {
        if (Object.keys(data).length > 0) {
            const percentages = data.map(student => student.percentage);
            const names = data.map(student => student.name);
          

            setChartData({
                options: {
                
                    xaxis: {
                        categories: names
                    }
                },
                series: [
                    {
                        name: "series-1",
                        data: percentages
                    }
                ]
                
            });
        }
    }, [data]);
  

    return(
        <>
              <div>

{chartData.options && chartData.series ? (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      width="1000"
    />
): (
    <p>Loading...</p>
  )}

    </div>
        </>
    );

}

export default ChartStudent