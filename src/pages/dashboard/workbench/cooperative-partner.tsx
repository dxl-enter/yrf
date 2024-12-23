import Card from "@/components/card";
import { Typography } from "antd";
import { faker } from "@faker-js/faker";
import { Iconify } from "@/components/icon";

export default function CooperativePartner() {
	return (
		<Card className="flex-col">
			<div className="w-full" id="part-4">
				<header className="self-start gallery-text">
					<Typography.Title level={3}>合作伙伴</Typography.Title>
				</header>
				<main className="w-full grid grid-cols-2">
					{new Array(6).fill("").map((_) => (
						<div key={_} className="mt-6">
							<img
								src={faker.image.avatarGitHub()}
								alt=""
								className="h-10 w-10 rounded-full"
							/>
						</div>
					))}
				</main>
			</div>
			<div className="w-full mt-16" id="part-5">

				<header className="self-start gallery-text">
					<Typography.Title level={3}>加入社区</Typography.Title>
				</header>
				<main className="w-full grid grid-cols-3">
					{new Array(6).fill("").map((_) => (
						<div key={_} className="mt-6">
							<img
								src={faker.image.avatarGitHub()}
								alt=""
								className="h-10 w-10 rounded-full"
							/>
						</div>
					))}
				</main>
			</div>
			<div className="w-full mt-16" id="part-6">
				<header className="self-start gallery-text">
					<Typography.Title level={3}>联系我们</Typography.Title>
				</header>
				<main className="w-full">
					<div className="mb-4 flex items-center">
						<Iconify icon="twemoji:flag-germany" size={30} />
						<span className="mx-2 font-medium">Germany</span>
					</div>
					<div className="mb-4 flex items-center">
						<Iconify icon="twemoji:flag-germany" size={30} />
						<span className="mx-2 font-medium">Germany</span>
					</div>
				</main>
			</div>
		</Card>
	);
}
