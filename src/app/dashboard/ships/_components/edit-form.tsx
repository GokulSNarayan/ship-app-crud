'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Ship } from "@/db/schema";
import { editShipData } from "../actions";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Typography } from "@/components/ui/typography";
import { EditFormSchema, shipformSchema } from "./types";




export function EditForm({ data }: { data: Ship }) {
    const { toast } = useToast()
    const router = useRouter()
    const queryClient = useQueryClient()
    const form = useForm<EditFormSchema>({
        resolver: zodResolver(shipformSchema),
        mode: 'onSubmit',
        defaultValues: {
            name: '',
            length: 0,
            width: 0,
            code: ''
        },
        values: {
            name: data.name,
            length: data.length,
            width: data.width,
            code: data.code
        }
    })
    async function onSubmit(values: EditFormSchema) {
        const { success, message } = await editShipData(values, data.shipId)
        if (success) {
            await queryClient.invalidateQueries({ queryKey: ['ship', data.shipId] })
            toast({
                title: message,
                description: "The record was updated successfully!",
            })
        } else {
            toast({
                title: message,
                description: "There was some error while updating the record!",
                variant: "destructive"
            })
        }
        form.reset()
        router.back()
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
                            {form.formState.errors.name && <Typography className="text-red-500" variant="p">{form.formState.errors.name.message}</Typography>}
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
                            {form.formState.errors.length && <Typography className="text-red-500" variant="p">{form.formState.errors.length.message}</Typography>}
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
                            {form.formState.errors.width && <Typography className="text-red-500" variant="p">{form.formState.errors.width.message}</Typography>}
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
                            {form.formState.errors.code && <Typography className="text-red-500" variant="p">{form.formState.errors.code.message}</Typography>}
                        </FormItem>
                    )} />
                <Button className="my-2" type="submit">Save</Button>
            </form>
        </Form>
    )
}

