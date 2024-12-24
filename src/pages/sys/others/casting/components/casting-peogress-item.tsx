import { Row, Col, Button, Image } from "antd";
import "./participate-casting-item.css";
import Color from "color";
import { useThemeToken } from "@/theme/hooks";

export default function CastingPeogressItem() {
	const theme = useThemeToken();
	return (
		<div
			className="minting-card p-2"
			style={{
				background: `${Color(theme.colorPrimary).alpha(0.1).toString()}`,
			}}
		>
			<Row align="middle">
				<Col span={24}>
					<div className="flex items-center">
						<Image
							width={80}
							src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
						/>
						<div className="pl-4 minting-info">
							<div className="minting-level">
								一级铸造
								<span className="card ml-2" style={{padding: "2px 8px",fontSize: "12px"}}>产量200%</span>
							</div>
							<div>参与金额：5000 USDT   <span className="ml-2">已铸造：12天</span> </div>
							<div>每日释放：3%/天   <span className="ml-2">已释放：200CSC</span></div>
							<div>今日释放：100CSC</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}
