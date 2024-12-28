import { Card, Col, Row } from "antd";
import { useThemeToken } from "@/theme/hooks";
import AnalysisCard from "@/pages/sys/others/my-team/components/analysis-card";
import Color from "color";
import { useNavigate } from "react-router";
import PageTitle from "@/components/page-title";

export default function MyTeamTool() {
	const theme = useThemeToken();
	const navigatge = useNavigate();
	const onInvitationCode = () => {
		navigatge("/invitation_code");
	};
	const onBindSuperiors = () => {
		navigatge("/bind_superiors");
	};
	const onPerformanceInquiry = () => {
		navigatge("/performance_inquiry");
	};
	return (
		<Card className="flex-col">
			<header className="self-start">
				<PageTitle>我的工具</PageTitle>
			</header>
			<section className="w-full mt-4">
				<Row gutter={[16, 16]} justify="center">
					<Col lg={6} md={6} span={6} onClick={onInvitationCode}>
						<AnalysisCard
							subtitle="邀请码"
							style={{
								color: theme.colorPrimaryTextActive,
								background: `linear-gradient(135deg, ${Color(
									theme.colorPrimaryActive,
								)
									.alpha(0.2)
									.toString()}, ${Color(theme.colorPrimary)
									.alpha(0.2)
									.toString()}) rgb(255, 255, 255)`,
							}}
						/>
					</Col>
					<Col lg={6} md={6} span={6} onClick={onBindSuperiors}>
						<AnalysisCard
							subtitle="绑定上级"
							style={{
								color: theme.colorInfoTextActive,
								background: `linear-gradient(135deg, ${Color(
									theme.colorInfoActive,
								)
									.alpha(0.2)
									.toString()}, ${Color(theme.colorInfo).alpha(0.2).toString()}) rgb(255, 255, 255)`,
							}}
						/>
					</Col>
					<Col lg={6} md={6} span={6} onClick={onPerformanceInquiry}>
						<AnalysisCard
							subtitle="业务查询"
							style={{
								color: theme.colorWarningTextActive,
								background: `linear-gradient(135deg, ${Color(
									theme.colorWarningActive,
								)
									.alpha(0.2)
									.toString()}, ${Color(theme.colorWarning)
									.alpha(0.2)
									.toString()}) rgb(255, 255, 255)`,
							}}
						/>
					</Col>
					<Col lg={6} md={6} span={6}>
						<AnalysisCard
							subtitle="更多工具"
							style={{
								color: theme.colorErrorTextActive,
								background: `linear-gradient(135deg, ${Color(
									theme.colorErrorActive,
								)
									.alpha(0.2)
									.toString()}, ${Color(theme.colorError).alpha(0.2).toString()}) rgb(255, 255, 255)`,
							}}
						/>
					</Col>
				</Row>
			</section>
		</Card>
	);
}
