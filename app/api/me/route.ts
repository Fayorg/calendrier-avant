import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest){
    const key = req.nextUrl.searchParams.get("key");

    if(!key) return NextResponse.json({error: "No key provided"}, {status: 400});

    const user = await prisma.users.findUnique({
        where: {
            key
        }
    });

    if(!user) return NextResponse.json({error: "Key not found"}, {status: 404});

    return NextResponse.json({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        isTeacher: user.isTeacher,
    });
    
}
