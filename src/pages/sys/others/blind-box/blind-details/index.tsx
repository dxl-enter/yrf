import CoverImage from "@/assets/images/cover/cover_4.jpg";
import Card from "@/components/card";
import { Iconify } from "@/components/icon";
import { useUserInfo } from "@/store/userStore";
import { type CSSProperties, useState } from "react";
import BlindBoxContent from "./components/blind-box-content";
import GameplayIntroduction from "./components/gameplay-introduction";
import {useTranslation} from "react-i18next";
import {Tag} from "antd";
import React from "react";

function UserProfile() {
	const { avatar, username } = useUserInfo();
	const [currentTabIndex, setcurrentTabIndex] = useState(0);
	const { t } = useTranslation();
	const bgStyle: CSSProperties = {
		background: `url(${CoverImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	};

	const tabs = [
		{
			icon: <Iconify icon="solar:user-id-bold" size={24} className="mr-2" />,
			title: t("sys.menu.secondary-page.blind-box-content"),
			content: <BlindBoxContent />,
		},
		{
			icon: <Iconify icon="mingcute:profile-fill" size={24} className="mr-2" />,
			title: t("sys.menu.secondary-page.gameplay-introduction"),
			content: <GameplayIntroduction />,
		}
	];

	return (
		<>
			<Card className="relative mb-6 h-[290px] flex-col !p-0">
				<div style={bgStyle} className="h-full w-full">
					<div className="h-full flex flex-col items-center justify-center">
						<img src={avatar} className="h-16 w-16 rounded-full" alt="" />
						<div className="mt-6 flex flex-col items-center justify-center">
							<span className="mb-2 text-2xl font-medium text-common-white">牧师盲盒</span>
							<span className="text-center">
								<Tag color="#2db7f5">倍数</Tag>
								<Tag color="#87d068">限时优先购</Tag>
							</span>
						</div>
					</div>
				</div>
				<div className="z-10 min-h-[48px] w-full">
					<div className="mx-6 flex h-full justify-center md:justify-end">
						{tabs.map((tab, index) => (
							<button
								onClick={() => setcurrentTabIndex(index)}
								key={tab.title}
								type="button"
								style={{
									marginRight: index >= tabs.length - 1 ? "0px" : "40px",
									opacity: index === currentTabIndex ? 1 : 0.5
								}}
							>
								{tab.icon}
								{tab.title}
							</button>
						))}
					</div>
				</div>
			</Card>
			<div>{tabs[currentTabIndex].content}</div>
		</>
	);
}

export default UserProfile;
