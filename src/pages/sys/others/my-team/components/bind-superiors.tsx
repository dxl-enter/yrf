import { Button, Card, Input, Typography } from "antd";
import { useState } from "react";

export default function BindSuperiors() {
	const [value] = useState();
	return (
		<div className="m-4">
			<Card className="flex-col">
				<header className="self-start">
					<Typography.Title level={5}>上级地址</Typography.Title>
				</header>
				<div className="mt-4">
					<Input value={value} placeholder="请输入上级地址" />
					<Button block type="primary" className="mt-4 shadow__btn">
						立即绑定
					</Button>
				</div>
			</Card>
		</div>
	);
}
