import {Typography, Card} from "antd";

export default function ChainInformation() {
    return (
        <Card className="flex-col box-shadow-inset-green">
            <header className="self-start gallery-text">
                <Typography.Title level={5}>链上信息</Typography.Title>
            </header>
            <section>
                <p>卡牌名称：原创卡牌</p>
                <p>链上表示：25fadsfaf33432143tg34111</p>
                <p>上链时间：2022-11-01  12:00:26</p>
            </section>
        </Card>
    );
}
