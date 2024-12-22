import {Button, Card, Col, Row, Typography} from "antd";
import AnalysisData from "@/pages/sys/others/my-wallet/components/analysis-data";
import {useNavigate} from "react-router";
import {useThemeToken} from "@/theme/hooks";
import AnalysisCard from "@/pages/sys/others/my-team/components/analysis-card";
import Color from "color";

export default function MyTeamTool() {
    const navigatge = useNavigate();
    const theme = useThemeToken();
    const recordWithdrawal = () => {
        navigatge('/withdrawal_record');
    };
    return (
        <Card className="flex-col">
            <header className="self-start">
                <Typography.Title level={5}>我的工具</Typography.Title>
            </header>
            <section className="w-full mt-4">
                <Row gutter={[16, 16]} justify="center">
                    <Col lg={6} md={6} span={6}>
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
                    <Col lg={6} md={6} span={6}>
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
                    <Col lg={6} md={6} span={6}>
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
    )
}
