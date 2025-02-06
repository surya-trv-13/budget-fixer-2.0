import {z} from "zod";

export const MonthYearSchema = z.object( {
    monthYear: z.date(),
})