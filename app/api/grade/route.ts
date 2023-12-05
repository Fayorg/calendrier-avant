import {NextResponse} from "next/server";

import prisma from "@/lib/prisma";
interface IBody {
    key: string
    grade: number
    testId: number
}

export async function POST(req: Request){
    const body: IBody = await req.json();

    const test = await prisma.test.findFirst({
        select: {
            id: true,
            testOn: true,
            testOf: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    isTeacher: true
                }
            },
            grades: {
                select: {
                    note: true,
                    grade: true,
                    createdAt: true,
                },
                where: {
                    user: {
                        key: body.key
                    }
                }
            }
        },
        where: {
            id: body.testId
        }
    });

    if(!test){
        return NextResponse.json({error: "Test not found"}, {status: 404});
    }

    if(test.grades.length > 0){
        return NextResponse.json({error: "You have already voted"}, {status: 403});
    }

    const grade = await prisma.grade.create({
        data: {
            note: "",
            grade: body.grade,
            user: {
                connect: {
                    key: body.key
                }
            },
            test: {
                connect: {
                    id: test.id
                }
            }
        }
    });

    return NextResponse.json({
        id: test.id,
        testOn: test.testOn,
        testOf: {
            firstName: test.testOf.firstName,
            lastName: test.testOf.lastName,
            isTeacher: test.testOf.isTeacher
        },
        vote: {
            hasVoted: test.grades?.length > 0,
            grade: grade.grade,
            note: grade.note,
            createdAt: grade.createdAt
        }
    });
}
