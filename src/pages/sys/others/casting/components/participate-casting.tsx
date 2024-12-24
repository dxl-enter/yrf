import { Card, Typography, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import ParticipateCastingItem from "@/pages/sys/others/casting/components/participate-casting-item";
import {useNavigate} from "react-router";

export default function ParticipateCasting() {
	const navigatge = useNavigate();
	const goStrategyGuide = () => {
		navigatge('/strategy_guide');
	};
	return (
		<div className="flex-col">
			<header className="self-start flex items-center justify-between">
				<Typography.Title level={5}>参与铸造</Typography.Title>
				<Button type="link" ghost icon={<QuestionCircleOutlined />} onClick={goStrategyGuide}>
					攻略
				</Button>
			</header>
			<section className="w-full">
				{new Array(6).fill("").map((_) => (
					<div key={_}>
						<ParticipateCastingItem />
					</div>
				))}
			</section>
		</div>
	);
}
