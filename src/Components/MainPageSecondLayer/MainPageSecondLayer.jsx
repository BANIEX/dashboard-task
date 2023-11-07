
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
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "",
        data: [60, 10, 30, 60, 80, 20, 20, 20, 20, 20, 80, 20],
        fill: true,
        backgroundColor: "rgb(236, 178, 70)",
        borderColor: "rgba(75,192,192,1)",
        // borderColor: ["#03A9F5", "orange"],
        borderWidth: 0.1,
      },
    ],
  };

  const options = {
    barPercentage: 0.1,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
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
              <Bar data={data} options={options}></Bar>
            </div>
          </div>
        </div>
      </div>
      <div className="main_page_second_layer_right">
        <div className="main_page_second_layer_right_subcontainer">
          <div className="main_page_second_top">
            <div className="total_add_spend">Total Ad spend</div>
            <div className="under_total_add_spend">
              <div className="under_total_add_spend_left">
                <div className="this_month">This month:</div>
                <div className="this_month_money">185,700</div>
              </div>
              <div className="under_total_add_spend_right">
                <span className="percent">4.8%</span>
                <span className="from_yesterday"> from last month</span>
              </div>
            </div>
          </div>
          
          <div className="main_page_second_bottom">
            <div className="top_selling_product">Top Selling Products</div>
            <div className="under_top_selling_product">
              <div className="under_top_selling_product_left">
                Luxury female handbag
              </div>
              <div className="under_top_selling_product_right">
                23 units sold
              </div>
            </div>
            <div className="under_top_selling_product">
              <div className="under_top_selling_product_left">
                Luxury female handbag
              </div>
              <div className="under_top_selling_product_right">
                23 units sold
              </div>
            </div>
            <div className="under_top_selling_product">
              <div className="under_top_selling_product_left">
                Luxury female handbag
              </div>
              <div className="under_top_selling_product_right">
                23 units sold
              </div>
            </div>
            <div className="under_top_selling_product">
              <div className="under_top_selling_product_left">
                Luxury female handbag
              </div>
              <div className="under_top_selling_product_right">
                23 units sold
              </div>
            </div>
          </div>
        </div>
        <div className='line_divider'></div>
      </div>
    </div>
  );
}

export default MainPageSecondLayer