import {Button, Card, Col, Row, Splitter, Typography} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import CastingPeogressItem from "@/pages/sys/others/casting/components/casting-peogress-item";

export default function ParticipationQuota() {
	return (
		<div className="w-full p-4">
			<Card className="flex-col" styles={{
				body: {
					alignItems: "center",
					padding: "0",
				},
			}}>
				<Splitter className="">
					<Splitter.Panel collapsible>
						<div className="py-4 text-center">
							<p className="text-l font-bold">参与额度</p>
							<p className="text-sm">1.35m</p>
						</div>
					</Splitter.Panel>
					<Splitter.Panel collapsible={{ start: true }}>
						<div className="py-4 text-center">
							<p className="text-l font-bold">今日释放</p>
							<p className="text-sm">1.35m</p>
						</div>
					</Splitter.Panel>
					<Splitter.Panel>
						<div className="py-4 text-center">
							<p className="text-l font-bold">累计收益</p>
							<p className="text-sm">1.35m</p>
						</div>
					</Splitter.Panel>
				</Splitter>
			</Card>
			<section className="mt-6">
				{new Array(2).fill("").map((_) => (
					<div key={_}>
						<header className="self-start flex items-center justify-between">
							<Typography.Title level={5}>2024-12-24 11:44</Typography.Title>
							<Button type="link" ghost icon={<QuestionCircleOutlined />}>
								铸造中
							</Button>
						</header>
						<CastingPeogressItem />
					</div>
				))}
			</section>
		</div>
	);
}
