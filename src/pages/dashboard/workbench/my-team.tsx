import {Row, Col, Typography, Card} from "antd";
import AnalysisTeam from "./analysis-team";

export default function MyTeam() {
    return (
        <Card className="flex-col">
            <header className="self-start">
                <Typography.Title level={5}>我的团队</Typography.Title>
            </header>
            <Row gutter={[16, 16]} justify="center">
                <Col lg={6} md={6} span={6}>
                    <AnalysisTeam
                        title="714k"
                        subtitle="直推地址"
                    />
                </Col>
                <Col lg={6} md={6} span={6}>
                    <AnalysisTeam
                        title="1.35m"
                        subtitle="有效地址"
                    />
                </Col>
                <Col lg={6} md={6} span={6}>
                    <AnalysisTeam
                        title="1.72m"
                        subtitle="团队收益"
                    />
                </Col>
                <Col lg={6} md={6} span={6}>
                    <AnalysisTeam
                        title="234"
                        subtitle="我的收益"
                    />
                </Col>
            </Row>
        </Card>
    );
}
