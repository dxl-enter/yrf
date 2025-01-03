import Color from "color";
import { useThemeToken } from "@/theme/hooks";

type Props = {
	subtitle: string;
	title: string;
};

export default function RevenueItem({ subtitle, title }: Props) {
	const theme = useThemeToken();
	return (
		<div
			className="flex flex-col items-center justify-center w-[20vw] h-[18vw]"
			style={{
				background: `${Color(theme.colorPrimary).alpha(0.15).toString()}`,
			}}
		>
			<span className="text-xl font-bold">{title}</span>
			<span className="text-sm">{subtitle}</span>
		</div>
	);
}
