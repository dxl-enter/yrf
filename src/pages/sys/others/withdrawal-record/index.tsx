import {Col, Row} from "antd";
import RecordTable from "./components/record-table";

export default function WithdrawalRecord() {
    return (
        <div className="p-2">
            <Row gutter={[16, 16]} className="mt-4" justify="center">
            	{/*表格*/}
            	<Col span={24} md={24} lg={24}>
            		<RecordTable />
            	</Col>
            </Row>
        </div>
    )
}
