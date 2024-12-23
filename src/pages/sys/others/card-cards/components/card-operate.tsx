import {Card, Col, Row} from "antd";
import React from "react";

const style: React.CSSProperties = { padding: '20px 0', textAlign: 'center', borderRadius: '6px' };
export default function CardOperate() {
    return (
            <Row className="w-full" justify="space-between">
                {new Array(4).fill("").map((_) => (
                    <Col className="gutter-row" span={5}>
                        <div className="shadow__btn" style={style}>市场行情</div>
                    </Col>
                ))}
            </Row>
    )
}
