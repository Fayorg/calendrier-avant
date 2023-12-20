"use server";

import prisma from "@/lib/prisma";

export async function getGrade(testId: number, userId: number) {
    const grade = await prisma.grade.findFirst({
        select: {
            grade: true,
            id: true,
            testId: true,
            createdAt: true,
        },
        where: {
            testId: testId,
            userId: userId
        }
    });

    return grade;
}

export async function addGrade(testId: number, userId: number, grade: number, note: string | null) {
    const newGrade = await prisma.grade.create({
        data: {
            grade: grade,
            testId: testId,
            userId: userId,
        }
    });

    return newGrade;
}