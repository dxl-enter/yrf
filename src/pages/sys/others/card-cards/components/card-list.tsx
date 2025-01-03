import {Card} from "antd";
import {useNavigate} from "react-router";
const { Meta } = Card;
export default function CardList() {
    const navigatge = useNavigate();
    const goCardDetails = () => {
        navigatge('/card_details');
    };
    return (
        <div className="w-full">
            {new Array(4).fill("").map((_) => (
                <Card
                    key={_}
                    style={{
                        marginBottom: "26px",
                        boxShadow: `0 0 5px #30CFD0`
                    }}
                    hoverable
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <div onClick={goCardDetails}>查看详情</div>
                    ]}
                >
                    <Meta title="原创卡牌（30/30）" description="www.instagram.com" />
                </Card>
            ))}
        </div>
    )
}
