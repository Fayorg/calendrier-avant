"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface ChartProps {
    data: {
        name: string
        total: number
    }[]
}

export function Chart({...props}: ChartProps) {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={props.data}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    allowDecimals={false}
                    tickFormatter={(value) => `${value}`}
                />
                <Bar dataKey="total" fill="#80a256" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}
