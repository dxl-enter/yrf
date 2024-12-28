import { Card, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { faker } from "@faker-js/faker";
import PageTitle from "@/components/page-title";

export default function GameplayIntroduction() {
	const { t } = useTranslation();
	const AboutItems = [
		{
			label: "介绍标题1",
			val: "介绍内容1",
		},
		{
			label: "介绍标题2",
			val: "介绍内容2",
		},
		{
			label: "介绍标题3",
			val: "介绍内容3",
		},
		{
			label: "介绍标题4",
			val: "介绍内容4",
		},
	];
	return (
		<Card className="flex-col">
			<div className="flex w-full flex-col">
				<PageTitle>
					{t("sys.menu.secondary-page.gameplay-introduction")}
				</PageTitle>
				<Typography.Text>{faker.lorem.paragraph()}</Typography.Text>

				<div className="mt-2 flex flex-col gap-4">
					{AboutItems.map((item) => (
						<div className="flex" key={item.label}>
							<div className="mr-2">{item.label}:</div>
							<div className="opacity-50">{item.val}</div>
						</div>
					))}
				</div>
			</div>
		</Card>
	);
}
