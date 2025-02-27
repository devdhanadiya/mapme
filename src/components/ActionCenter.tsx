"use client"

import { CheckCircle, Trash2 } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ActionCenterProps {
    onMarkAllDone?: () => void
    onDeleteAll?: () => void
}

export default function ActionCenter({ onMarkAllDone = () => { }, onDeleteAll = () => { } }: ActionCenterProps) {
    return (
        <Card className="h-full bg-card/30 backdrop-blur-sm border-0 p-4 flex flex-col">
            <div className="flex-1 grid grid-cols-2 gap-3">
                <Button
                    variant="outline"
                    className="h-full rounded-xl border-muted bg-background/50 hover:bg-green-500/20 hover:text-green-500 transition-all duration-300"
                    onClick={onMarkAllDone}
                >
                    <motion.div
                        className="flex flex-col items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <CheckCircle className="h-6 w-6" />
                        <span className="text-xs">Mark All Done</span>
                    </motion.div>
                </Button>

                <Button
                    variant="outline"
                    className="h-full rounded-xl border-muted bg-background/50 hover:bg-red-500/20 hover:text-red-500 transition-all duration-300"
                    onClick={onDeleteAll}
                >
                    <motion.div
                        className="flex flex-col items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Trash2 className="h-6 w-6" />
                        <span className="text-xs">Delete All</span>
                    </motion.div>
                </Button>
            </div>
        </Card>
    )
}

