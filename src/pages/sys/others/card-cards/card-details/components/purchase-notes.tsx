import {Typography, Card} from "antd";
import React from "react";
import {useThemeToken} from "@/theme/hooks";

export default function PurchaseNotes() {
    const { colorPrimary } = useThemeToken();
    return (
        <Card className="flex-col w-full">
            <header className="self-start">
                <Typography.Title level={5} style={{ color: colorPrimary }}>购买须知</Typography.Title>
            </header>
            <p style={{
                lineHeight: '24px',
                textIndent: '2em'
            }}>
                数字藏品为虚拟数字商品，坚决反对一切形式的数字藏品炒作，坚决抵制任何形式的以数字藏品为名，实为虚拟货币相关活动的违法违规行为；坚决抵制任何形式的数字藏品商品价格恶意炒作，用技术手段确保商品价格反映市场合理需求；坚决抵制任何形式将数字藏品进行权益类交易、标准化合约交易等违法违规行为，反对数字藏品金融产品化。
            </p>
        </Card>
    );
}
