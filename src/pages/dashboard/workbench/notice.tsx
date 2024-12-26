import {Row, Col, Carousel, Card, Image, Typography, Button, Flex} from "antd";
import {NotificationOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router";

export default function Notice() {
    const navigatge = useNavigate();
    const onCasting = () => {
        navigatge('/casting');
    };
    const onBlindBox = () => {
        navigatge('/blind_box');
    };
    const onMore = () => {
        navigatge('/index-more');
    };
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
            <Row gutter={[16, 16]} type="flex" justify="space-between" className="mt-4">
                <Col span={12} md={12}>
                    <div className="card" style={{height: '100%'}}>
                        <header className="self-start">
                            <Typography.Title level={5}>LP流量池铸造</Typography.Title>
                        </header>
                        <section className="self-start">
                            <p>今日铸造额度剩余</p>
                            <p>500 USDT</p>
                            <Button type="primary" className="mt-4 shadow__btn-green" onClick={onCasting}>参与铸造</Button>
                        </section>
                    </div>
                </Col>
                <Col span={12} md={12}>
                    <Image
                        width="100%"
                        height="100px"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        onClick={onBlindBox}
                    />
                    <Image
                        width="100%"
                        height="100px"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        onClick={onMore}
                    />
                </Col>
            </Row>
        </Card>
    );
}
