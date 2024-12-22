import {Button, Card, Col, Row, Tag, Typography} from "antd";
import {RightOutlined} from "@ant-design/icons";
import AnalysisData from "@/pages/sys/others/my-wallet/components/analysis-data";
import {useNavigate} from "react-router";
import Scrollbar from "@/components/scrollbar";
import Table, {ColumnsType} from "antd/es/table";

interface DataType {
    key: string;
    id: string;
    category: string;
    price: string;
    status: string;
}
export default function MyTeamPush() {
    const navigatge = useNavigate();

    const columns: ColumnsType<DataType> = [
        {
            title: "邀请时间",
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
            title: "状态",
            dataIndex: "price",
            key: "price",
            render: (text) => <span>{text}</span>,
        }
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
                <Typography.Title level={5}>我的直推</Typography.Title>
            </header>
            <main className="w-full">
                <Scrollbar>
                    <Table columns={columns} dataSource={data} />
                </Scrollbar>
            </main>
        </Card>
    )
}