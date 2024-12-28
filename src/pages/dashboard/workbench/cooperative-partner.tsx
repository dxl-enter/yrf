import { Typography } from "antd";
import coinweb from "@/assets/images/index/coinweb.77fcda7c.svg";
import certik from "@/assets/images/index/certik-logo.e72652f9.svg";
import benzinga from "@/assets/images/index/benzinga.ffeb418f.svg";
import btok from "@/assets/images/index/btok-logo.e3b29ca8.svg";
import mexcLogo from "@/assets/images/index/mexcLogo.23ecb608.svg";
import bitkeep from "@/assets/images/index/bitkeep-logo.90530c7a.svg";
import ledger from "@/assets/images/index/ledger-horizontal.2c870e54.svg";
import swipelux from "@/assets/images/index/swipelux-logo.7adec087.svg";
import ave from "@/assets/images/index/ave-logo.1a5f6f8f.svg";
import naboxLogo from "@/assets/images/index/nabox-logo.fa70c4b7.svg";
import apebondLogo from "@/assets/images/index/apebond.384a7e33.svg";
import supraOracleLogo from "@/assets/images/index/supraOracle.eaeed0ac.svg";
import obsidianLogo from "@/assets/images/index/obsidian-logo.509bb735.svg";
import twitterLogo from "@/assets/images/index/twitter.png";
import telegramLogo from "@/assets/images/index/telegram.png";
import binanceLogo from "@/assets/images/index/binance.png";

import chinaLogo from "@/assets/images/index/china-flag.ad7621a0.svg";
import indonesia from "@/assets/images/index/indonesia-flag.0d2446b2.svg";
import vietnam from "@/assets/images/index/vietnam-flag.9292d76c.svg";
import germany from "@/assets/images/index/germany-flag.a76dbd7a.svg";
import brazil from "@/assets/images/index/brazil-flag.a53df045.svg";
import philippines from "@/assets/images/index/philippines.6006e17d.svg";
import spain from "@/assets/images/index/spain-flag.da52deb7.svg";
import india from "@/assets/images/index/india-flag.702ce289.svg";
import cambodia from "@/assets/images/index/cambodia.ed3239e4.png";
import UAE from "@/assets/images/index/UAE.jpg";

import our from "@/assets/images/index/our.png";

