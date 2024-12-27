import {Typography, Card, Image} from "antd";
import React from "react";
import {useThemeToken} from "@/theme/hooks";

export default function CardInformation() {
    const { colorPrimary } = useThemeToken();
    return (
        <Card className="flex-col w-full">
            <header className="self-start">
                <Typography.Title level={5} style={{ color: colorPrimary }}>卡牌信息</Typography.Title>
            </header>
            <Image
                width="100%"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        </Card>
    );
}
