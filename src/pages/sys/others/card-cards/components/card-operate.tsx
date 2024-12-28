import {Card, Splitter} from "antd";
import React from "react";

interface CardOperateProps {
    operations: Array<{ name: string; onClick: () => void }>;
}

const CardOperate: React.FC<CardOperateProps> = ({ operations = [] }) => {
    return (
        <Card className="flex-col !p-0" styles={{
            body: {
                display: "flex",
                alignItems: "center",
                padding: "0",
            },
        }}>
            <Splitter>
                {operations.map((operation) => (
                    <Splitter.Panel collapsible key={operation.name}>
                        <div className="py-6 text-center" onClick={operation.onClick}>
                            <p className="text-l font-bold">{operation.name}</p>
                        </div>
                    </Splitter.Panel>
                ))}
            </Splitter>
        </Card>
    )
};

export default CardOperate;
