import Color from "color";
import { useThemeToken } from "@/theme/hooks";
import { DotChartOutlined } from "@ant-design/icons";
import { Button, Card, Typography } from "antd";
import { faker } from "@faker-js/faker";
import PageTitle from "@/components/page-title";

export default function SystemParameter() {
	const theme = useThemeToken();
	return (
		<div className="flex-col">
			<div
				className="flex justify-between items-center w-[180px] shadow__btn-green"
				style={{
					padding: "8px 16px",
					background: theme.colorPrimaryActive,
					borderTopRightRadius: "20px",
					borderBottomRightRadius: "20px",
				}}
			>
				<p>CSC</p>
				<div>
					<p>盲盒池代币数量</p>
					<p>122 CSC</p>
				</div>
			</div>
			<div className="w-full flex justify-center items-center my-12">
				<div
					className="w-[60vw] h-[60vw] flex flex-col justify-center items-center shadow__btn"
					style={{
						borderRadius: "50%",
					}}
				>
					<DotChartOutlined style={{ fontSize: "5em" }} />
					<p>每日总量释放中</p>
					<p>释放倒计时</p>
					<p>24小时00分00秒</p>
				</div>
			</div>
			<div className="w-full flex items-center justify-end w-[100px]">
				<p
					className="shadow__btn-green"
					style={{
						padding: "8px 16px",
						background: theme.colorPrimaryActive,
						borderTopLeftRadius: "20px",
						borderBottomLeftRadius: "20px",
					}}
				>
					一键提币
				</p>
			</div>
			<div className="flex justify-between items-center mt-6 mx-6">
				<Button
					type="primary"
					className="flex flex-col"
					style={{
						width: "38vw",
						height: "18vw",
						background: `${Color(theme.colorPrimary).alpha(0.4).toString()}`,
						boxShadow: `0 0 10px ${Color(theme.colorInfo).toString()}`,
					}}
				>
					<span>今日剩余额度</span>
					<span>10万USDT</span>
				</Button>
				<Button
					type="primary"
					className="flex flex-col"
					style={{
						width: "38vw",
						height: "18vw",
						background: `${Color(theme.colorPrimary).alpha(0.4).toString()}`,
						boxShadow: `0 0 10px ${Color(theme.colorInfo).toString()}`,
					}}
				>
					<span>本期收益率</span>
					<span>200%</span>
				</Button>
			</div>
			<div className="mt-6 mx-6">
				<Card className="flex w-full flex-col">
					<PageTitle>玩法介绍</PageTitle>
					<Typography.Text>{faker.lorem.paragraph()}</Typography.Text>
				</Card>
			</div>
		</div>
	);
}
