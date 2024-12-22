import { Row, Col, Card } from "antd";
import RevenueItem from "./revenue-item";

export default function RevenueStatistics() {
	return (
		<Card className="flex-col">
			<Row gutter={[16, 16]} justify="center">
				<Col lg={6} md={6} span={6}>
					<RevenueItem title="714k" subtitle="参与额度" />
				</Col>
				<Col lg={6} md={6} span={6}>
					<RevenueItem title="1.35m" subtitle="今日释放" />
				</Col>
				<Col lg={6} md={6} span={6}>
					<RevenueItem title="1.72m" subtitle="累计收益" />
				</Col>
				<Col lg={6} md={6} span={6}>
					<RevenueItem title="234" subtitle="可提代币" />
				</Col>
			</Row>
		</Card>
	);
}
