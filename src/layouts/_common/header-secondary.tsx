import SettingButton from "./setting-button";
import { LeftOutlined } from "@ant-design/icons";
import { useMatches, useNavigate } from "react-router";
import { JumpRoutes } from "@/router/routes/jump-routes";
import { useTranslation } from "react-i18next";
export default function HeaderSecondary() {
	const { t } = useTranslation();
	const navigatge = useNavigate();
	const matches: any = useMatches();
	const routePath = matches.at(-1).pathname;
	const JumpArr = JumpRoutes.children;
	const JumpList: any =
		JumpArr?.find((item) => {
			console.log(item.meta?.key, routePath);
			return item.meta?.key === routePath;
		}) ?? {};
	const goBack = () => {
		navigatge(-1);
	};
	return (
		<header className="flex h-16 w-full items-center justify-between px-6">
			<LeftOutlined onClick={goBack} />
			<div>{t(JumpList?.meta.label) || "标题"}</div>
			<SettingButton />
		</header>
	);
}
