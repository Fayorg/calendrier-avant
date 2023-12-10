'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import YourGrade from '@images/your-grade.svg';
import {Check} from "lucide-react";

export function GradingForm({ password, data }: { password: string; data: any }) {
	const [grade, setGrade] = useState<number>(0);
	const [hasVoted, setHasVoted] = useState<boolean>(false);
	const router = useRouter();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const response = await fetch('/api/grade', {
			method: 'POST',
			body: JSON.stringify({ grade, key: password, testId: data.id }),
		});
		const json = await response.json();
		if (response.status == 200) {
			setHasVoted(true);
		} else {
			alert(json.message);
		}
	}

	if (data.vote.hasVoted || hasVoted) {
		return (
			<div className={"w-full md:w-[400px]"}>
				<div className={"flex flex-row justify-evenly"}>
					<Image src={YourGrade} alt={YourGrade} width={100}/>
					<span className={"w-[54px] h-[54px] bg-accent rounded-[20px] contents-none grid place-content-center"}>{data.vote.hasVoted ? data.vote.grade : grade}</span>
				</div>
			</div>
		);
	}

	return (
		<div className={"w-full md:w-[400px]"}>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="range"
						min="2"
						max="12"
						id="gradeSelector"
						className={"w-full h-4 bg-white range range:bg-white text-white"}
						onChange={(e) => setGrade(Number(e.target.value) / 2)}
					/>
				</div>
				<div className={"flex flex-row justify-evenly"}>
					<Image src={YourGrade} alt={YourGrade} width={100}/>
					<span className={"w-[54px] h-[54px] bg-accent rounded-[20px] contents-none grid place-content-center"}>{grade}</span>
					<input type="submit" value={'Envoyer'} id="submit" className={"hidden"}></input>
					<label htmlFor="submit" className={"w-[54px] h-[54px] bg-secondary rounded-[20px] contents-none grid place-content-center"}>
						<Check width={24} height={24} color={"white"}/>
					</label>
				</div>
			</form>
		</div>
	);
}
