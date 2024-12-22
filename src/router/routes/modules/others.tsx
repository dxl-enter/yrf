import { Suspense, lazy } from "react";

import { Iconify } from "@/components/icon";
import { CircleLoading } from "@/components/loading";

import type { AppRouteObject } from "#/router";

const Casting = lazy(() => import("@/pages/sys/others/casting"));
const CardCards = lazy(() => import("@/pages/sys/others/card-cards"));
const BlindBox = lazy(() => import("@/pages/sys/others/blind-box"));
const LinkCenter = lazy(() => import("@/pages/sys/others/link-center"));
const FootballQuiz = lazy(() => import("@/pages/sys/others/football-quiz"));
const AiSupercomputing = lazy(
	() => import("@/pages/sys/others/ai-supercomputing"),
);
const WhitePaper = lazy(() => import("@/pages/sys/others/white-paper"));
const MyTeam = lazy(() => import("@/pages/sys/others/my-team"));
const MyWallet = lazy(() => import("@/pages/sys/others/my-wallet"));

function Wrapper({ children }: any) {
	return <Suspense fallback={<CircleLoading />}>{children}</Suspense>;
}
const others: AppRouteObject[] = [
	{
		path: "casting",
		element: (
			<Wrapper>
				<Casting />
			</Wrapper>
		),
		meta: {
			label: "sys.menu.casting",
			icon: <Iconify icon="solar:calendar-bold-duotone" size={24} />,
			key: "/casting",
		},
	},
	{
		path: "card_cards",
		element: (
			<Wrapper>
				<CardCards />
			</Wrapper>
		),
		meta: {
			label: "sys.menu.card_cards",
			icon: <Iconify icon="solar:clipboard-bold-duotone" size={24} />,
			key: "/card_cards",
		},
	},
	{
		path: "blind_box",
		element: (
			<Wrapper>
				<BlindBox />
			</Wrapper>
		),
		meta: {
			label: "sys.menu.blind_box",
			icon: <Iconify icon="solar:clipboard-bold-duotone" size={24} />,
			key: "/blind_box",
		},
	},
	{
		path: "link_center",
		element: (
			<Wrapper>
				<LinkCenter />
			</Wrapper>
		),
		meta: {
			label: "sys.menu.link_center",
			icon: <Iconify icon="solar:clipboard-bold-duotone" size={24} />,
			key: "/link_center",
		},
	},
	{
		path: "football_quiz",
		element: (
			<Wrapper>
				<FootballQuiz />
			</Wrapper>
		),
		meta: {
			label: "sys.menu.football_quiz",
			icon: <Iconify icon="solar:clipboard-bold-duotone" size={24} />,
			key: "/football_quiz",
		},
	},
	{
		path: "ai_supercomputing",
		element: (
			<Wrapper>
				<AiSupercomputing />
			</Wrapper>
		),
		meta: {
			label: "sys.menu.ai_supercomputing",
			icon: <Iconify icon="solar:clipboard-bold-duotone" size={24} />,
			key: "/ai_supercomputing",
		},
	},
	{
		path: "white_paper",
		element: (
			<Wrapper>
				<WhitePaper />
			</Wrapper>
		),
		meta: {
			label: "sys.menu.white_paper",
			icon: <Iconify icon="solar:clipboard-bold-duotone" size={24} />,
			key: "/white_paper",
		},
	},
	{
		path: "my_team",
		element: (
			<Wrapper>
				<MyTeam />
			</Wrapper>
		),
		meta: {
			label: "sys.menu.my_team",
			icon: <Iconify icon="solar:clipboard-bold-duotone" size={24} />,
			key: "/my_team",
		},
	},
	{
		path: "my_wallet",
		element: (
			<Wrapper>
				<MyWallet />
			</Wrapper>
		),
		meta: {
			label: "sys.menu.my_wallet",
			icon: <Iconify icon="solar:clipboard-bold-duotone" size={24} />,
			key: "/my_wallet",
		},
	},
];

export default others;
