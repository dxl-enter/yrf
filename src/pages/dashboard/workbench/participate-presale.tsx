import { Progress, Button, Row, Col } from "antd";

export default function ParticipatePresale() {
	return (
		<div className="flex-col">
			<Row gutter={[16, 16]} className="w-full mt-4" justify="center">
				<Col span={18} md={18} className="w-full">
					<p className="flex justify-between items-center mb-4">
						<div>预售进度</div>
						<div>100USDT起</div>
					</p>
					<Progress
						percent={60}
						percentPosition={{ align: "end", type: "inner" }}
						size={["100%", 20]}
						status="active"
						strokeColor={{ from: "#87d068", to: "#ffccc7" }}
					/>
				</Col>
				<Col span={6} md={6}>
					<Button
						type="primary"
						className="items-center"
						style={{ height: "60px" }}
					>
						参与预售
					</Button>
				</Col>
			</Row>
		</div>
	);
}
