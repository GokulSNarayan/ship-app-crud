import { z } from "zod"

const codeRegex = /^[A-Z]{4}-\d{4}-[A-Z]\d$/;
export const shipformSchema = z.object({
    name: z.string().min(2).max(50),
    length: z.coerce.number().int().min(1).max(1000),
    width: z.coerce.number().int().min(1).max(1000),
    code: z.string().regex(codeRegex,"Code must be in format AAAA-1111-A1 format!").min(12).max(12),
})

type BaseFormSchema = z.infer<typeof shipformSchema>;

export interface EditFormSchema extends BaseFormSchema {}
export interface CreateFormSchema extends BaseFormSchema {}