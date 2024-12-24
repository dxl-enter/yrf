import { Suspense, lazy } from "react";
import { Outlet } from "react-router";

import { CircleLoading } from "@/components/loading";

import AuthGuard from "../components/auth-guard";

import type { AppRouteObject } from "#/router";
import SecondaryLayout from "@/layouts/secondaryLayout";

const WithdrawalRecord = lazy(() => import("@/pages/sys/others/withdrawal-record"));
const CardDetails = lazy(() => import("@/pages/sys/others/card-cards/card-details/index"));

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
	]
};
