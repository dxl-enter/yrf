import {Button, Card, Typography} from "antd";
import {RightOutlined} from "@ant-design/icons";
import {useThemeToken} from "@/theme/hooks";
import { useNavigate } from "react-router";

export default function BlindWallet() {
    const theme = useThemeToken();
    const navigatge = useNavigate();

    const instantWithdrawal = () => {};
    const recordWithdrawal = () => {
        navigatge('/withdrawal_record');
    };
    return (
        <Card className="flex-col">
            <header className="self-start flex items-center justify-between">
                <Typography.Title level={5}>盲盒钱包</Typography.Title>
                    <Button type="link" ghost icon={<RightOutlined />} iconPosition="end" onClick={recordWithdrawal}>
                        提币记录
                    </Button>
            </header>
            <section className="w-full">
                <p style={{fontSize: '3em', color: theme.colorPrimary}}>0.02 CSC</p>
                <Button style={{float: 'right'}} type="primary" onClick={instantWithdrawal}>
                    立即提币
                </Button>
            </section>
        </Card>
    )
}
