import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest){
    const date = req.nextUrl.searchParams.get("date");

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
            }
        },
        where: {
            testOn: (date ? new Date(date) : new Date())
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
        }
    });
}
