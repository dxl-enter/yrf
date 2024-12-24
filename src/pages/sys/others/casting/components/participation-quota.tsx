import {Button, Card, Col, Row, Typography} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";
import CastingPeogressItem from "@/pages/sys/others/casting/components/casting-peogress-item";

export default function ParticipationQuota() {
    return (
        <div className="w-full p-4">
            <Row justify="space-between">
                <Col span={7}>
                    <div className="card text-center">
                        <p className="text-l font-bold">今日释放</p>
                        <p className="text-sm">1.35m</p>
                    </div>
                </Col>
                <Col span={7}>
                    <div className="card text-center">
                        <p className="text-l font-bold">今日释放</p>
                        <p className="text-sm">1.35m</p>
                    </div>
                </Col>
                <Col span={7}>
                    <div className="card text-center">
                        <p className="text-l font-bold">今日释放</p>
                        <p className="text-sm">1.35m</p>
                    </div>
                </Col>
            </Row>
            <section className="mt-6">
                <header className="self-start flex items-center justify-between">
                    <Typography.Title level={5}>2024-12-24 11:44</Typography.Title>
                    <Button type="link" ghost icon={<QuestionCircleOutlined />}>
                        铸造中
                    </Button>
                </header>
                {new Array(6).fill("").map((_) => (
                    <div key={_}>
                        <CastingPeogressItem />
                    </div>
                ))}
            </section>
        </div>
    )
}
