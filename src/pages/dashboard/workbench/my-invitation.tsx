import { Button, Input, Card } from "antd";
import { useState } from "react";
import { useCopyToClipboard } from "@/hooks/event/use-copy-to-clipboard";
import PageTitle from "@/components/page-title";

export default function MyInvitation() {
	const { copyFn } = useCopyToClipboard();
	const [value] = useState("https://www.npmjs.com/package/");
	return (
		<Card className="flex-col">
			<header className="self-start">
				<PageTitle>我的邀请</PageTitle>
			</header>
			<div className="mt-4">
				<Input value={value} disabled />
				<Button
					type="primary"
					ghost
					className="mt-4"
					onClick={() => copyFn(value)}
				>
					复制邀请链接
				</Button>
			</div>
		</Card>
	);
}
