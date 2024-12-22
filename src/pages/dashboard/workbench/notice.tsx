import {Row, Col, Carousel, Card} from "antd";
import {NotificationOutlined} from "@ant-design/icons";

export default function Notice() {
    return (
        <Card className="flex-col">
            <Row gutter={[16, 16]} className="w-full" justify="center">
                <Col span={2} md={2}>
                    <NotificationOutlined  />
                </Col>
                <Col span={22} md={22} className="w-full">
                    <Carousel autoplay>
                        <div>
                            <h3 style={{ color: '#fff' }}>公告 1</h3>
                        </div>
                        <div>
                            <h3 style={{ color: '#fff' }}>公告 2</h3>
                        </div>
                        <div>
                            <h3 style={{ color: '#fff' }}>公告 3</h3>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </Card>
    );
}
