"use client";

import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

interface DayCardProps extends CardProps {
    day: number,
    name: string,
    enabled: boolean
}

export function DayCard({ className, ...props }: DayCardProps) {
    return (
        <Card className={cn("w-[300px]", className)} {...props}>
            <CardContent className="grid gap-4">
                {props.enabled ?
                <div className="rounded-md p-4">
                    <h1 className="text-[100px] font-bold bg-red-700">1</h1>
                    <div className="flex flex-col bg-blue-500">
                        <h2 className="text-2xl font-bold">Michal Polka</h2>
                        <p className="text-xl">Description</p>
                    </div>
                </div>
                :
                <div className="rounded-md p-4">
                    <h1 className="text-[100px] font-bold bg-red-700">1</h1>
                    <div className="flex flex-col bg-blue-500">
                        <h2 className="text-2xl font-bold">Michal Polka</h2>
                        <p className="text-xl">Description</p>
                    </div>
                </div>
                }
            </CardContent>
        </Card>
    )
}
