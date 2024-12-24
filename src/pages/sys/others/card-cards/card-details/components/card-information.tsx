import {Typography, Card, Image} from "antd";
import React from "react";

export default function CardInformation() {
    return (
        <Card className="flex-col w-full shadow__btn">
            <header className="self-start">
                <Typography.Title level={5}>卡牌信息</Typography.Title>
            </header>
            <Image
                width="100%"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        </Card>
    );
}
