import {Col, Row} from "antd";
import MyTeamData from "./components/my-team-data";
import MyTeamTool from "./components/my-team-tool";
import MyTeamPush from "./components/my-team-push";

export default function MyTeam() {
    return (
        <div className="p-2">
            <Row gutter={[16, 16]} className="mt-4" justify="center">
                <Col span={24} md={24}>
                    <MyTeamData />
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="mt-4" justify="center">
                <Col span={24} md={24}>
                    <MyTeamTool />
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="mt-4" justify="center">
                <Col span={24} md={24}>
                    <MyTeamPush />
                </Col>
            </Row>
        </div>
    )
}
