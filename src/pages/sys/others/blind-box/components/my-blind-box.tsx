import { Button, Splitter, Typography } from "antd";
import MyBlindBoxItem from "./my-blind-box-item";
import { useNavigate } from "react-router";

export default function MyBlindBox() {
	const navigatge = useNavigate();
	const onMyTeam = () => {
		navigatge("/my_team");
	};
	return (
		<div className="w-full p-4">
			<Splitter className="box-shadow-inset-green">
				<Splitter.Panel collapsible>
					<div className="py-4 text-center">
						<p className="text-l font-bold">参与额度</p>
						<p className="text-sm">1.35m</p>
					</div>
				</Splitter.Panel>
				<Splitter.Panel collapsible={{ start: true }}>
					<div className="py-4 text-center">
						<p className="text-l font-bold">累计收益</p>
						<p className="text-sm">1.35m</p>
					</div>
				</Splitter.Panel>
				<Splitter.Panel>
					<div className="py-4 text-center">
						<p className="text-l font-bold">今日释放</p>
						<p className="text-sm">1.35m</p>
					</div>
				</Splitter.Panel>
				<Splitter.Panel>
					<div className="card text-center" onClick={onMyTeam}>
						<p className="text-l font-bold">我的</p>
						<p className="text-l font-bold">推荐</p>
					</div>
				</Splitter.Panel>
			</Splitter>
			<section className="mt-6">
				{new Array(2).fill("").map((_) => (
					<div key={_}>
						<header className="self-start flex items-center justify-between">
							<Typography.Title level={5}>2024-12-24 11:44</Typography.Title>
							<Button type="link" ghost>
								释放中
							</Button>
						</header>
						<MyBlindBoxItem />
					</div>
				))}
			</section>
		</div>
	);
}
