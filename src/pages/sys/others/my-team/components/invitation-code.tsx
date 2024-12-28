import { Button, Card, Input, QRCode } from "antd";
import { useCopyToClipboard } from "@/hooks/event/use-copy-to-clipboard";
import { useState } from "react";
import PageTitle from "@/components/page-title";

export default function InvitationCode() {
	const { copyFn } = useCopyToClipboard();
	const [value] = useState("https://www.npmjs.com/package/");
	return (
		<div className="m-4">
			<Card className="flex-col">
				<header className="self-start">
					<PageTitle>邀请好友</PageTitle>
				</header>
				<div className="mt-4">
					<Input value={value} disabled />
					<Button
						block
						type="primary"
						className="mt-4"
						ghost
						shape="round"
						onClick={() => copyFn(value)}
					>
						复制邀请链接
					</Button>
				</div>
			</Card>
			<Card className="flex-col" style={{ marginTop: 16 }}>
				<header className="self-start">
					<PageTitle>保存二维码</PageTitle>
				</header>
				<div className="flex w-full flex-col items-center justify-center">
					<QRCode value="https://ant.design/" size={200} />
					<Button
						block
						type="primary"
						className="mt-4"
						ghost
						shape="round"
						onClick={() => copyFn(value)}
					>
						保存二维码到相册
					</Button>
				</div>
			</Card>
		</div>
	);
}
