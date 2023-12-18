"use server";
import prisma from "@/lib/prisma";

export interface Results {
	name: string;
	total: number;
}

export async function getResults(testId: number) {
    const grades = await prisma.grade.findMany({ where: { testId: testId, user: { isTeacher: false } } });

	const allGrades = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6'];
	let gradeOccurences = new Array(allGrades.length).fill(0);
	const gradeList = grades.map((grade) => grade.grade);

	for (let i = 0; i < gradeList.length; i++) {
		gradeOccurences[allGrades.indexOf(gradeList[i].toString())]++;
	}

	let data: Results[] = [];
	for (let i = 0; i < gradeOccurences.length; i++) {
		data.push({
			name: allGrades[i],
			total: gradeOccurences[i],
		});
	}

    return data;
}

export async function getTeacherResult(testId: number) {
    return await prisma.grade.findFirst({ where: { testId: testId, user: { isTeacher: true } } });
}