import React from "react";
import banner3 from "@/assets/images/background/overlay_2.jpg";
import PageTitle from "@/components/page-title";

export default function IndexMore() {
	const contentStyle: React.CSSProperties = {
		position: "relative",
		height: "160px",
		color: "#fff",
		padding: "20px",
		margin: "16px 16px",
		background: `url("${banner3}") no-repeat center/cover`,
		borderRadius: "8px",
	};
	return (
		<div className="w-full">
			<div style={contentStyle} className="box-shadow-inset-green">
				<PageTitle level={3}>LP铸造</PageTitle>
				<p>玩法介绍、卡牌专辑、公告须知等</p>
				<p>平台宣传活动</p>
			</div>
			<div style={contentStyle} className="box-shadow-inset-green">
				<PageTitle level={3}>模仿盲盒</PageTitle>
				<p>玩法介绍、卡牌专辑、公告须知等</p>
				<p>平台宣传活动</p>
			</div>
			<div style={contentStyle} className="box-shadow-inset-green">
				<PageTitle level={3}>NFT卡牌</PageTitle>
				<p>玩法介绍、卡牌专辑、公告须知等</p>
				<p>平台宣传活动</p>
			</div>
			<div style={contentStyle} className="box-shadow-inset-green">
				<PageTitle level={3}>其他模块</PageTitle>
				<p>玩法介绍、卡牌专辑、公告须知等</p>
				<p>平台宣传活动</p>
			</div>
		</div>
	);
}
