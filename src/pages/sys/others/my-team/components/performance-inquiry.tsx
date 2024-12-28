import {
	Button,
	DatePicker,
	Form,
	Select,
	Table,
	Input,
	Splitter,
} from "antd";
import type { FormProps } from "antd";
import Card from "@/components/card";
import Scrollbar from "@/components/scrollbar";
import PageTitle from "@/components/page-title";
const { RangePicker } = DatePicker;
interface DataType {
	key: string;
	id: string;
	category: string;
	price: string;
	status: string;
}
type FieldType = {
	username?: string;
	password?: string;
	remember?: string;
};
export default function PerformanceInquiry() {
	const [form] = Form.useForm();
	const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
		errorInfo,
	) => {
		console.log("Failed:", errorInfo);
	};
	const onSearchFormReset = () => {
		form.resetFields();
	};
	const columns = [
		{
			title: "时间",
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
			title: "类型",
			dataIndex: "price",
			key: "price",
			render: (text:any) => <span>{text}</span>,
		},
		{
			title: "金额",
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
	const layout = {
		labelCol: { span: 5 },
		wrapperCol: { span: 16 },
	};
	return (
		<div className="w-full p-4">
			<Card className="flex-col !p-0">
				<Splitter className="">
					<Splitter.Panel collapsible>
						<div className="py-4 text-center">
							<p className="text-l font-bold">业绩总计</p>
							<p className="text-sm">1.35m</p>
						</div>
					</Splitter.Panel>
					<Splitter.Panel collapsible={{ start: true }}>
						<div className="py-4 text-center">
							<p className="text-l font-bold">盲盒总计</p>
							<p className="text-sm">1.35m</p>
						</div>
					</Splitter.Panel>
					<Splitter.Panel>
						<div className="py-4 text-center">
							<p className="text-l font-bold">LP总计</p>
							<p className="text-sm">1.35m</p>
						</div>
					</Splitter.Panel>
				</Splitter>
			</Card>
			<Card className="flex-col mt-4">
				<header className="self-start">
					<PageTitle>查询条件</PageTitle>
				</header>
				<Form
					{...layout}
					initialValues={{ layout: "horizontal" }}
					form={form}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item label="下级地址" name="name">
						<Input placeholder="Please input" />
					</Form.Item>
					<Form.Item label="业绩类型" name="name">
						<Select
							placeholder="Please select"
							options={[
								{ value: "1", label: "全部" },
								{ value: "2", label: "盲盒" },
								{ value: "3", label: "LP铸造" },
							]}
						/>
					</Form.Item>
					<Form.Item label="查询时间范围" name="name">
						<RangePicker style={{ width: "100%" }} />
					</Form.Item>
					<div className="flex justify-end">
						<Button onClick={onSearchFormReset}>Reset</Button>
						<Button htmlType="submit" type="primary" className="ml-4">
							Search
						</Button>
					</div>
				</Form>
			</Card>
			<main className="w-full mt-4">
				<Scrollbar>
					<Table columns={columns} dataSource={data} />
				</Scrollbar>
			</main>
		</div>
	);
}
