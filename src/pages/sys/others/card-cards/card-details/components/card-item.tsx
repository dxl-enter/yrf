import {Card} from "antd";
const { Meta } = Card;
export default function CardItem() {
    return (
        <div className="w-full">
            <Card
                className="shadow__btn-green"
                hoverable
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
            >
                <Meta title="原创卡牌（30/30）" description="www.instagram.com" />
            </Card>
        </div>
    )
}
