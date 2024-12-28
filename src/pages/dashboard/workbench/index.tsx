import React from "react";
import { Card, Carousel, Col, Row } from "antd";

import CooperativePartner from "@/pages/dashboard/workbench/cooperative-partner";
import ProjectPlanning from "@/pages/dashboard/workbench/project-planning";
import TokenStatistics from "@/pages/dashboard/workbench/token-statistics";
import ParticipatePresale from "@/pages/dashboard/workbench/participate-presale";
import Notice from "@/pages/dashboard/workbench/notice";
import MyTeam from "@/pages/dashboard/workbench/my-team";
import MyInvitation from "@/pages/dashboard/workbench/my-invitation";

function Workbench() {
	const contentStyle: React.CSSProperties = {
		height: "160px",
		color: "#fff",
		lineHeight: "160px",
		textAlign: "center",
		background: "#364d79",
	};
	return (
		<div>
			<Carousel dotPosition="bottom">
				<div>
					<h3 style={contentStyle}>1</h3>
				</div>
				<div>
					<h3 style={contentStyle}>2</h3>
				</div>
				<div>
					<h3 style={contentStyle}>3</h3>
				</div>
				<div>
					<h3 style={contentStyle}>4</h3>
				</div>
			</Carousel>

			<div className="p-2">
				<div className="mt-[-24px]">
					<Card className="w-full">
						<h3 className="flex justify-between items-center">
							<div>CSC代币预售</div>
							<div>火热进行中</div>
						</h3>
						<Col span={24} md={24}>
							<ParticipatePresale />
						</Col>
					</Card>
				</div>
				<Row gutter={[16, 16]} justify="center">
					<Col span={24} md={24}>
						<Notice />
					</Col>
				</Row>
				<Row gutter={[16, 16]} className="mt-4" justify="center">
					<Col span={24} md={24}>
						<MyTeam />
					</Col>
				</Row>
				<Row gutter={[16, 16]} className="mt-4" justify="center" id="part-2">
					<Col span={24} md={24}>
						<MyInvitation />
					</Col>
				</Row>
				<Row gutter={[16, 16]} className="mt-4" justify="center" id="part-3">
					<Col span={24} md={12}>
						<TokenStatistics />
					</Col>

					<Col span={24} md={12}>
						<ProjectPlanning />
					</Col>
				</Row>
				<Row gutter={[16, 16]} className="mt-4" justify="center">
					<Col span={24} md={24}>
						<CooperativePartner />
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Workbench;
