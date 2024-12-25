import { Row, Col, Card } from "antd";
import RevenueItem from "./revenue-item";
import {useNavigate} from "react-router";

export default function RevenueStatistics() {
	const navigatge = useNavigate();
	const onParticipationQuota = () => {
		navigatge('/participation_quota');
	};
	const recordWithdrawal = () => {
		navigatge('/my_wallet');
	};
	return (
		<Card className="flex-col">
			<Row gutter={[16, 16]} justify="center">
				<Col lg={6} md={6} span={6} onClick={onParticipationQuota}>
					<RevenueItem title="714k" subtitle="参与额度" />
				</Col>
				<Col lg={6} md={6} span={6} onClick={onParticipationQuota}>
					<RevenueItem title="1.35m" subtitle="今日释放" />
				</Col>
				<Col lg={6} md={6} span={6} onClick={onParticipationQuota}>
					<RevenueItem title="1.72m" subtitle="累计收益" />
				</Col>
				<Col lg={6} md={6} span={6} onClick={recordWithdrawal}>
					<RevenueItem title="234" subtitle="可提代币" />
				</Col>
			</Row>
		</Card>
	);
}
