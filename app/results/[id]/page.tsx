'use client';
import { Chart } from '@components/custom/chart';
import logo from '@images/logo.svg';
import Image from 'next/image';
import ginger from '@images/ginger.png';
import { getResults, getTeacherResult, Results } from '@/actions/results';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
	const testId = parseInt(params.id);

	const [teacherGrade, setTeacherGrade] = useState<number>(0);
	const [data, setData] = useState<Results[]>([]);

	function featchResults(testId: number) {
		getTeacherResult(testId)
			.then((res) => setTeacherGrade(res?.grade || 0))
			.catch((err) => console.error(err));

		getResults(testId)
			.then((res) => setData(res))
			.catch((err) => console.error(err));
	}

	useEffect(() => {
		featchResults(testId);
		setInterval(() => {
			featchResults(testId);
		}, 5000);
	}, [testId]);

	return (
		<div className={'p-4 md:p-12 w-full h-screen bg-black flex flex-col justify-between gap-y-4'}>
			<Image src={logo} alt={'Logo'} width={100} height={200} className={'mx-auto w-full md:w-[400px]'} />
			{teacherGrade && (
				<div className={'flex justify-center relative w-full'}>
					<div className={'flex items-center text-center'}>
						<Image src={ginger} alt={'Logo'} width={120} height={120} className={'inline-flex'} />
						<h2 className={'text-4xl font-bold text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'}>{teacherGrade}</h2>
					</div>
				</div>
			)}
			<Chart data={data} />
		</div>
	);
}
