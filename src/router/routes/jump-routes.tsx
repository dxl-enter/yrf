import { Suspense, lazy } from "react";
import { Outlet } from "react-router";

import { CircleLoading } from "@/components/loading";

import AuthGuard from "../components/auth-guard";

import type { AppRouteObject } from "#/router";
import SecondaryLayout from "@/layouts/secondaryLayout";

const WithdrawalRecord = lazy(() => import("@/pages/sys/others/withdrawal-record"));
const CardDetails = lazy(() => import("@/pages/sys/others/card-cards/card-details/index"));
const StrategyGuide = lazy(() => import("@/pages/sys/others/casting/components/strategy-guide"));
const ParticipationQuota = lazy(() => import("@/pages/sys/others/casting/components/participation-quota"));
const BlindDetails = lazy(() => import("@/pages/sys/others/blind-box/blind-details/index"));
const PresaleDetails = lazy(() => import("@/pages/dashboard/workbench/presale-details"));
const IndexMore = lazy(() => import("@/pages/dashboard/workbench/index-more"));
const SystemParameter = lazy(() => import("@/pages/sys/others/blind-box/components/system-parameter"));

/**
 * error routes
 * 403, 404, 500
 */
export const JumpRoutes: AppRouteObject = {
	element: (
		<AuthGuard>
			<SecondaryLayout>
				<Suspense fallback={<CircleLoading />}>
					<Outlet />
				</Suspense>
			</SecondaryLayout>
		</AuthGuard>
	),
	children: [
		{
			path: "withdrawal_record",
			element: <WithdrawalRecord />,
			meta: {
				label: "sys.menu.secondary-page.withdrawal-record",
				key: "/withdrawal_record",
			},
		},
		{
			path: "card_details",
			element: <CardDetails />,
			meta: {
				label: "sys.menu.secondary-page.details",
				key: "/card_details",
			},
		},
		{
			path: "strategy_guide",
			element: <StrategyGuide />,
			meta: {
				label: "sys.menu.secondary-page.strategy-guide",
				key: "/strategy_guide",
			},
		},
		{
			path: "participation_quota",
			element: <ParticipationQuota />,
			meta: {
				label: "sys.menu.secondary-page.participation-quota",
				key: "/participation_quota",
			},
		},
		{
			path: "presale_details",
			element: <PresaleDetails />,
			meta: {
				label: "sys.menu.secondary-page.presale-details",
				key: "/presale_details",
			},
		},
		{
			path: "index-more",
			element: <IndexMore />,
			meta: {
				label: "sys.menu.secondary-page.index-more",
				key: "/index-more",
			},
		},
		{
			path: "blind_details",
			element: <BlindDetails />,
			meta: {
				label: "sys.menu.secondary-page.blind-details",
				key: "/blind_details",
			},
		},
		{
			path: "system_parameter",
			element: <SystemParameter />,
			meta: {
				label: "sys.menu.secondary-page.system-parameter",
				key: "/system_parameter",
			},
		},
	]
};
