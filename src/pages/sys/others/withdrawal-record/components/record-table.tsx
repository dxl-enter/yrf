import { Button, Col, Form, Row, Select, Tag, Table } from "antd";
import type { FormProps } from 'antd';
import Card from "@/components/card";
import Scrollbar from "@/components/scrollbar";

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
export default function RecordTable() {
	const [form] = Form.useForm();
	const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const onSearchFormReset = () => {
		form.resetFields();
	};
	const columns = [
		{
			title: "时间",
			dataIndex: "id",
			key: "id",
			render: (text) => <span>{text}</span>,
		},
		{
			title: "操作",
			dataIndex: "category",
			key: "category",
		},
		{
			title: "类型",
			dataIndex: "price",
			key: "price",
			render: (text) => <span>{text}</span>,
		},
		{
			title: "金额",
			key: "status",
			dataIndex: "status",
			render: (_status) => {
				const status = _status as string;
				let color = "success";
				if (status === "Progress") color = "gold";
				if (status === "Out of Date") color = "red";
				return <Tag color={color}>{status}</Tag>;
			},
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
				<Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
					<Row gutter={[16, 16]}>
						<Col span={12} lg={12}>
							<Form.Item
								label="操作"
								name="name"
								className="!mb-0"
							>
								<Select
									placeholder="Please select"
									options={[
										{ value: "1", label: "我的提币" },
										{ value: "2", label: "我的投资" },
										{ value: "3", label: "我的收益" },
										{ value: "4", label: "系统奖励" },
										{ value: "5", label: "下级提现" },
									]}
								/>
							</Form.Item>
						</Col>
						<Col span={12} lg={12}>
							<Form.Item
								label="类型"
								name="status"
								className="!mb-0"
							>
								<Select
									placeholder="Please select"
									options={[
										{ value: "11", label: "魔方盲盒" },
										{ value: "22", label: "LP铸造" },
									]}
								/>
							</Form.Item>
						</Col>
						<Col span={24} lg={24}>
							<div className="flex justify-end">
								<Button onClick={onSearchFormReset}>Reset</Button>
								<Button htmlType="submit" type="primary" className="ml-4">
									Search
								</Button>
							</div>
						</Col>
					</Row>
				</Form>
			</header>
			<main className="w-full">
				<Scrollbar>
					<Table columns={columns} dataSource={data} />
				</Scrollbar>
			</main>
		</Card>
	);
}
