import useUserStore from "@/store/userStore";
import { faker } from "@faker-js/faker";

import { BasicStatus, PermissionType } from "#/enum";
/**
 * Organization data mock
 */
export const ORG_LIST = [
	{
		id: "1",
		name: "East China Branch",
		status: "enable",
		desc: faker.lorem.words(),
		order: 1,
		children: [
			{
				id: "1-1",
				name: "R&D Department",
				status: "disable",
				desc: "",
				order: 1,
			},
			{
				id: "1-2",
				name: "Marketing Department",
				status: "enable",
				desc: "",
				order: 2,
			},
			{
				id: "1-3",
				name: "Finance Department",
				status: "enable",
				desc: "",
				order: 3,
			},
		],
	},
	{
		id: "2",
		name: "South China Branch",
		status: "enable",
		desc: faker.lorem.words(),
		order: 2,
		children: [
			{
				id: "2-1",
				name: "R&D Department",
				status: "disable",
				desc: "",
				order: 1,
			},
			{
				id: "2-2",
				name: "Marketing Department",
				status: "enable",
				desc: "",
				order: 2,
			},
			{
				id: "2-3",
				name: "Finance Department",
				status: "enable",
				desc: "",
				order: 3,
			},
		],
	},
];

/**
 * User permission mock
 */
const DASHBOARD_PERMISSION = {
	id: "9100714781927703",
	parentId: "",
	label: "sys.menu.dashboard",
	name: "Dashboard",
	icon: "ic-analysis",
	type: PermissionType.CATALOGUE,
	route: "dashboard",
	order: 1,
	children: [
		{
			id: "8426999229400979",
			parentId: "9100714781927703",
			label: "sys.menu.workbench",
			name: "Workbench",
			type: PermissionType.MENU,
			route: "workbench",
			component: "/dashboard/workbench/index.tsx",
		}
	],
};
const OTHERS_PERMISSION = [
	{
		id: "3981225257359246",
		parentId: "",
		label: "sys.menu.casting",
		name: "Casting",
		icon: "solar:calendar-bold-duotone",
		type: PermissionType.MENU,
		route: "casting",
		component: "/sys/others/casting/index.tsx",
	},
	{
		id: "3513985683886393",
		parentId: "",
		label: "sys.menu.card_cards",
		name: "CardCards",
		icon: "solar:clipboard-bold-duotone",
		type: PermissionType.MENU,
		route: "card_cards",
		component: "/sys/others/card-cards/index.tsx",
	},
	{
		id: "7728048658221587",
		parentId: "",
		label: "sys.menu.blind_box",
		name: "BlindBox",
		icon: "ic_label",
		type: PermissionType.MENU,
		route: "blind_box",
		component: "/sys/others/blind-box/index.tsx",
	},{
		id: "5733704222120995",
		parentId: "",
		label: "sys.menu.link_center",
		name: "LinkCenter",
		icon: "ic_label",
		type: PermissionType.MENU,
		route: "link_center",
		component: "/sys/others/link-center/index.tsx",
	},{
		id: "9884486809510480",
		parentId: "",
		label: "sys.menu.football_quiz",
		name: "FootballQuiz",
		icon: "ic_label",
		type: PermissionType.MENU,
		route: "football_quiz",
		component: "/sys/others/football-quiz/index.tsx",
	},{
		id: "9299640886731819",
		parentId: "",
		label: "sys.menu.ai_supercomputing",
		name: "AiSupercomputing",
		icon: "ic_label",
		type: PermissionType.MENU,
		route: "ai_supercomputing",
		component: "/sys/others/ai-supercomputing/index.tsx",
	},
	{
		id: "0941594969900756",
		parentId: "",
		label: "sys.menu.white_paper",
		name: "WhitePaper",
		icon: "ic_blank",
		type: PermissionType.MENU,
		route: "white_paper",
		component: "/sys/others/white-paper/index.tsx",
	},
	{
		id: "0941594969900757",
		parentId: "",
		label: "sys.menu.my_team",
		name: "MyTeam",
		icon: "ic_blank",
		type: PermissionType.MENU,
		route: "my_team",
		component: "/sys/others/my-team/index.tsx",
	},
	{
		id: "0941594969900758",
		parentId: "",
		label: "sys.menu.my_wallet",
		name: "MyWallet",
		icon: "ic_blank",
		type: PermissionType.MENU,
		route: "my_wallet",
		component: "/sys/others/my-wallet/index.tsx",
	}
];

export const PERMISSION_LIST = [
	DASHBOARD_PERMISSION,
	...OTHERS_PERMISSION,
];

/**
 * User role mock
 */
const ADMIN_ROLE = {
	id: "4281707933534332",
	name: "Admin",
	label: "admin",
	status: BasicStatus.ENABLE,
	order: 1,
	desc: "Super Admin",
	permission: PERMISSION_LIST,
};
const TEST_ROLE = {
	id: "9931665660771476",
	name: "Test",
	label: "test",
	status: BasicStatus.ENABLE,
	order: 2,
	desc: "test",
	permission: [
		DASHBOARD_PERMISSION,
	],
};
export const ROLE_LIST = [ADMIN_ROLE, TEST_ROLE];

/**
 * User data mock
 */
export const DEFAULT_USER = {
	id: "b34719e1-ce46-457e-9575-99505ecee828",
	username: "admin",
	email: faker.internet.email(),
	avatar: faker.image.avatarGitHub(),
	createdAt: faker.date.anytime(),
	updatedAt: faker.date.recent(),
	password: "demo1234",
	role: ADMIN_ROLE,
	permissions: ADMIN_ROLE.permission,
};
export const TEST_USER = {
	id: "efaa20ea-4dc5-47ee-a200-8a899be29494",
	username: "test",
	password: "demo1234",
	email: faker.internet.email(),
	avatar: faker.image.avatarGitHub(),
	createdAt: faker.date.anytime(),
	updatedAt: faker.date.recent(),
	role: TEST_ROLE,
	permissions: TEST_ROLE.permission,
};
export const USER_LIST = [DEFAULT_USER, TEST_USER];

// * Hot update, updating user permissions, only effective in the development environment
if (import.meta.hot) {
	import.meta.hot.accept((newModule) => {
		if (!newModule) return;

		const { DEFAULT_USER, TEST_USER, PERMISSION_LIST } = newModule;

		const {
			userInfo,
			actions: { setUserInfo },
		} = useUserStore.getState();

		if (!userInfo?.username) return;

		const newUserInfo =
			userInfo.username === DEFAULT_USER.username ? DEFAULT_USER : TEST_USER;

		setUserInfo(newUserInfo);

		console.log("[HMR] User permissions updated:", {
			username: newUserInfo.username,
			permissions: newUserInfo.permissions,
		});
	});
}
