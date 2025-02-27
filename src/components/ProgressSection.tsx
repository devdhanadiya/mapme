"use client"

import ProgressBar from "./ProgressBar"
import ActionCenter from "./ActionCenter"

interface ProgressSectionProps {
    totalTasks?: number
    completedTasks?: number
    onMarkAllDone?: () => void
    onDeleteAll?: () => void
}

export default function ProgressSection({
    totalTasks = 5,
    completedTasks = 2,
    onMarkAllDone = () => { },
    onDeleteAll = () => { },
}: ProgressSectionProps) {
    return (
        <div className="w-full h-full p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                <ProgressBar totalTasks={totalTasks} completedTasks={completedTasks} />
                <ActionCenter onMarkAllDone={onMarkAllDone} onDeleteAll={onDeleteAll} />
            </div>
        </div>
    )
}

