import {NextResponse} from "next/server";

import prisma from "@/lib/prisma";
interface IBody {
    key: string
    grade: number
}

export async function POST(req: Request){
    const body = await req.json() as IBody
    const grade = await prisma.grade.findFirst({ select: { id: true}, where: { oral: 1, key: { key: body.key } } });
    if(grade) return NextResponse.json({message: 'Deja vote'}, {status: 403});

    const gradeCreated = await prisma.grade.create({ data: { key: { connect: { key: body.key } }, grade: body.grade, oral: 1 } });
    if(gradeCreated) return NextResponse.json({message: 'Vote enregistré'}, {status: 200});

    return NextResponse.json({message: 'Server error'}, {status: 500})
}
