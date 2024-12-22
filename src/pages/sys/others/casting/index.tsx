import {Col, Row} from "antd";
import CastingNumber from "./components/casting-number";
import RevenueStatistics from "./components/revenue-statistics";

export default function Casting() {
    return (
        <div className="p-2">
            <Row gutter={[16, 16]} className="mt-4" justify="center">
                <Col span={24} md={24} style={{padding: 0}}>
                    <CastingNumber />
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="mt-4" justify="center">
                <Col span={24} md={24}>
                    <RevenueStatistics />
                </Col>
            </Row>
        </div>
    )
}
