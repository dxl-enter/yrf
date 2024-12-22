import { Col, Row } from "antd";

export default function BlindBox() {
	return (
		<div className="p-2">
			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={24}>
					BlindBox
				</Col>
			</Row>
		</div>
	);
}
