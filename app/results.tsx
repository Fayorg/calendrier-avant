"use server";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

function getGrades() {
    return prisma.grade.findMany()
}


const results = async () => {
    const grades = await getGrades()
    const gradesArray = grades.map(grade => grade.grade.toString())
    const allGrades = ["1", "1,5", "2", "2,5", "3", "3,5", "4", "4,5", "5", "5,5", "6"]
    const gradesCount = allGrades.map(grade => gradesArray.filter(g => g === grade).length)
    console.log(grades)

    return (
        <div>
            <Line
                data={{
                    labels: allGrades,
                    datasets: [
                        {
                            data: gradesCount,
                            backgroundColor: "purple",
                        },
                    ],
                }}
            />
        </div>
    );
};
export default results;
