import {Card, Carousel, Col, Row, Space} from "antd";

import AreaDownload from "./area-download";
import BannerCard from "./banner-card";
import { Applications, Conversion } from "./conversion_applications";
import CurrentDownload from "./current-download";
import NewInvoice from "./new-invoice";
import TopAuthor from "./top-authors";
import TopInstalled from "./top-installed";
import TopRelated from "./top-related";
import TotalCard from "./total-card";
import CooperativePartner from "@/pages/dashboard/workbench/cooperative-partner";
import ProjectPlanning from "@/pages/dashboard/workbench/project-planning";
import TokenStatistics from "@/pages/dashboard/workbench/token-statistics";
import ParticipatePresale from "@/pages/dashboard/workbench/participate-presale";
import Notice from "@/pages/dashboard/workbench/notice";
import MyTeam from "@/pages/dashboard/workbench/my-team";
import MyInvitation from "@/pages/dashboard/workbench/my-invitation";

function Workbench() {
	const contentStyle = {
		height: '160px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
	};
	return (
		<div className="p-2">

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

			{/*<Row gutter={[16, 16]} className="mt-4" justify="center">*/}
			{/*	/!*表格*!/*/}
			{/*	<Col span={24} md={12} lg={16}>*/}
			{/*		<NewInvoice />*/}
			{/*	</Col>*/}
			{/*	/!*复杂item*!/*/}
			{/*	<Col span={24} md={12} lg={8}>*/}
			{/*		<TopRelated />*/}
			{/*	</Col>*/}
			{/*</Row>*/}
			<Row gutter={[16, 16]} className="mt-4" justify="center" id="part-1">
				<Col span={24} md={24}>
					<Card className="w-full">
						<h3 className="flex justify-between items-center">
							<div>CSC代币预售</div>
							<div>火热进行中</div>
						</h3>
						<Col span={24} md={24}>
							<ParticipatePresale />
						</Col>
					</Card>
				</Col>
			</Row>
			<Row gutter={[16, 16]} className="mt-4" justify="center">
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
	);
}

export default Workbench;
