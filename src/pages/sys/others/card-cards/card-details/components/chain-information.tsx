import { Card } from "antd";
import PageTitle from "@/components/page-title";

export default function ChainInformation() {
	return (
		<Card className="flex-col">
			<header className="self-start">
				<PageTitle>链上信息</PageTitle>
			</header>
			<section>
				<p>卡牌名称：原创卡牌</p>
				<p>链上表示：25fadsfaf33432143tg34111</p>
				<p>上链时间：2022-11-01 12:00:26</p>
			</section>
		</Card>
	);
}
