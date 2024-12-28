import { CSSProperties, ReactNode } from "react/index";
import { Typography } from "antd";
import { useThemeToken } from "@/theme/hooks";

type Props = {
	children?: ReactNode;
	level?: string;
	className?: string;
	style?: CSSProperties;
};
export default function PageTitle({ children, level = 5, ...other }: Props) {
	const { colorPrimary } = useThemeToken();
	return (
		<Typography.Title style={{ color: colorPrimary }} {...other} level={level}>
			{children}
		</Typography.Title>
	);
}