"use server";

import prisma from "@/lib/prisma";

export async function addGrade(testId: number, userId: number, grade: number) {
    const newGrade = await prisma.grade.create({
        data: {
            grade: grade,
            testId: testId,
            userId: userId,
        }
    });

    return newGrade;
}