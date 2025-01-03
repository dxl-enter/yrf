import Chart from "@/components/chart/chart";
import useChart from "@/components/chart/useChart";
import { HeartTwoTone } from "@ant-design/icons";
import { Col, Row } from "antd";
import PageTitle from "@/components/page-title";

const series = [44, 55, 67, 83];

export default function ChartRadial() {
	const chartOptions: any = useChart({
		chart: {
			type: "radialBar",
		},
		plotOptions: {
			radialBar: {
				dataLabels: {
					name: {
						fontSize: "22px",
					},
					value: {
						fontSize: "16px",
					},
					total: {
						show: true,
						label: "Total"
					},
				},
				track: {
					background: "#1d3a54",
					strokeWidth: "90%",
					margin: 2, // margin is in pixels
					dropShadow: {
						enabled: true,
						top: 0,
						left: 0,
						blur: 3,
						opacity: 0.5,
					},
				},
			},
		},
		legend: {
			show: false,
		},
		labels: ["Apples", "Oranges", "Bananas", "Berries"],
		colors: ["#1072fd", "#06c073", "#3dceff", "#16c8cd", "#f5be45"],
	});

	return (
		<div className="flex flex-col gap-2 p-2">
			<header>
				<PageTitle>CSC代币统计</PageTitle>
			</header>
			<Row
				gutter={[0, 0]}
				className="self-start w-full"
				justify="space-between"
			>
				<Col span={15}>
					<Chart
						type="radialBar"
						series={series}
						options={chartOptions}
						width={240}
						height={240}
					/>
				</Col>
				<Col span={9}>
					<main className="grid grid-cols-2 h-full gap-x-4 mx-auto">
						{chartOptions.colors.map((color: string, index: number) => (
							<div key={index} className="flex flex-col items-center">
								<span>
									<HeartTwoTone twoToneColor={color} />
									流量池
								</span>
								<span>0</span>
							</div>
						))}
					</main>
				</Col>
			</Row>
		</div>
	);
}
