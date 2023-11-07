
import './MainPageSecondLayer.css'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

import {Bar} from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend )



const MainPageSecondLayer = () => {

  const data = {


    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
    datasets: [
      {
        label: "First dataset",
        data: [0, 10, 30, 60, 80, 20, 20, 20, 20 ,20 ,80 ,20],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        // borderColor: ["#03A9F5", "orange"],
        borderWidth: 0.1,
      },
    ],
  };
  return (
    <div className="main_page_second_layer">
      <div className="main_page_second_layer_left">
        <div className="main_page_second_layer_left_chart_container">
          <div className="chart_container_left_top">
            <div>Sales Analytics</div>
            <div>June</div>
          </div>
          <div className="chart_container_left_bottom">
            <div className="bar_chart">
              <Bar data={data}></Bar>
            </div>
          </div>
        </div>
      </div>
      <div className="main_page_second_layer_right"></div>

     
    </div>
  );
}

export default MainPageSecondLayer