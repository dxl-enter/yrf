import type React from "react";

import { useThemeToken } from "@/theme/hooks";

import HeaderSecondary from "@/layouts/_common/header-secondary";

type Props = {
	children: React.ReactNode;
};
export default function SecondaryLayout({ children }: Props) {
	const { colorBgElevated, colorTextBase } = useThemeToken();
	return (
		<div
			className="flex h-screen w-full flex-col"
			style={{
				color: colorTextBase,
				background: colorBgElevated,
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 9
			}}
		>
			<HeaderSecondary />
			<div style={{overflow: 'auto'}}>
				{children}
			</div>

		</div>
	);
}
