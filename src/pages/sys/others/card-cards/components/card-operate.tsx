import {Col, Row} from "antd";
import React from "react";

interface CardOperateProps {
    operations: Array<{ name: string; onClick: () => void }>;
}
const style: React.CSSProperties = { padding: '20px 0', textAlign: 'center', borderRadius: '6px' };
const CardOperate: React.FC<CardOperateProps> = ({ operations = [] }) => {
    return (
            <Row className="w-full" justify="space-between">
                {operations.map((operation, index) => (
                    <Col key={index} className="gutter-row" span={5}>
                        {/*市场行情 创作上架 成交趋势 挂单卖出*/}
                        <div className="shadow__btn" style={style} onClick={operation.onClick}>{operation.name}</div>
                    </Col>
                ))}
            </Row>
    )
};

export default CardOperate;
