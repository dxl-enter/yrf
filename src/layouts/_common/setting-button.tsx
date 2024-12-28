import {
	CloseOutlined
} from "@ant-design/icons";
import { Card, Drawer } from "antd";
import Color from "color";
import { m } from "framer-motion";
import { type CSSProperties, useState } from "react";
import { MdCircle } from "react-icons/md";

import CyanBlur from "@/assets/images/background/cyan-blur.png";
import RedBlur from "@/assets/images/background/red-blur.png";
import { varHover } from "@/components/animate/variants/action";
import { IconButton, SvgIcon } from "@/components/icon";
import { useSettingActions, useSettings } from "@/store/settingStore";
import { useThemeToken } from "@/theme/hooks";
import { presetsColors } from "@/theme/core";

import { type ThemeColorPresets } from "#/enum";

/**
 * App Setting
 */
export default function SettingButton() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const {
		colorTextSecondary,
		colorBgContainer,
	} = useThemeToken();

	const settings = useSettings();
	const {
		themeColorPresets,
	} = settings;
	const { setSettings } = useSettingActions();

	const setThemeColorPresets = (themeColorPresets: ThemeColorPresets) => {
		setSettings({
			...settings,
			themeColorPresets,
		});
	};


	const style: CSSProperties = {
		backdropFilter: "blur(20px)",
		backgroundImage: `url("${CyanBlur}"), url("${RedBlur}")`,
		backgroundRepeat: "no-repeat, no-repeat",
		backgroundColor: Color(colorBgContainer).alpha(0.9).toString(),
		backgroundPosition: "right top, left bottom",
		backgroundSize: "50, 50%",
	};


	return (
		<>
			<div className="flex items-center justify-center">
				<m.div
					animate={{
						rotate: [0, drawerOpen ? 0 : 360],
					}}
					transition={{
						duration: 12,
						ease: "linear",
						repeat: Number.POSITIVE_INFINITY,
					}}
					whileTap="tap"
					whileHover="hover"
					variants={varHover(1.05)}
					onClick={() => setDrawerOpen(true)}
				>
					<IconButton className="h-10 w-10">
						<SvgIcon icon="ic-setting" size="24" />
					</IconButton>
				</m.div>
			</div>
			<Drawer
				placement="right"
				title="Settings"
				onClose={() => setDrawerOpen(false)}
				open={drawerOpen}
				closable={false}
				width={280}
				styles={{
					body: { padding: 0 },
					mask: { backgroundColor: "transparent" },
				}}
				style={style}
				extra={
					<IconButton
						onClick={() => setDrawerOpen(false)}
						className="h-9 w-9 hover:scale-105"
					>
						<CloseOutlined className="text-gray-400" />
					</IconButton>
				}
			>
				<div className="flex flex-col gap-6 p-6">

					{/* theme presets */}
					<div>
						<div
							className="mb-3 text-base font-semibold"
							style={{ color: colorTextSecondary }}
						>
							Presets
						</div>
						<div className="grid grid-cols-3 gap-x-4 gap-y-3">
							{Object.entries(presetsColors).map(([preset, color]) => (
								<Card
									key={preset}
									className="flex h-14 w-full cursor-pointer items-center justify-center"
									style={{
										backgroundColor:
											themeColorPresets === preset ? `${color}14` : "",
									}}
									onClick={() =>
										setThemeColorPresets(preset as ThemeColorPresets)
									}
								>
									<div style={{ color: color.main }}>
										<MdCircle
											style={{
												fontSize: themeColorPresets === preset ? 24 : 12,
											}}
										/>
									</div>
								</Card>
							))}
						</div>
					</div>
				</div>
			</Drawer>
		</>
	);
}
