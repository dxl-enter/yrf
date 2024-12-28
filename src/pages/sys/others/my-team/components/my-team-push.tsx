import { Card, Table } from "antd";
import Scrollbar from "@/components/scrollbar";
import PageTitle from "@/components/page-title";

interface DataType {
	key: string;
	id: string;
	category: string;
	price: string;
	status: string;
}
export default function MyTeamPush() {
	const columns = [
		{
			title: "邀请时间",
			dataIndex: "id",
			key: "id",
			render: (text:any) => <span>{text}</span>,
		},
		{
			title: "地址",
			dataIndex: "category",
			key: "category",
		},
		{
			title: "状态",
			dataIndex: "price",
			key: "price",
			render: (text:any) => <span>{text}</span>,
		},
	];

	const data: DataType[] = [
		{
			key: "1",
			id: "INV-1990",
			category: "Android",
			price: "$83.74",
			status: "Paid",
		},
		{
			key: "2",
			id: "INV-1991",
			category: "Mac",
			price: "$97.14",
			status: "Out of Date",
		},
		{
			key: "3",
			id: "INV-1992",
			category: "Windows",
			price: "$68.71",
			status: "Progress",
		},
		{
			key: "4",
			id: "INV-1993",
			category: "Android",
			price: "$85.21",
			status: "Paid",
		},
		{
			key: "5",
			id: "INV-1994",
			category: "Mac",
			price: "$53.17",
			status: "Paid",
		},
	];
	return (
		<Card className="flex-col">
			<header className="self-start">
				<PageTitle>我的直推</PageTitle>
			</header>
			<main className="w-full">
				<Scrollbar>
					<Table columns={columns} dataSource={data} />
				</Scrollbar>
			</main>
		</Card>
	);
}
