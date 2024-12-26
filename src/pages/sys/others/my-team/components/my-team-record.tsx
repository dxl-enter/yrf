import {Button, DatePicker, Form, Row, Select, Tag, Table, Input, Typography, Col} from "antd";
import type { FormProps } from 'antd';
import Card from "@/components/card";
import Scrollbar from "@/components/scrollbar";
import {RightOutlined} from "@ant-design/icons";
import AnalysisTeam from "@/pages/dashboard/workbench/analysis-team";
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
export default function MyTeamRecord() {
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
            title: "地址",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "生态类型",
            dataIndex: "price",
            key: "price",
            render: (text) => <span>{text}</span>,
        },
        {
            title: "收益类型",
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
        {
            title: "金额",
            dataIndex: "price",
            key: "price",
            render: (text) => <span>{text}</span>,
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
        <div className="flex flex-col m-4">
            <div className="w-full">
                <Row gutter={[16, 16]} justify="space-between" className="card box-shadow-red">
                    <Col lg={6} md={6} span={6}>
                        <AnalysisTeam
                            title="714k"
                            subtitle="团队收益"
                        />
                    </Col>
                    <Col lg={6} md={6} span={6}>
                        <AnalysisTeam
                            title="1.35m"
                            subtitle="我的收益"
                        />
                    </Col>
                    <Col lg={6} md={6} span={6}>
                        <AnalysisTeam
                            title="1.72m"
                            subtitle="盲盒收益"
                        />
                    </Col>
                    <Col lg={6} md={6} span={6}>
                        <AnalysisTeam
                            title="234"
                            subtitle="LP收益"
                        />
                    </Col>
                </Row>
            </div>
            <Card className="flex-col mt-4">
                <header className="self-start">
                    <Typography.Title level={5}>查询条件</Typography.Title>
                </header>
                <Form
                    {...layout}
                    initialValues={{ layout: 'horizontal' }}
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                    <Form.Item
                        label="下级地址"
                        name="name"
                    >
                        <Input placeholder="Please input" />
                    </Form.Item>
                    <Form.Item
                        label="生态类型"
                        name="name"
                    >
                        <Select
                            placeholder="Please select"
                            options={[
                                { value: "1", label: "全部" },
                                { value: "2", label: "盲盒" },
                                { value: "3", label: "LP铸造" }
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="收益类型"
                        name="status"
                    >
                        <Select
                            placeholder="Please select"
                            options={[
                                { value: "00", label: "全部" },
                                { value: "11", label: "下级收益" },
                                { value: "22", label: "团队收益" },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="查询时间范围"
                        name="name"
                    >
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
