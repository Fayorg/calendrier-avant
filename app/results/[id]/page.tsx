'use server';
import { Chart } from '@components/custom/chart';
import logo from '@images/logo.svg';
import Image from 'next/image';
import Prisma from '@lib/prisma';
import ginger from '@images/ginger.png';

interface data {
	name: string;
	total: number;
}

export default async function Page({ params }: { params: { id: string } }) {
	const teacherGrade = await Prisma.grade.findFirst({ where: { testId: parseInt(params.id), user: { isTeacher: true } } });

	const grades = await Prisma.grade.findMany({ where: { testId: parseInt(params.id), user: { isTeacher: false } } });

	const allGrades = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6'];
	let gradeOccurences = new Array(allGrades.length).fill(0);
	const gradeList = grades.map((grade) => grade.grade);

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

	return (
		<div className={'p-4 md:p-12 w-full h-screen bg-black flex flex-col justify-between gap-y-4'}>
			<Image src={logo} alt={'Logo'} width={100} height={200} className={'mx-auto w-full md:w-[400px]'} />
			{teacherGrade && (
				<div className={'flex justify-center relative w-full'}>
					{/* <p className="text-white">Mme Tixhon :</p>
					<h2 className={'text-4xl font-bold text-white'}>{teacherGrade.grade}</h2> */}
					{/* <div className={'flex items-center bg-red-500 relative'}>
						<Image src={ginger} alt={'Logo'} width={120} height={120} className={''} />
						<h2 className={'text-3xl font-bold text-white absolute left-[60px]'}>{teacherGrade.grade}</h2>
					</div> */}

					{/* I want to have the image with a width of 120 and in the center I want to have the h2 containing the teacher's grade */}
					<div className={'flex items-center text-center'}>
						<Image src={ginger} alt={'Logo'} width={120} height={120} className={'inline-flex'} />
						<h2 className={'text-4xl font-bold text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'}>{teacherGrade.grade}</h2>
					</div>
				</div>
			)}
			<Chart data={data} />
		</div>
	);
}
