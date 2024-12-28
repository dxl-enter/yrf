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
	const cardOperations = [
		{ subtitle: '直推地址', title: '714k' },
		{ subtitle: '有效地址', title: '1.35m' },
		{ subtitle: '团队收益', title: '1.72m' },
		{ subtitle: '我的收益', title: '234' },
	];
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

			<Row gutter={[16, 16]} justify="center">
				<Col span={24} md={24}>
					<AnalysisTeam operations={cardOperations} />
				</Col>
			</Row>
		
		</Card>
	);
}
