'use client';

import { useState } from 'react';
import Image from 'next/image';
import YourGrade from '@images/your-grade.svg';
import { Check } from 'lucide-react';
import { Session } from 'next-auth';
import { addGrade } from '@/actions/grades';

export function GradingForm({ session, testId }: { session: Session; testId: number }) {
	const [grade, setGrade] = useState<number>(4);
	const [hasVoted, setHasVoted] = useState<boolean>(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const result = await addGrade(testId, session.user.id, grade);
		if (result.id) {
			console.log('ok');
			setHasVoted(true);
			setGrade(result.grade);
		} else {
			console.log('error');
		}
	}

	if (hasVoted && grade != 0) {
		return (
			<div className={'w-full md:w-[400px]'}>
				<div className={'flex flex-row justify-evenly'}>
					<Image src={YourGrade} alt={YourGrade} width={100} />
					<span className={'w-[54px] h-[54px] bg-accent rounded-[20px] contents-none grid place-content-center'}>{grade}</span>
				</div>
			</div>
		);
	}

	return (
		<div className={'w-full md:w-[400px]'}>
			<form onSubmit={handleSubmit}>
				<div>
					<input type="range" value={grade} step="0.5" min="1" max="6" id="gradeSelector" className={'w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-primary/75 accent-accent'} onChange={(e) => setGrade(Number(e.target.value))} />
				</div>
				<div className={'flex flex-row justify-evenly'}>
					<Image src={YourGrade} alt={YourGrade} width={100} />
					<span className={'w-[54px] h-[54px] bg-accent rounded-[20px] contents-none grid place-content-center'}>{grade}</span>
					<input type="submit" value={'Envoyer'} id="submit" className={'hidden'}></input>
					<label htmlFor="submit" className={'w-[54px] h-[54px] bg-secondary rounded-[20px] contents-none grid place-content-center'}>
						<Check width={24} height={24} color={'white'} />
					</label>
				</div>
			</form>
		</div>
	);
}
