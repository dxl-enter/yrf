import {Button, Col, Row} from "antd";
import type React from "react";
import CardItem from "./components/card-item";
import ChainInformation from "./components/chain-information";
import CardInformation from "./components/card-information";
import PurchaseNotes from "./components/purchase-notes";
import FooterSecondary from "@/layouts/_common/footer-secondary";
import {useNavigate} from "react-router";
import BuyNow from "@/pages/sys/others/card-cards/card-details/components/buy-now";

export default function CardDetails() {
	const navigatge = useNavigate();
	const goBuyNow = () => {
		navigatge("/buy_now");
	};
	return (
		<div>
			<div className="p-2 mb-[50px]">
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
			<FooterSecondary>
				<Button
					type="primary"
					style={{ float: 'right' }}
					onClick={goBuyNow}
				>
					立即购买
				</Button>
			</FooterSecondary>
		</div>
	);
}
