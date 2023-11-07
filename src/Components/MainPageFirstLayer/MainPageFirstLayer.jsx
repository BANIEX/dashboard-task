import { Line } from "react-chartjs-2";
import "./MainPageFirstLayer.css"
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Filler} from "chart.js"



ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler )
const MainPageFirstLayer = () => {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [0, 10, 30, 60, 80, 20],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        // borderColor: ["#03A9F5", "orange"],
        tension: 0.4,
        pointStyle: "hidden"
      },
    ],
  };

 const options = {
  radius: 0,
  elements: {
    point: {
      radius: 0,
    }
  },
  scales: {
    x: {
      grid: {
        display: false      
      }
    },
    y: {
      grid: {
        display: false      
      }
    }
  }
}

const CHARTOPTIONS = {
  radius: 0,
  // elements: {
  //   point: {
  //     radius: 0,
  //   },
  // },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },

  // Modify the axis by adding scales
  scales: {
    // to remove the labels
    x: {
      ticks: {
        display: false,
      },

      // to remove the x-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};





  return (
    <div className="main_page_first_layer">
      <div className="main_page_first_box_container">
        <div className="main_page_first_box">
          <div className="main_page_first_box_left">
            <div className="total_sales_text">Total Sales</div>
            <div className="total_sales_amount">185,700</div>
            <div>
              <span className="percent">4.8%</span>
              <span className="from_yesterday"> from yesterday</span>
            </div>
          </div>
          <div className="main_page_first_box_right">
            <div className="main_page_line_chart">
              <Line data={data} options={CHARTOPTIONS}>
                skljdksn
              </Line>
            </div>
          </div>
        </div>
      </div>
      <div className="main_page_first_box_container">
        <div className="main_page_first_box">
          <div className="main_page_first_box_left">
            <div className="total_sales_text">Total Sales</div>
            <div className="total_sales_amount">185,700</div>
            <div>
              <span className="percent">4.8%</span>
              <span className="from_yesterday"> from yesterday</span>
            </div>
          </div>
          <div className="main_page_first_box_right">
            <div className="main_page_line_chart">
              <Line data={data} options={CHARTOPTIONS}>
                skljdksn
              </Line>
            </div>
          </div>
        </div>
      </div>
      <div className="main_page_first_box_container">
        <div className="main_page_first_box">
          <div className="main_page_first_box_left">
            <div className="total_sales_text">Total Sales</div>
            <div className="total_sales_amount">185,700</div>
            <div>
              <span className="percent">4.8%</span>
              <span className="from_yesterday"> from yesterday</span>
            </div>
          </div>
          <div className="main_page_first_box_right">
            <div className="main_page_line_chart">
              <Line data={data} options={CHARTOPTIONS}>
                skljdksn
              </Line>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="main_page_line_chart">
        <Line data={data} options={options}>
          skljdksn
        </Line>
      </div> */}
    </div>
  );
}

export default MainPageFirstLayer