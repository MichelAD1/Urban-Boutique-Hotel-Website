import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: true,
		},
		title: {
			display: true,
			text: "Sales revenue",
		},
	},
};

const labels = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const omtRevenue = [
	5000, 6000, 3000, 4000, 11500, 25000, 31000, 20000, 14000, 50000, 75000,
	60000,
];
const wishMoneyRevenue = [
	5000, 6000, 3000, 4000, 11500, 25000, 31000, 20000, 14000, 50000, 75000,
	60000,
];

const westerUnionRevenue = [
	5000, 6000, 3000, 4000, 11500, 25000, 31000, 20000, 14000, 50000, 75000,
	60000,
];

export const data = {
	labels,
	datasets: [
		{
			label: "OMT",
			data: omtRevenue,
			borderColor: "rgba(249,226,70,255)",
			backgroundColor: "rgba(249,226,70,255)",
		},
		{
			label: "Wish Money",
			data: wishMoneyRevenue,
			borderColor: "rgba(89,185,233,255)",
			backgroundColor: "rgba(89,185,233,255)",
		},
		{
			label: "Western Union",
			data: westerUnionRevenue,
			borderColor: "rgb(152,191,211)",
			backgroundColor: "rgb(152,191,211)",
		},
	],
};

const BarChart = () => {
	return <Line width={100} height={30} options={options} data={data} />;
};

export default BarChart;
