import {Col, Row} from "antd";
import type React from "react";
import BriefIntroduction from "@/pages/sys/others/card-cards/components/brief-introduction";
import CardOperate from "@/pages/sys/others/card-cards/components/card-operate";
import CardList from "@/pages/sys/others/card-cards/components/card-list";

export default function CardCards() {

	return (
		<div className="p-2">
			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={24}>
					<BriefIntroduction />
				</Col>
			</Row>
			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={24}>
					<CardOperate />
				</Col>
			</Row>
			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={24}>
					<CardList />
				</Col>
			</Row>
		</div>
	);
}
