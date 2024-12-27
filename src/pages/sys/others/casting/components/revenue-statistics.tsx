import {Row, Col, Card, Splitter} from "antd";
import RevenueItem from "./revenue-item";
import {useNavigate} from "react-router";

export default function RevenueStatistics() {
	const navigatge = useNavigate();
	const onParticipationQuota = () => {
		navigatge('/participation_quota');
	};
	const recordWithdrawal = () => {
		navigatge('/my_wallet');
	};
	return (
		<Card className="flex-col" styles={{
			body: {
				display: "flex",
				alignItems: "center",
				padding: "0",
			},
		}}>
			<Splitter className="">
				<Splitter.Panel collapsible>
					<div className="py-4 text-center" onClick={onParticipationQuota}>
						<p className="text-l font-bold">参与额度</p>
						<p className="text-sm">1.35m</p>
					</div>
				</Splitter.Panel>
				<Splitter.Panel collapsible={{ start: true }}>
					<div className="py-4 text-center" onClick={onParticipationQuota}>
						<p className="text-l font-bold">今日释放</p>
						<p className="text-sm">1.35m</p>
					</div>
				</Splitter.Panel>
				<Splitter.Panel>
					<div className="py-4 text-center" onClick={onParticipationQuota}>
						<p className="text-l font-bold">累计收益</p>
						<p className="text-sm">1.35m</p>
					</div>
				</Splitter.Panel>
				<Splitter.Panel>
					<div className="py-4 text-center" onClick={recordWithdrawal}>
						<p className="text-l font-bold">可提代币</p>
						<p className="text-sm">1.35m</p>
					</div>
				</Splitter.Panel>
			</Splitter>
		</Card>
	);
}
