"use client";

import { Lock } from "lucide-react"

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
    enabled?: boolean | false,
    oral?: boolean | true,
}

function say() {
    alert("Hello")
}

export function DayCard({ className, ...props }: DayCardProps) {
    return (
        <Card className={cn("w-[300px] h-[300px]", className)} {...props} onClick={say}>
            <CardContent className="p-4 gap-4 h-full">
                {props.enabled ?
                <div className="rounded-md p-4 h-full flex flex-col items-end bg-blue-500">
                    <h1 className="text-[100px] font-bold justify-end">1</h1>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold">Michal Polka</h2>
                    </div>
                </div>
                :
                <div className="rounded-md h-full w-full p-4 grid place-content-center">
                    <Lock size={200}/>
                </div>
                }
            </CardContent>
        </Card>
    )
}
