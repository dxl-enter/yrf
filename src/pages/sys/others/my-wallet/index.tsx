import {Col, Row} from "antd";
import BlindWallet from "./components/blind-wallet";
import MyData from "./components/my-data";
import CastingWallet from "@/pages/sys/others/my-wallet/components/casting-wallet";

export default function MyWallet() {
    return (
        <div className="p-2">
            <Row gutter={[16, 16]} className="mt-4" justify="center">
                <Col span={24} md={24}>
                    <BlindWallet />
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="mt-4" justify="center">
                <Col span={24} md={24}>
                    <CastingWallet />
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="mt-4" justify="center">
                <Col span={24} md={24}>
                    <MyData />
                </Col>
            </Row>
        </div>
    )
}
