import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import "./Diagram.css";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Number of Comics Bar Chart",
    },
  },
};

const Diagram = (props) => {
  const labels = props.list.map((character) => character["name"]);
  const values = props.list.map(
    (character) => character["comics"]["available"]
  );
  const data = {
    labels,
    datasets: [
      {
        label: "Characters",
        data: values.map((value) => value),
        backgroundColor: "rgba(6, 6, 186, 0.7)",
      },
    ],
  };

  return (
    <div className="Diagram">
      <div className="Bar">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Diagram;
