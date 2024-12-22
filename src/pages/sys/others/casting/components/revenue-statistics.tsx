import {Row, Col, Typography, Card, Divider} from "antd";
import RevenueItem from "./revenue-item";

export default function RevenueStatistics() {
    return (
        <Card className="flex-col">
            <Row gutter={[16, 16]} justify="center">
                <Col lg={5} md={5} span={5}>
                    <RevenueItem
                        title="714k"
                        subtitle="参与额度"
                    />
                </Col>
                <Col lg={1} md={1} span={1}>
                    <Divider type="vertical" style={{ height: '50px', borderColor: '#7cb305' }} />
                </Col>
                <Col lg={5} md={5} span={5}>
                    <RevenueItem
                        title="1.35m"
                        subtitle="今日释放"
                    />
                </Col>
                <Col lg={1} md={1} span={1}>
                    <Divider type="vertical" style={{ height: '50px', borderColor: '#7cb305' }} />
                </Col>
                <Col lg={5} md={5} span={5}>
                    <RevenueItem
                        title="1.72m"
                        subtitle="累计收益"
                    />
                </Col>
                <Col lg={1} md={1} span={1}>
                    <Divider type="vertical" style={{ height: '50px', borderColor: '#7cb305' }} />
                </Col>
                <Col lg={5} md={5} span={5}>
                    <RevenueItem
                        title="234"
                        subtitle="可提代币"
                    />
                </Col>
            </Row>
        </Card>
    );
}
