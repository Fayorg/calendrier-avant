import {NextResponse} from "next/server";

import prisma from "@/lib/prisma";
interface IBody {
    key: string
    grade: number
}

export async function POST(req: Request){
    return NextResponse.json({message: 'Server error'}, {status: 500})
}
