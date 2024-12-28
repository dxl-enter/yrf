import { Card, Image } from "antd";
import PageTitle from "@/components/page-title";

export default function CardInformation() {
	return (
		<Card className="flex-col w-full">
			<header className="self-start">
				<PageTitle>卡牌信息</PageTitle>
			</header>
			<Image
				width="100%"
				alt="example"
				src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
			/>
		</Card>
	);
}
