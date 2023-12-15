'use server';
import { Chart } from '@components/custom/chart';
import logo from '@images/logo.svg';
import Image from 'next/image';
import Prisma from '@lib/prisma';

interface data {
	name: string;
	total: number;
}

export default async function Page({ params }: { params: { id: string } }) {
	const grades = await Prisma.grade.findMany({ where: { testId: parseInt(params.id) } });
	const allGrades = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6'];
	let gradeOccurences = new Array(allGrades.length).fill(0);
	const gradeList = grades.map((grade) => grade.grade);

	const teacherGrade = await Prisma.grade.findFirst({ where: { testId: parseInt(params.id), user: { isTeacher: true } } });

	for (let i = 0; i < gradeList.length; i++) {
		gradeOccurences[allGrades.indexOf(gradeList[i].toString())]++;
	}

	let data: data[] = [];
	for (let i = 0; i < gradeOccurences.length; i++) {
		data.push({
			name: allGrades[i],
			total: gradeOccurences[i],
		});
	}

	for (let grade in grades) {
		console.log(grade);
	}

	return (
		<div className={'p-4 md:p-12 w-full h-screen bg-black flex flex-col justify-between gap-y-4'}>
			{teacherGrade && (
				<div className={'flex flex-col gap-y-2'}>
					<p className="text-white">Mme Tixhon :</p>
					<h2 className={'text-4xl font-bold text-white'}>{teacherGrade.grade}</h2>
				</div>
			)}
			<Image src={logo} alt={'Logo'} width={100} height={200} className={'mx-auto w-full md:w-[400px]'} />
			<Chart data={data} />
		</div>
	);
}
