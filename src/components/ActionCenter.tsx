"use client"

import { CheckCircle, Trash2 } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ActionCenterProps {
    onMarkAllDone?: () => void
    onDeleteAll?: () => void
}

export default function ActionCenter({ onMarkAllDone = () => { }, onDeleteAll = () => { } }: ActionCenterProps) {
    return (
        <Card className="bg-background/30 backdrop-blur-sm border-0 p-6 rounded-xl shadow-lg h-full">
            <div className="flex flex-col h-full">
                <h3 className="text-lg font-medium text-white mb-4">Action Center</h3>

                <div className="flex flex-col md:flex-row gap-4 mt-auto mb-auto">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="flex-1 h-16 rounded-xl border-muted bg-background/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
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
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Mark all tasks as completed</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="flex-1 h-16 rounded-xl border-muted bg-background/50 hover:bg-destructive/20 hover:text-destructive transition-all duration-300"
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
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Delete all tasks</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </Card>
    )
}

