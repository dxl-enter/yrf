import {Card, Splitter} from "antd";
import React from "react";
interface CardOperateProps {
    operations: Array<{ title: string; subtitle: string; onClick: () => void }>;
}
const AnalysisTeam: React.FC<CardOperateProps> = ({ operations = [] }) => {
	return (
		<Card className="flex-col !p-0" styles={{
            body: {
                display: "flex",
                alignItems: "center",
                padding: "12px 0",
            },
        }}>
            <Splitter>
                {operations.map((operation) => (
                    <Splitter.Panel collapsible key={operation.title}>
                        <div className="flex flex-col items-center justify-between" onClick={operation.onClick}>
							<span className="text-xl font-bold">{operation.title}</span>
							<span className="text-sm">{operation.subtitle}</span>
						</div>
                    </Splitter.Panel>
                ))}
            </Splitter>
        </Card>
		
	);
}

export default AnalysisTeam;
