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
        <div className="w-full h-full px-6 py-4">
            <h2 className="text-2xl font-semibold text-white mb-4">Progress</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(100%-3rem)]">
                {/* Progress Bar Section */}
                <ProgressBar />

                {/* Action Center */}
                <ActionCenter onMarkAllDone={onMarkAllDone} onDeleteAll={onDeleteAll} />
            </div>
        </div>
    )
}

