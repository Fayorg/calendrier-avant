"use client";

import {DayCard} from "@components/custom/dayCard";

export default function Results() {
    return (
        <div className={"p-12 h-full w-full"}>
            <div className={"h-full w-full bg-green-400 grid auto-cols-max auto-rows-max gap-12 content-start"}>
                <DayCard day={1} enabled={true} name={"Michal Polka"}/>
                <DayCard day={1} name={"Michal Polka"}/>
                <DayCard day={1} enabled={true} name={"Michal Polka"}/>
                <DayCard day={1} name={"Michal Polka"}/>
                <DayCard day={1} enabled={true} name={"Michal Polka"}/>
                <DayCard day={1} name={"Michal Polka"}/>
                <DayCard day={1} enabled={true} name={"Michal Polka"}/>
                <DayCard day={1} name={"Michal Polka"}/>
                <DayCard day={1} enabled={true} name={"Michal Polka"}/>
                <DayCard day={1} name={"Michal Polka"}/>
            </div>
        </div>
    )
}
