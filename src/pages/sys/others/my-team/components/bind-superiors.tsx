import { Button, Card, Input } from "antd";
import { useState } from "react";
import PageTitle from "@/components/page-title";

export default function BindSuperiors() {
	const [value] = useState();
	return (
		<div className="m-4">
			<Card className="flex-col">
				<header className="self-start">
					<PageTitle>上级地址</PageTitle>
				</header>
				<div className="mt-4">
					<Input value={value} placeholder="请输入上级地址" />
					<Button block type="primary" className="mt-4" ghost shape="round">
						立即绑定
					</Button>
				</div>
			</Card>
		</div>
	);
}
