import {Typography, Button, Input, Card} from "antd";
import { useState } from "react";
import { useCopyToClipboard } from "@/hooks/event/use-copy-to-clipboard";

export default function MyInvitation() {
    const { copyFn } = useCopyToClipboard();
    const [value] = useState("https://www.npmjs.com/package/");
    return (
        <Card className="flex-col">
            <header className="self-start">
                <Typography.Title level={5}>我的邀请</Typography.Title>
            </header>
            <div className="mt-4">
                <Input value={value} disabled/>
                <Button type="primary" className="mt-4 shadow__btn" onClick={() => copyFn(value)}>复制邀请链接</Button>
            </div>
        </Card>
    );
}
