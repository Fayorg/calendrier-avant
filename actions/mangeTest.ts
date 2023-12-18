"use server";

import prisma from "@/lib/prisma";

export async function setTestActive(id: number, active: boolean) {
    const users = await prisma.users.findFirst();

    console.log(users);

    return true;

}