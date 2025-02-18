"use client"

import { useState, useEffect } from "react"
import { toast, Toaster } from "react-hot-toast"
import { IToast } from "@/types"
import { CheckCircle, XCircle, AlertTriangle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const time = { duration: 3000 }

const ToastMessage = ({ type, message, t }: IToast) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(t.visible)
    }, [t.visible])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center w-full max-w-sm p-4 text-white bg-[rgba(20,20,20,0.9)] shadow-lg rounded-lg backdrop-blur-md"
                >
                    {type === "success" && <CheckCircle className="text-green-400 w-5 h-5 mr-3" />}
                    {type === "error" && <XCircle className="text-red-400 w-5 h-5 mr-3" />}
                    {type === "warning" && <AlertTriangle className="text-yellow-400 w-5 h-5 mr-3" />}
                    <span className="text-sm flex-1">{message}</span>
                    <button onClick={() => toast.dismiss(t.id)} className="ml-3 text-gray-400 hover:text-white">
                        <X className="w-4 h-4" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export const Toast = {
    success: (message: string) => toast.custom((t) => <ToastMessage type="success" message={message} t={t} />, time),
    error: (message: string) => toast.custom((t) => <ToastMessage type="error" message={message} t={t} />, time),
    warning: (message: string) => toast.custom((t) => <ToastMessage type="warning" message={message} t={t} />, time),
}

export const ToasterWrapper = () => <Toaster position="top-center" />

