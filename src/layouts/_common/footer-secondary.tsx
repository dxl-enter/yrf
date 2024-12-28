import type React from "react";

import { useThemeToken } from "@/theme/hooks";

type Props = {
	children: React.ReactNode;
};
export default function FooterSecondary({ children }: Props) {
	const { colorBgElevated, colorTextBase } = useThemeToken();
	return (
		<footer
			style={{
				position: 'fixed',
				bottom: '0',
				padding: '10px',
				width: '100%',
				zIndex: 9999,
				color: colorTextBase,
				background: colorBgElevated,
				borderTop: '1px solid rgba(255, 255, 255, 0.1)'
			}}
		>
			{children}
		</footer>
	);
}
