import {Row, Col, Typography, Button, Radio, Progress, ProgressProps, Table} from "antd";
import Card from "@/components/card";

export default function PresaleDetails() {
	const RadioStyle = {
		height: '60px',
		lineHeight: '60px'
	}
	const conicColors: ProgressProps['strokeColor'] = {
		'0%': '#EB22CB',
		'50%': '#ffe58f',
		'100%': '#30CFD0',
	};
	const dataSource = [
		{
			key: '1',
			date: '2024-12-25',
			address: '西湖区湖底公园1号',
		},
		{
			key: '2',
			date: '2024-12-25',
			address: '西湖区湖底公园1号',
		},
	];
	const columns = [
		{
			title: '地址',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: '日期',
			dataIndex: 'date',
			key: 'date',
		}
	];
	return (
		<div className="flex-col p-2">
			<Row gutter={[16, 16]} className="mt-4 w-full" justify="center">
				<Col span={24} md={24}>
					<Card className="flex-col ">
						<header className="self-start gallery-text">
							<Typography.Title level={5}>CSC代币预售</Typography.Title>
						</header>
						<main className="w-full mt-6">
							<Radio.Group className="box-shadow-green" block defaultValue="a" buttonStyle="solid">
								<Radio.Button style={RadioStyle} value="a">100USDT</Radio.Button>
								<Radio.Button style={RadioStyle} value="b">200USDT</Radio.Button>
							</Radio.Group>
							<Button className="mt-8 w-full shadow__btn" type="primary" shape="round">
								参与预售
							</Button>
						</main>
					</Card>
				</Col>
				<Col span={24} md={24} className="my-4 text-center">
					<Progress
						size={[240, 0]}
						strokeWidth={10}
						type="dashboard"
						strokeColor={conicColors}
						percent={75}
						format={(percent) => `${percent} Days`} />
				</Col>
				<Col span={24} md={24} className="text-center">
					<Card className="flex-col ">
						<header className="self-start gallery-text">
							<Typography.Title level={5}>我的推荐</Typography.Title>
						</header>
						<main className="w-full">
							<Table dataSource={dataSource} columns={columns} />
						</main>
					</Card>
				</Col>
				<Col span={24} md={24} className="text-center">
					<Card className="flex-col ">
						<header className="self-start gallery-text">
							<Typography.Title level={5}>预售说明</Typography.Title>
						</header>
						<main className="text-left">
							<p>1：100u为普通玩家预售方案。</p>
							<p>2：200u为联创节点预售方案。</p>
							<p>3：单地址只可参与一次预售。</p>
							<p>4：温馨提示200u只限联创节点预售，如未完成联创节点要求，只发放100u的预售代币。</p>
						</main>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
