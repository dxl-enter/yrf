import { Button, Card, Col, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";
import AnalysisData from "@/pages/sys/others/my-wallet/components/analysis-data";
import { useNavigate } from "react-router";
import PageTitle from "@/components/page-title";

export default function MyTeamData() {
	const navigatge = useNavigate();
	const recordWithdrawal = () => {
		navigatge("/my_team_record");
	};
	return (
		<Card className="flex-col">
			<header className="self-start flex items-center justify-between">
				<PageTitle>我的团队</PageTitle>
				<Button
					type="link"
					ghost
					icon={<RightOutlined />}
					iconPosition="end"
					onClick={recordWithdrawal}
				>
					收益记录
				</Button>
			</header>
			<section className="w-full mt-4">
				<Row gutter={[16, 16]} justify="center">
					<Col lg={8} md={8} span={8}>
						<AnalysisData title="714USDT" subtitle="总投资" />
					</Col>
					<Col lg={8} md={8} span={8}>
						<AnalysisData title="1.35CSC" subtitle="总收益" />
					</Col>
					<Col lg={8} md={8} span={8}>
						<AnalysisData title="1.72CSC" subtitle="今日总释放" />
					</Col>
					<Col lg={8} md={8} span={8}>
						<AnalysisData title="714USDT" subtitle="总投资" />
					</Col>
					<Col lg={8} md={8} span={8}>
						<AnalysisData title="1.35CSC" subtitle="总收益" />
					</Col>
					<Col lg={8} md={8} span={8}>
						<AnalysisData title="1.72CSC" subtitle="今日总释放" />
					</Col>
				</Row>
			</section>
		</Card>
	);
}
