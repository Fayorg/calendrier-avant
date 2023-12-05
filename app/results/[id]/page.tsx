"use server";
import {Chart} from "@components/custom/chart";

import Prisma from '@lib/prisma'

export default async function Page({ params }: { params: { id: string } }) {
    const grades = await Prisma.grade.findMany({
        where: {
            testId: parseInt(params.id)
        }
    })

    for (let grade in grades) {
        console.log(grade);
    }

    return <div>
        My Post: {params.id}
        <Chart />
    </div>
}
