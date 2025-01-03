import Card from "@/components/card";
import { Button } from "antd";
import PageTitle from "@/components/page-title";

export default function ProjectPlanning() {
	return (
		<Card className="flex-col">
			<div className="w-full">
				<header className="self-start">
					<PageTitle>项目规划</PageTitle>
				</header>
				<main className="w-full">
					<p>2024Q1</p>
					<ul style={{ listStyleType: "decimal" }} className="ml-4">
						{new Array(6).fill("").map((_) => (
							<li key={_} className="mt-2">
								第三个豆腐干地方地方
							</li>
						))}
					</ul>
					<Button ghost className="mt-4 w-full" type="primary" shape="round">
						继续查看白皮书
					</Button>
				</main>
			</div>
		</Card>
	);
}
