import { Row, Col, Carousel, Card, Image, Button } from "antd";
import { NotificationOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import PageTitle from "@/components/page-title";

export default function Notice() {
	const navigatge = useNavigate();
	const onCasting = () => {
		navigatge("/casting");
	};
	const onBlindBox = () => {
		navigatge("/blind_box");
	};
	const onMore = () => {
		navigatge("/index-more");
	};
	return (
		<div className="flex-col">
			<Row gutter={[16, 16]} className="w-full py-4 px-2" justify="center">
				<Col span={2} md={2}>
					<NotificationOutlined />
				</Col>
				<Col span={22} md={22} className="w-full">
					<Carousel autoplay>
						<div>
							<h3 style={{ color: "#fff" }}>公告 1</h3>
						</div>
						<div>
							<h3 style={{ color: "#fff" }}>公告 2</h3>
						</div>
						<div>
							<h3 style={{ color: "#fff" }}>公告 3</h3>
						</div>
					</Carousel>
				</Col>
			</Row>
			<Card>
				<Row gutter={[16, 16]} justify="space-between">
					<Col span={12} md={12}>
						<div
							className="box-shadow-inset-green p-4 rounded-lg"
							style={{ height: "225px" }}
						>
							<header className="self-start">
								<PageTitle>LP流量池铸造</PageTitle>
							</header>
							<section className="self-start">
								<p>今日铸造额度剩余</p>
								<p>500 USDT</p>
								<Button type="primary" className="mt-4" onClick={onCasting}>
									参与铸造
								</Button>
							</section>
						</div>
					</Col>
					<Col span={12} md={12}>
						<Image
							width="100%"
							height="100px"
							src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
							onClick={onBlindBox}
						/>
						<Image
							width="100%"
							height="100px"
							className="mt-4"
							src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
							onClick={onMore}
						/>
					</Col>
				</Row>
			</Card>
		</div>
	);
}
