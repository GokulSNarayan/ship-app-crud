'use client'

import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Ship } from "@/db/schema";
import { editShipData } from "../actions";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

const codeRegex = /^[A-Z]{4}-\d{4}-[A-Z]\d$/;
const formSchema = z.object({
    name: z.string().min(2).max(50),
    length: z.coerce.number().int().min(1).max(1000),
    width: z.coerce.number().int().min(1).max(1000),
    code: z.string().min(12).max(12).regex(codeRegex),
})

export type EditFormValues = z.infer<typeof formSchema>

export function EditForm({ data }: { data: Ship }) {
    const router = useRouter()
    const queryClient = useQueryClient()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            length: 0,
            width: 0,
            code: ''
        },
        values:{
            name: data.name,
            length: data.length,
            width: data.width,
            code: data.code
        }
    })
    console.log("errors", form.formState.errors)
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { success } = await editShipData(values, data.shipId)
        if(success) {
            await queryClient.invalidateQueries({queryKey:['ship', data.shipId]})
            form.reset()
            router.back()
        }
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ship Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="length"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ship Length</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                        </FormItem>
                    )} />
                <FormField
                    control={form.control}
                    name="width"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ship Width</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                        </FormItem>
                    )} />
                <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ship Code</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )} />
                <Button className="my-2" type="submit">Save</Button>
            </form>
        </Form>
    )
}

