
import React from "react";
import {Card} from "antd";
import Color from "color";
import {useThemeToken} from "@/theme/hooks";
const { Meta } = Card;
export default function CardList() {
    const theme = useThemeToken();
    return (
        <div className="w-full">
            {new Array(4).fill("").map((_) => (
                <Card
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
                        "查看详情"
                    ]}
                >
                    <Meta title="原创卡牌（30/30）" description="www.instagram.com" />
                </Card>
            ))}
        </div>
    )
}
