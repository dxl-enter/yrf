import { Col, Row } from "antd";

export default function LinkCenter() {
	return (
		<div className="p-2">
			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={24}>
					LinkCenter
				</Col>
			</Row>
		</div>
	);
}
