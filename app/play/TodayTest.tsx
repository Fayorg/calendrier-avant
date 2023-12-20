'use client';

import { getFirstActiveTestWithGrade } from '@/actions/mangeTest';
import { TestCard } from '@/components/custom';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import LogOut from '@images/logout.svg';
import { GradingForm } from '@/components/forms/GradingForm';
import YourGrade from '@images/your-grade.svg';

export function TodayTest({ session }: { session: Session }) {
	const [activeTest, setActiveTest] = useState<{ data: any | null; error: Error | null; isLoading: boolean }>({ isLoading: true, data: null, error: null });

	useEffect(() => {
		getFirstActiveTestWithGrade(new Date(), session.user.id)
			.catch((err) => setActiveTest({ data: null, error: err, isLoading: false }))
			.then((data) => setActiveTest({ data, error: null, isLoading: false }));
	}, [session.user.id]);

	return (
		<>
			<TestCard data={activeTest.data} error={activeTest.error} isLoading={activeTest.isLoading} />
			{activeTest.data &&
				(activeTest.data.grades[0] ? (
					<div className={'w-full md:w-[400px]'}>
						<div className={'flex flex-row justify-evenly'}>
							<Image src={YourGrade} alt={'Your Grade'} width={100} />
							<span className={'w-[54px] h-[54px] bg-accent rounded-[20px] contents-none grid place-content-center'}>{activeTest.data.grades[0].grade}</span>
						</div>
					</div>
				) : (
					<GradingForm session={session} testId={activeTest.data.id} />
				))}
			<div>
				<button
					onClick={async () => {
						await signOut();
					}}
				>
					<Image src={LogOut} alt={'Logo'} width={50} height={50} className={'mx-auto w-full md:w-[400px]'} />
				</button>
			</div>
		</>
	);
}
