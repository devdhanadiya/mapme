"use client";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { cn } from "@/lib/utils"; // ShadCN utility function
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "lucide-react";
import { DateTimeProps } from "@/types/form";

export default function DateTimePicker({ value, onChange, }: DateTimeProps) {

    return (
        <div className="relative w-full">
            <ReactDatePicker
                selected={value}
                onChange={onChange}
                showTimeSelect
                dateFormat="Pp"
                className="w-full"
                customInput={
                    <div className="relative">
                        <Input
                            className="pr-10 bg-background text-foreground cursor-pointer"
                            value={value ? value.toLocaleString() : ""}
                            readOnly
                        />
                        <CalendarIcon className="absolute right-2 top-2.5 w-5 h-5 text-gray-400" />
                    </div>
                }
                popperClassName={cn(
                    "border border-border shadow-lg rounded-lg p-2 bg-black text-white"
                )}
            />
        </div>
    );
}
