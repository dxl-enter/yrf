import type { CSSProperties } from "react";

type Props = {
	subtitle: string;
	title: string;
};

export default function AnalysisData({ subtitle, title }: Props) {
	return (
		<div
			className="flex flex-col items-center justify-between py-2"
		>
			<span className="text-xl font-bold">{title}</span>
			<span className="text-sm">{subtitle}</span>
		</div>
	);
}
