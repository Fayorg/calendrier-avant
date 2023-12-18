"use client";

import React from 'react';
import { useTimer } from 'react-timer-hook';

import { Button } from "@components/ui/button";
import { PauseIcon, Play} from "lucide-react";

interface MyTimerProps {
    expiryTimestamp: Date;
    onEnd?: () => void;
}

export default function MyTimer({ expiryTimestamp, onEnd } : MyTimerProps) {
    const {
        seconds,
        minutes,
        isRunning,
        pause,
        resume,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => onEnd && onEnd()
    })

    return (
        <div className={"text-white text-center flex flex-col"}>
            <div className={"font-bold text-8xl"}>
                <span>{String(minutes).padStart(2, "0")}</span>:
                <span>{String(seconds).padStart(2, "0")}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <div className={"self-center flex gap-4"}>
                <Button onClick={pause} disabled={!isRunning}>
                    <PauseIcon/>
                </Button>
                <Button onClick={resume} disabled={isRunning}>
                    <Play/>
                </Button>
            </div>
        </div>
    );
}
