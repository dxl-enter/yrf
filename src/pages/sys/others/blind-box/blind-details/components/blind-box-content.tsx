import { Iconify } from "@/components/icon";
import { faker } from "@faker-js/faker";
import { Card, Tag, Typography } from "antd";
import { useThemeToken } from "@/theme/hooks";
import { useTranslation } from "react-i18next";

export default function BlindBoxContent() {
	const theme = useThemeToken();
	const { t } = useTranslation();
	const TeamItems = [
		{
			avatar: <Iconify icon="devicon:react" size={36} />,
			name: "商品标题1",
			members: `概率：${faker.number.int(100)}%`,
		},
		{
			avatar: <Iconify icon="devicon:figma" size={36} />,
			name: "商品标题2",
			members: `概率：${faker.number.int(100)}%`,
		},
		{
			avatar: <Iconify icon="logos:jest" size={36} />,
			name: "商品标题3",
			members: `概率：${faker.number.int(100)}%`,
		},
		{
			avatar: <Iconify icon="logos:nestjs" size={36} />,
			name: "商品标题4",
			members: `概率：${faker.number.int(100)}%`,
		},
	];
	return (
		<Card className="flex-col !items-start">
			<div className="flex w-full items-center justify-between">
				<Typography.Title level={5}>
					{t("sys.menu.secondary-page.blind-box-content")}
				</Typography.Title>
				<Tag color="warning">你可能抽到以下商品中的任意一款</Tag>
			</div>
			<div className="mt-2 flex w-full flex-col gap-4">
				{TeamItems.map((item) => (
					<div className="flex" key={item.name}>
						{item.avatar}
						<div className="ml-4 flex flex-1 flex-col">
							<span className="font-semibold">{item.name}</span>
							<span className="mt-1 text-xs opacity-50">{item.members}</span>
						</div>
					</div>
				))}
			</div>

			<div
				className="mt-4 w-full text-lg"
				style={{ color: theme.colorPrimary }}
			>
				<Typography.Title level={5}>倍数介绍</Typography.Title>
				<p>介绍</p>
			</div>
		</Card>
	);
}
