import { Button, Drawer } from "antd";
import Color from "color";
import { type CSSProperties, useState } from "react";

import { IconButton, SvgIcon } from "@/components/icon";
import LocalePicker from "@/components/locale-picker";
import Logo from "@/components/logo";
import { useSettings } from "@/store/settingStore";
import { useThemeToken } from "@/theme/hooks";

import BreadCrumb from "../_common/bread-crumb";
import SettingButton from "../_common/setting-button";

import { cn } from "@/utils";
import { ThemeLayout } from "#/enum";
import {
	HEADER_HEIGHT,
	NAV_COLLAPSED_WIDTH,
	NAV_WIDTH,
	OFFSET_HEADER_HEIGHT,
} from "./config";
import NavVertical from "./nav/nav-vertical";

type Props = {
	offsetTop?: boolean;
};
export default function Header({ offsetTop = false }: Props) {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const { themeLayout, breadCrumb } = useSettings();
	const { colorBgElevated, colorBorder } = useThemeToken();

	const headerStyle: CSSProperties = {
		borderBottom:
			themeLayout === ThemeLayout.Horizontal
				? `1px dashed ${Color(colorBorder).alpha(0.6).toString()}`
				: "",
		backgroundColor: Color(colorBgElevated).alpha(1).toString(),
		width: "100%",
	};

	return (
		<>
			<header
				className={cn(
					themeLayout === ThemeLayout.Horizontal
						? "relative"
						: "sticky top-0 right-0 left-auto",
				)}
				style={headerStyle}
			>
				<div
					className="flex flex-grow items-center justify-between px-4 text-gray backdrop-blur xl:px-6 2xl:px-10"
					style={{
						height: offsetTop ? OFFSET_HEADER_HEIGHT : HEADER_HEIGHT,
						transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
					}}
				>
					<div className="flex items-baseline">
						{themeLayout !== ThemeLayout.Horizontal ? (
							<IconButton
								onClick={() => setDrawerOpen(true)}
								className="h-10 w-10 md:hidden"
							>
								<SvgIcon icon="ic-menu" size="24" />
							</IconButton>
						) : (
							<Logo />
						)}
						<div className="ml-4 hidden md:block">
							{breadCrumb ? <BreadCrumb /> : null}
						</div>
					</div>
					<div>标题</div>
					<div className="flex">
						<Button type="primary" ghost>
							连接钱包
						</Button>
						<LocalePicker />
						<SettingButton />
					</div>
				</div>
			</header>
			<Drawer
				placement="left"
				onClose={() => setDrawerOpen(false)}
				open={drawerOpen}
				closeIcon={false}
				width={
					themeLayout === ThemeLayout.Mini ? NAV_COLLAPSED_WIDTH : NAV_WIDTH
				}
			>
				<NavVertical closeSideBarDrawer={() => setDrawerOpen(false)} />
			</Drawer>
		</>
	);
}
