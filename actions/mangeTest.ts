"use server";

import prisma from "@/lib/prisma";

// Only a test function
export async function setTestActive(id: number, active: boolean) {
    const users = await prisma.users.findFirst();

    console.log(users);

    return true;

}

export async function getFirstActiveTest(date: Date) {
    return await prisma.test.findFirst({
		select: {
			id: true,
			isActive: true,
			testOf: {
				select: {
					id: true,
					firstName: true,
					lastName: true,
					isTeacher: true,
				},
			},
			createdAt: true,
			testOn: true,
		},
		where: {
			isActive: true,
			testOn: new Date(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate())),
		},
	});
}

export async function getFirstActiveTestWithGrade(date: Date, userId: number) {
    return await prisma.test.findFirst({
		select: {
			id: true,
			isActive: true,
			testOf: {
				select: {
					id: true,
					firstName: true,
					lastName: true,
					isTeacher: true,
				},
			},
            grades: {
                select: {
                    id: true,
                    grade: true,
                    createdAt: true,
                },
                take: 1,
                where: {
                    userId: userId
                }
            },
			createdAt: true,
			testOn: true,
		},
		where: {
			isActive: true,
			testOn: new Date(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate())),
		},
	});
}