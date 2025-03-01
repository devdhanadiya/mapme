import { DateFormatProps } from "@/types";

export const formatDate = ({ date, parser }: DateFormatProps): string => {
    if (!date) return "Invalid Date";

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return "Invalid Date";

    if (parser === "json") {
        return parsedDate.toISOString();
    } else {
        return parsedDate.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }
};
