import {NextResponse} from "next/server";

import prisma from '@lib/prisma';
interface IBody {
    key: string
    grade: number
}

export async function POST(req: Request){
    const body = await req.json() as IBody
    await prisma.grade.findFirst({where: {key: body.key}}).then(async (grade) => {
        if (grade) {
            await prisma.grade.create({data: {test: 1, grade: body.grade, key: body.key}})
            return NextResponse.json({message: 'Grade updated', cookie: 'voted=true'}, {status: 200})
        } else {
            return NextResponse.json(
                JSON.stringify({message: 'Key not found'}), {status: 404}
            )
        }
    });
    return NextResponse.json({message: 'Server error'}, {status: 500})
}