export default function CooperativePartner() {
	const partners = [
		{
			href: "https://coinweblabs.io/",
			name: "USING TECHNOLOGY FROM",
			imgUrl: coinweb,
			imgClass: "mx-auto md:mt-4"
		},
		{
			href: "https://skynet.certik.com/",
			name: "AUDITED, KYC &amp; SKYNET BY",
			imgUrl: certik,
			imgClass: "mx-auto md:my-5"
		},
		{
			href: "https://www.benzinga.com/",
			name: "CRYPTO MEDIA PARTNER",
			imgUrl: benzinga,
			imgClass: "mx-auto my-3 md:mt-7"
		},
		{
			href: "https://0.plus/",
			name: "social network partner",
			imgUrl: btok,
			imgClass: "mx-auto md:my-5"
		},
		{
			href: "https://www.mexc.com/",
			name: "CEX PARTNER",
			imgUrl: mexcLogo,
			imgClass: "mx-auto md:my-5"
		},
		{
			href: "https://bitkeep.com/",
			name: "crypto wallet integrated",
			imgUrl: bitkeep,
			imgClass: "mx-auto md:my-5"
		},
		{
			href: "https://www.ledger.com/",
			name: "Hardware Wallet Integrated",
			imgUrl: ledger,
			imgClass: "mx-auto mt-1"
		},
		{
			href: "https://track.swipelux.com/",
			name: "Payment Gateway",
			imgUrl: swipelux,
			imgClass: "mx-auto mt-3 md:my-5"
		},
		{
			href: "https://avedex.cc/",
			name: "Decentralized Data Platform",
			imgUrl: ave,
			imgClass: "mx-auto md:my-3"
		},
		{
			href: "https://nabox.io/",
			name: "DEX and Wallet Parnter",
			imgUrl: naboxLogo,
			imgClass: "mx-auto mt-3 md:my-3"
		},
		{
			href: "https://apebond.click/",
			name: "CSC Bond Issued By",
			imgUrl: apebondLogo,
			imgClass: "mx-auto mt-3 md:my-3"
		},
		{
			href: "https://supraoracles.com/",
			name: "Oracle Integration With",
			imgUrl: supraOracleLogo,
			imgClass: "mx-auto mt-3 md:my-3"
		},
		{
			href: "https://www.obsidianfi.com/",
			name: "KYC AND AML VERIFIED BY",
			imgUrl: obsidianLogo,
			imgClass: "mx-auto md:my-5"
		},
		{
			href: "https://x.com/Cubespace_csc",
			name: "Cube Space twitter",
			imgUrl: twitterLogo,
			imgClass: "mx-auto md:my-5"
		},
		{
			href: "https://t.me/Cubespace_csc",
			name: "Cube Space telegram",
			imgUrl: telegramLogo,
			imgClass: "mx-auto md:my-5"
		},
		{
			href: "https://www.binance.com/",
			name: "Cube Space binance",
			imgUrl: binanceLogo,
			imgClass: "mx-auto md:my-5"
		},
	];
	const worlds =[
		{
			href: "https://t.me/Cubespace_csc",
			imgUrl: chinaLogo,
			name: "China"
		},
		{
			href: "/#communities",
			imgUrl: indonesia,
			name: "Indonesia"
		},
		{
			href: "/#communities",
			imgUrl: vietnam,
			name: "Vietnam"
		},
		{
			href: "/#communities",
			imgUrl: germany,
			name: "Germany"
		},
		{
			href: "/#communities",
			imgUrl: brazil,
			name: "Brazil"
		},
		{
			href: "/#communities",
			imgUrl: philippines,
			name: "Philippines"
		},
		{
			href: "/#communities",
			imgUrl: spain,
			name: "Spain"
		},
		{
			href: "/#communities",
			imgUrl: india,
			name: "India"
		},
		{
			href: "/#communities",
			imgUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABt0lEQVR4nO2aPUsDQRCG50QFiSkVNen0HxhLrQTFwsq/aBUrC1GxCIqxSARjraUgtvELLU4GIlicQsw7OxPufdpws+8+N5u92yTL8zyXEjNR5skrFBAggysUECCDKxQQIIMrFBAggysUECCDKxQQIIMrFBAggysUECCDK5MpB3/rXsvDWkOyqdnCz/PPZ6l1ujLTWE2WKcmR2Mv5hTxu7gx1zcLZkVQ21s0yfWMu4H66OtL1yx99WJYizL4D9K6POnkZCOwfn0AyFWEi4D8t/xdPu3tmEkyWAOLOF2GxHOAdYDV5q9pQAbrNWfPavoKOAF0Clnf/J8ilAOuA994tqlTSsWAdcJdlvz7hodEnxhVQ48I6INXk0WOV/mWIAgJkcIUCAmRwBSZAt6ZUIMeCCajf9FClko7FR2FYJRFZareQ5QqpdS6h9eDnAdZdgD4TgO8Clmd4Y3EgoswfHoxFTcVEQHV7S+aa+7B6OnmtaQGPxU2rDyaw2Dod+jrdUawnryT9s3RpfxqLDF+GAmRwhQICZHCFAgJkcIUCAmRwhQICZHCFAgJkcIUCAmRwhQICZHCl3AJE5AuhTJZExPKY+wAAAABJRU5ErkJggg==",
			name: "Japan"
		},
		{
			href: "/#communities",
			imgUrl: "data:image/png;base64,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",
			name: "Korea"
		},
		{
			href: "/#communities",
			imgUrl: cambodia,
			name: "Cambodia"
		},
		{
			href: "/#communities",
			imgUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAEuAAABLgF7cRpNAAADa0lEQVR4nO2bPWgUQRTHx2ApYheLSETtLO6wMlgkpImdRdDC5vADG4uQK7RMDistLqTQQqKSxkIJks5YiCnCWcldYapELCwsVbQ++a3Ouezdft7eexOZHwQOLjfz3n/fvHnzdvdQt9vtmgTGZk8kfX3gGfuvvcuAF8ABG1TxAjhggypeAAdsUMUL4IANqngBHLBBFS+AAzb0UT1z1pw8PiEyl1MC1OYum0/PW2a6ct58/vpFZM7DIrOkMFOdMk/vNIOrfu1+3axvvRSbW12AldvLZmH+RvC5sb4i6jyoLYFjR46aD49f95zf7rRMY7051JjkjryoCIDzb5svegZ/+/kjCP1hYUzGzoOKAGHnYXXjSSlJzwobFoG8wjK7dGFu4G/EBcCYsPNc/dWNtVLGbu99DMZGBBLrq3trvV1lc2dr4G9EkyBG2TVvwTBEKIPvv/6MY0Ww1B81YkcXFYCtLgrhPyyE/ML8TVM53Z8E2VXetVuxM4gJQJETre648oRtUbjSRBRjx5E2vlgOWKr1Z/nOfnHnYXJ8IhCRLTQOck6SQCIREFfbt/d2hxqX/BFObkQDDkd5drdpOvu7A6NBRIC4K1BW8rPgpGW2fiVweLoyFVyApdpiUGtE5xQRgG1IEpaETXzRKIkikgOKlKhFsE7nqSpHLgB7vySLD5dzVZWq/YCZavlLI29doSrA5Lj+rXdVAdgapVpfcai3xOJOaVKoC0ANr8nIBUg6iJi/yyCpVB01IhGQdiDhnJC3k1MWIgJsd94nfk8UDDosSSAiQJZOLwcZjYQotgSyVGec2iTK5vByE9sFsrS8o93iUUDCDUea6IOSNCizFD4cWanpy75JQp5BgFNX/51PROuA6w+yJToigeVAV7eMSpGI4iYMPYGoDaICUBPkOawQqkQNYhQRgpMov8V5RGDuaF2i8qywNSgvJNPNnTdBw4PP0e4OkcO4CMdfWDT+/9yti30zqgggkezC4DwtskEtOJWzAIbYnt2oSXIe1A5DGERIlnFjJA7GZo6k5qsT7wuEH5AoA4ousn3aQQycemGCPZq9uqgQOE7Blad+cPKNEZIjYtBOT0uUrHEOWzhdJKcciFdm4jrLWUI8Df/OkAM2qOIFcMAGVbwADtigihfAARtU8QI4YIMqXgAHbNDDGPMbsbVxRtPiUSYAAAAASUVORK5CYII=",
			name: "Pakistan"
		},
		{
			href: "/#communities",
			imgUrl: UAE,
			name: "UAE"
		},
		{
			href: "/#communities",
			imgUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAk6AAAJOgHwZJJKAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDUgNzkuMTY0NTkwLCAyMDIwLzEyLzA5LTExOjU3OjQ0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMTAtMDhUMTE6MDc6MTgtMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTEwLTA4VDExOjA4OjQ1LTA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTEwLTA4VDExOjA4OjQ1LTA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUzZTY0MGQ1LTY4NmUtNGZhOS05OGMzLTE0YmEzMWI5ZWMzNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1M2U2NDBkNS02ODZlLTRmYTktOThjMy0xNGJhMzFiOWVjMzUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1M2U2NDBkNS02ODZlLTRmYTktOThjMy0xNGJhMzFiOWVjMzUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjUzZTY0MGQ1LTY4NmUtNGZhOS05OGMzLTE0YmEzMWI5ZWMzNSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0wOFQxMTowNzoxOC0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjEgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0zdTGAAAAOpJREFUeJzt2LFJRUEYhNHZyxo+BEHMDQWrshdbeDUZ2oNagDdRDNYyTrBzKviYYBf+sdb6THLJns6x1lq6QjqSnDoCOg9doHUAHaB1AB2gdQAdoHUAHaB1AB2gdQAdoHUAHaB1AB2gbT/AfHl90w3UyMP1OxtfhWceb3UEtf0b0AF0gNYBdIDWAXSA1gF0gNYBdIDWAXSA1gF0gNYBdIA2c9zpBmo+/73rBmp8PN3vfRT9ydQR1PwdN7qB2v4X6AA6QOsAOkDrADpA6wA6QOsAOkDrADpA6wA6QOsA2fccliSXmeQr+45w/gM6/xjvNp52ZAAAAABJRU5ErkJggg==",
			name: "Russia"
		},
		{
			href: "/#communities",
			imgUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAAA8AAAAAQAAADwAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAECgAwAEAAAAAQAAAEAAAAAAnyEyRQAAAAlwSFlzAAAJOgAACToB8GSSSgAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAAAQ1JREFUeAHtkrEJAkEUBf8eiCYihjZgKWIRYmBJBrZhDzZgZh+CyeEd57UwicHwduNh9703ra6HqeDZtK7ew6eO633dz7daLZY1zbfN9y9nmr/cWo19X6/Tpb6PZ7XdtmoY8fMdJmRACpANiuPEAFyZDIgBskFxnBiAK5MBMUA2KI4TA3BlMiAGyAbFcWIArkwGxADZoDhODMCVyYAYIBsUx4kBuDIZEANkg+I4MQBXJgNigGxQHCcG4MpkQAyQDYrjxABcmQyIAbJBcZwYgCuTATFANiiOEwNwZTIgBsgGxXFiAK5MBsQA2aA4TgzAlcmAGCAbFMeJAbgyGRADZIPiODEAVyYDYoBsUBznBxcIFK8tYFDgAAAAAElFTkSuQmCC",
			name: "Italy"
		}
	];
	return (
		<div className="flex-col">
			<div className="w-full px-6">
				<Typography.Title level={3} className="text-center">合作伙伴</Typography.Title>
				<main className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
					{partners.map((_) => (
						<a key={_.name} href={_.href} target="_blank">
							<div className="rounded-[32px] px-6 py-6 h-full bg-gradient-to-r from-[#047CFD]/[10%] to-[#31B8F6]/[10%] border-r-2 border-r-[#ffffff]/[46%] text-center text-white">
								<h3 className="text-sm uppercase hidden md:block">
									{_.name}
								</h3>
								<img
									className={_.imgClass}
									src={_.imgUrl}
									alt=""
								/>
							</div>
						</a>
					))}
				</main>
			</div>
			<div className="w-full px-6 mt-16" id="part-5">
				<Typography.Title level={3} className="text-center">加入社区</Typography.Title>
				<main className="mt-6 grid grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-10 mx-auto">
					{worlds.map((_) => (
						<a key={_.name} href={_.href} target="_blank">
							<div className="text-center">
								<img
									className="mx-auto w-8 h-8 md:w-12 md:h-12"
									src={_.imgUrl}
									alt=""
								/>
								<span
									style={{color: 'rgb(163 162 184)'}}
									className="mt-3 block capitalize text-sm md:text-base"
								>{_.name}</span
								>
							</div>
						</a>
					))}
				</main>
			</div>
			<div className="w-full mt-16">
				{/*<Typography.Title level={5} className="text-center">联系我们</Typography.Title>*/}
				{/*<main className="w-full">*/}
				{/*	<div className="mb-4 flex items-center">*/}
				{/*		<Iconify icon="twemoji:flag-germany" size={30} />*/}
				{/*		<span className="mx-2 font-medium">Germany</span>*/}
				{/*	</div>*/}
				{/*	<div className="mb-4 flex items-center">*/}
				{/*		<Iconify icon="twemoji:flag-germany" size={30} />*/}
				{/*		<span className="mx-2 font-medium">Germany</span>*/}
				{/*	</div>*/}
				{/*</main>*/}
				<img
					src={our}
					alt=""
				/>
			</div>
		</div>
	);
}
