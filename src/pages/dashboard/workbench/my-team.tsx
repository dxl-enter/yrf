import { Row, Col, Card, Button } from "antd";
import AnalysisTeam from "./analysis-team";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import PageTitle from "@/components/page-title";

export default function MyTeam() {
	const navigatge = useNavigate();
	const goMyTeam = () => {
		navigatge("/my_team");
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
					onClick={goMyTeam}
				>
					团队明细
				</Button>
			</header>
			<Row gutter={[16, 16]} justify="center" className="mt-4">
				<Col lg={6} md={6} span={6}>
					<AnalysisTeam title="714k" subtitle="直推地址" />
				</Col>
				<Col lg={6} md={6} span={6}>
					<AnalysisTeam title="1.35m" subtitle="有效地址" />
				</Col>
				<Col lg={6} md={6} span={6}>
					<AnalysisTeam title="1.72m" subtitle="团队收益" />
				</Col>
				<Col lg={6} md={6} span={6}>
					<AnalysisTeam title="234" subtitle="我的收益" />
				</Col>
			</Row>
		</Card>
	);
}
