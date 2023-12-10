'use client';

import Calendar from "../../images/date.svg";
import Image from "next/image";

import { Ban, Snowflake, CircleOff } from "lucide-react";

export function TestCard({ data, error, isLoading }: { data: any; error: any; isLoading: boolean }) {
	console.log(data);
	if (isLoading)
		return (
			<div className={"w-fit h-fit relative"}>
				<Image src={Calendar} alt={"Calendrier absolute"} />
				<div className={"w-full h-full absolute top-0 left-0 p-4 flex flex-col place-content-end text-center"}>
					<Snowflake width={36} height={36} color={"#000000"} className={"animate-spin place-self-center"} />
					<span className={"text-black text-xs"}>Chargement</span>
				</div>
			</div>
		);
	if (error)
		return (
			<div className={"w-fit h-fit relative"}>
				<Image src={Calendar} alt={"Calendrier absolute"} />
				<div className={"w-full h-full absolute top-0 left-0 p-4 flex flex-col place-content-end text-center"}>
					<Ban width={36} height={36} color={"#000000"} className={"place-self-center"}/>
					<span className={"text-black text-xs"}>Erreur</span>
				</div>
			</div>
		);
	if (data.status == 404)
		return (
			<div className={"w-fit h-fit relative"}>
				<Image src={Calendar} alt={"Calendrier absolute"} />
				<div className={"w-full h-full absolute top-0 left-0 p-4 flex flex-col place-content-end text-center"}>
					<CircleOff width={36} height={36} color={"#000000"} className={"place-self-center"}/>
					<span className={"text-black text-xs"}>Pas de test</span>
				</div>
			</div>
		);

	return (
		<div className={"w-fit h-fit relative"}>
			<Image src={Calendar} alt={"Calendrier absolute"} />
			<div className={"w-full h-full absolute top-0 left-0 p-4 flex flex-col place-content-end text-center"}>
				<span className={"text-black text-[36px] font-medium"}>{new Date().getDate()}</span>
				<span className={"text-black text-xs"}>{data.testOf.firstName}</span>
			</div>
		</div>
	);
}
