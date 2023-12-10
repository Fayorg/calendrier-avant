"use client";

import { Lock } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

import { useRouter } from "next/navigation";


interface DayCardProps extends CardProps {
    day: number,
    name: string,
    enabled?: boolean,
    oral?: boolean,
}

export function DayCard({ className, ...props }: DayCardProps) {
    const router = useRouter();

    function route(enabled: boolean, day: number) {
        if (enabled) {
            router.push("/results/" + day);
        } else {
            return;
        }
    }

    return (
        <Card className={cn(`w-full ${props.enabled && props.oral ? "hover:bg-slate-100 hover:cursor-pointer" : "hover:cursor-not-allowed"}`, className)} {...props} onClick={() => {route(props.enabled || false, props.day)}}>
            <CardContent className="p-4 gap-4 h-full">
                {props.enabled ?
                <div className="rounded-md p-4 h-full flex flex-col items-end">
                    <h1 className="text-[100px] font-bold justify-end">{props.day}</h1>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold">{props.name}</h2>
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
