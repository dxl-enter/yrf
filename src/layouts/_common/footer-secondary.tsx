
import SettingButton from "./setting-button";
import {LeftOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router";
export default function FooterSecondary() {
	const navigatge = useNavigate();

	const goBack = () => {
		navigatge(-1)
	}
	return (
		<header className="flex h-16 w-full items-center justify-between px-6">
			<LeftOutlined onClick={goBack} />
			<SettingButton />
		</header>
	);
}
