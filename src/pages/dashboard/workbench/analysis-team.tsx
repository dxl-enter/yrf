import type { CSSProperties } from "react";

type Props = {
	subtitle: string;
	title: string;
};

export default function AnalysisTeam({ subtitle, title }: Props) {
	return (
		<div
			className="flex flex-col items-center justify-between"
		>
			<span className="text-xl font-bold">{title}</span>
			<span className="text-sm">{subtitle}</span>
		</div>
	);
}
