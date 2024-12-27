import Chart from "@/components/chart/chart";
import useChart from "@/components/chart/useChart";
import { HeartTwoTone } from '@ant-design/icons';
import {Card, Col, Row, Typography} from "antd";
import {useThemeToken} from "@/theme/hooks";

const series = [44, 55, 67, 83];

export default function ChartRadial() {
    const { colorPrimary } = useThemeToken();
    const chartOptions = useChart({
        chart: {
            type: 'radialBar'
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249
                        }
                    }
                },
                track: {
                    background: '#1d3a54',
                    strokeWidth: '90%',
                    margin: 2, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.5
                    }
                },
            }
        },
        legend: {
            show: false
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        colors: ['#1072fd', '#06c073', '#3dceff', '#16c8cd', '#f5be45']
    });

    return (
        <div className="flex flex-col gap-2 p-2">
            <header>
                <Typography.Title style={{ color: colorPrimary }} level={5}>CSC代币统计</Typography.Title>
            </header>
            <Row gutter={[0, 0]} className="self-start" justify="center" align="center">
                <Col span={14}>
                    <Chart
                        type="radialBar"
                        series={series}
                        options={chartOptions}
                        width={200}
                        height={200}
                    />
                </Col>
                <Col span={10}>
                    <main className="grid grid-cols-2 h-full gap-x-4 mx-auto">
                        {
                            chartOptions.colors.map((color, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <span><HeartTwoTone twoToneColor={color} />流量池</span>
                                    <span>0</span>
                                </div>
                            ))
                        }
                    </main>
                </Col>
            </Row>
        </div>
    );
}
