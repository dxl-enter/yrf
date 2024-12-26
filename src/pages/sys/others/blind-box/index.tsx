import {Col, Row} from "antd";
import type React from "react";
import BriefIntroduction from "./components/brief-introduction";
import CardOperate from "@/pages/sys/others/card-cards/components/card-operate";
import CardList from "./components/card-list";
import {useNavigate} from "react-router";

export default function BlindBox() {
	const navigatge = useNavigate();
	const handleSystemParams = () => {
		navigatge('/system_parameter');
	};

	const handleMyBlindBox = () => {
		navigatge('/my_blind_box');
	};

	const handleBlindBoxWallet = () => {
		navigatge('/my_wallet');
	};

	const handleOneKeyWithdraw = () => {
		try {
			alert('一键提币');
		} catch (error) {
			console.error('Error in handleOneKeyWithdraw:', error);
		}
	};
	const cardOperations = [
		{ name: '系统参数', onClick: handleSystemParams },
		{ name: '我的盲盒', onClick: handleMyBlindBox },
		{ name: '盲盒钱包', onClick: handleBlindBoxWallet },
		{ name: '一键提币', onClick: handleOneKeyWithdraw },
	];
	return (
		<div className="p-2">
			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={24}>
					<BriefIntroduction />
				</Col>
			</Row>
			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={24}>
					<CardOperate operations={cardOperations} />
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
