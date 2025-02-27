"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface ProgressBarProps {
    totalTasks?: number
    completedTasks?: number
}

export default function ProgressBar({ totalTasks = 5, completedTasks = 2 }: ProgressBarProps) {
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        const calculatedPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

        const timer = setTimeout(() => {
            setPercentage(calculatedPercentage)
        }, 300)

        return () => clearTimeout(timer)
    }, [totalTasks, completedTasks])

    return (
        <Card className="h-full bg-card/30 backdrop-blur-sm border-0 p-4 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium text-white">Task Completion</h3>
                <motion.span
                    className="text-2xl font-bold text-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={percentage}
                >
                    {percentage}%
                </motion.span>
            </div>

            <div className="relative h-3 w-full bg-muted/30 rounded-full overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>

            <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>{completedTasks} completed</span>
                <span>{totalTasks} total</span>
            </div>
        </Card>
    )
}

