import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest){
    const date = req.nextUrl.searchParams.get("date");
    const key = req.nextUrl.searchParams.get("key");
    
    const usableDate = new Date(date || new Date());

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
                        key: key || ""
                    }
                }
            }
        },
        where: {
            testOn: new Date(usableDate.getFullYear() + "-" + (usableDate.getMonth() + 1) + "-" + (usableDate.getDate().toString().length === 1 ? "0" + usableDate.getDate() : usableDate.getDate()))
        }
    });

    if(!test){
        return NextResponse.json({error: "Test not found"}, {status: 404});
    }

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
            grade: test.grades[0]?.grade,
            note: test.grades[0]?.note,
            createdAt: test.grades[0]?.createdAt
        }
    });
}
