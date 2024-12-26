import { Button, Card, Input, QRCode, Typography } from "antd";
import { useCopyToClipboard } from "@/hooks/event/use-copy-to-clipboard";
import { useState } from "react";

export default function InvitationCode() {
	const { copyFn } = useCopyToClipboard();
	const [value] = useState("https://www.npmjs.com/package/");
	return (
		<div className="m-4">
			<Card className="flex-col">
				<header className="self-start">
					<Typography.Title level={5}>邀请好友</Typography.Title>
				</header>
				<div className="mt-4">
					<Input value={value} disabled />
					<Button
						block
						type="primary"
						className="mt-4 shadow__btn"
						onClick={() => copyFn(value)}
					>
						复制邀请链接
					</Button>
				</div>
			</Card>
			<Card className="flex-col" style={{ marginTop: 16 }}>
				<header className="self-start">
					<Typography.Title level={5}>保存二维码</Typography.Title>
				</header>
				<div className="flex w-full flex-col items-center justify-center">
					<QRCode value="https://ant.design/" size={200} />
					<Button
						block
						type="primary"
						className="mt-4 shadow__btn"
						onClick={() => copyFn(value)}
					>
						保存二维码到相册
					</Button>
				</div>
			</Card>
		</div>
	);
}
