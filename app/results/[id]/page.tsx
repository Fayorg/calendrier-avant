"use server";
import {Chart} from "@components/custom/chart";

import Prisma from '@lib/prisma'

interface data {
    name: string
    total: number
}

export default async function Page({ params }: { params: { id: string } }) {
    const grades = await Prisma.grade.findMany({
        where: {
            testId: parseInt(params.id)
        }
    })

    const allGrades = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6']
    let gradeOccurences = new Array(allGrades.length).fill(0)
    const gradeList = grades.map((grade) => grade.grade)

    for (let i = 0; i < gradeList.length; i++) {
        gradeOccurences[allGrades.indexOf(gradeList[i].toString())]++
    }

    let data: data[] = []
    for (let i = 0; i < gradeOccurences.length; i++) {
        data.push({
            name: allGrades[i],
            total: gradeOccurences[i]
        })
    }

    for (let grade in grades) {
        console.log(grade);
    }

    return <div>
        <Chart data={data}/>
    </div>
}
