import Chart from "@/components/chart/chart";
import useChart from "@/components/chart/useChart";
import { fNumber } from "@/utils/format-number";
import {Card, Typography} from "antd";
import {useThemeToken} from "@/theme/hooks";

const series = [44, 55];
export default function ChartRadial() {
    const { colorPrimary } = useThemeToken();
    const chartOptions = useChart({
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        labels: ["Apples", "Oranges"],
        legend: {
            floating: true,
            position: "right",
            horizontalAlign: "center",
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: "68%",
                },
                dataLabels: {
                    value: {
                        offsetY: 16,
                    },
                    total: {
                        formatter: () => fNumber(2324),
                    },
                },
            },
        },
    });

    return (
        <Card>
            <header className="self-start">
                <Typography.Title style={{ color: colorPrimary }} level={5}>CSC代币统计</Typography.Title>
            </header>
            <Chart
                type="radialBar"
                series={series}
                options={chartOptions}
                height={260}
            />
        </Card>
    );
}
