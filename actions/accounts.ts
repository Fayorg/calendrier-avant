"use server";

import prisma from "@/lib/prisma";
import { Users } from "@prisma/client";

interface GetAccountsParameters {
    take?: number;
    skip?: number;
}

export type Account = Pick<Users, "id" | "firstName" | "lastName" | "isAdmin" | "isTeacher">;

export async function getAccounts(args?: GetAccountsParameters): Promise<Account[]> {
    return await prisma.users.findMany({
        take: args?.take,
        skip: args?.skip,
        orderBy: {
            id: "asc",
        },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            isAdmin: true,
            isTeacher: true,
        }
    });
}