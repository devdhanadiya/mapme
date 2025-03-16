export const DateParser = (date: Date): string => {
    if (!date) return "Invalid Date";

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return "Invalid Date";

    return parsedDate.toISOString();
};
