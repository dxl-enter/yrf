import { Row, Col, Button, Image } from "antd";
import "./participate-casting-item.css";
import Color from "color";
import { useThemeToken } from "@/theme/hooks";

export default function ParticipateCastingItem() {
	const theme = useThemeToken();
	return (
		<div
			className="minting-card py-2 px-4"
			style={{
				background: `${Color(theme.colorPrimary).alpha(0.1).toString()}`,
			}}
		>
			<Row align="middle">
				<Col span={18}>
					<div className="flex items-center">
						<Image
							width={80}
							src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
						/>
						<div className="pl-4 minting-info">
							<div className="minting-level">一级铸造</div>
							<div>投入：50USDT</div>
							<div>释放：3%/天</div>
							<div>收益：200%</div>
						</div>
					</div>
				</Col>
				<Col span={6}>
					<Button type="primary" shape="round">
						参与铸造
					</Button>
				</Col>
			</Row>
		</div>
	);
}
