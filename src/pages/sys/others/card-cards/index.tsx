import {Col, Row} from "antd";
import BriefIntroduction from "@/pages/sys/others/card-cards/components/brief-introduction";
import CardOperate from "@/pages/sys/others/card-cards/components/card-operate";
import CardList from "@/pages/sys/others/card-cards/components/card-list";

export default function CardCards() {
	// 定义操作函数
	const handleMarketInfo = () => {
		try {
			alert('市场行情');
		} catch (error) {
			console.error('Error in handleMarketInfo:', error);
		}
	};

	const handleCreateListing = () => {
		try {
			alert('创作上架');
		} catch (error) {
			console.error('Error in handleCreateListing:', error);
		}
	};

	const handleTransactionTrend = () => {
		try {
			alert('成交趋势');
		} catch (error) {
			console.error('Error in handleTransactionTrend:', error);
		}
	};

	const handlePlaceOrder = () => {
		try {
			alert('挂单卖出');
		} catch (error) {
			console.error('Error in handlePlaceOrder:', error);
		}
	};
	const cardOperations = [
		{ name: '市场行情', onClick: handleMarketInfo },
		{ name: '创作上架', onClick: handleCreateListing },
		{ name: '成交趋势', onClick: handleTransactionTrend },
		{ name: '挂单卖出', onClick: handlePlaceOrder },
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
