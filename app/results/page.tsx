"use server";

import {DayCard} from "@components/custom/dayCard";

import Prisma from '@lib/prisma'

export default async function Results() {

    const users = await Prisma.users.findMany(
        {
            include: {
                test: true
            }
        }
    )

    return (
        <div className={"p-12 h-full w-full"}>
            <div className={"h-full w-full grid gap-4 grid-cols-1 auto-rows-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 bg"}>
                {users.map((user) => (
                    <DayCard key={user.id} day={user.test? user.test.testOn.getDate() : 1} name={user.firstName + " " + user.lastName} enabled={user.test? user.test.testOn.getDate() < new Date().getDate() : false} oral={true}/>
                ))}
            </div>
        </div>
    )
}
