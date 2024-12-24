import {Col, Row} from "antd";
import type React from "react";
import CardItem from "./components/card-item";
import ChainInformation from "./components/chain-information";
import CardInformation from "./components/card-information";
import PurchaseNotes from "./components/purchase-notes";

export default function CardDetails() {

	return (
		<div className="p-2">
			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={24}>
					<CardItem />
				</Col>
			</Row>
			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={24}>
					<ChainInformation />
				</Col>
			</Row>
			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={24}>
					<CardInformation />
				</Col>
			</Row>
			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={24}>
					<PurchaseNotes />
				</Col>
			</Row>
		</div>
	);
}
