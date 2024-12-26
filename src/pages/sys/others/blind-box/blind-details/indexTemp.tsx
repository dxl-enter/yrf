import {Button, Col, Flex, Row, Tag, Typography} from "antd";
import type React from "react";
import FooterSecondary from "@/layouts/_common/footer-secondary";

export default function BlindDetails() {

	return (
		<div>
			<div className="mb-[50px]">
				<Flex vertical align="center">
					<div className="shadow-round-box shadow-round">
						<img
							alt="avatar"
							src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
						/>
					</div>
					<div className="mt-16 w-full text-center">
						<Typography.Title level={4}>
							牧师盲盒
						</Typography.Title>
						<p>
							<Tag color="#2db7f5">倍数</Tag>
							<Tag color="#87d068">限时优先购</Tag>
						</p>
					</div>
				</Flex>
			</div>
			<FooterSecondary>
				<Typography.Title level={4} style={{ float: 'left' }}>
					120USDT
				</Typography.Title>
				<Button
					type="primary"
					className="shadow__btn"
					style={{ float: 'right' }}
				>
					立即抢购
				</Button>
			</FooterSecondary>
		</div>
	);
}
