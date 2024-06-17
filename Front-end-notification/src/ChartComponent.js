import {
    Chart,
    Colors,
    BarController,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend
  } from 'chart.js'

  import { Bar } from 'react-chartjs-2';
  
  Chart.register(
    Colors,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
  );
  
const ChartComponent = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56],
            },
        ],
    };

    return (
        <>
            <Bar
                data={data}
                options={{
                    title: {
                        display: true,
                        text: 'Monthly Sales',
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: 'top',
                    },
                }}
            />
        </>
    );
}
export default ChartComponent;
