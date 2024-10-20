'use client'

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EditForm } from "../../../components/edit-form";

export default function ShipEditDialog({ params }: { params: { id: string } }) {
    const [isOpen, setIsOpen] = useState(true);  
    const router = useRouter()
    const { data, isLoading } = useQuery({
        queryKey: ['ship', params.id],
        queryFn: async ({ queryKey }) => {
            const id = queryKey[1]
            const response = await fetch(`/api/ship?id=${id}`)
            return response.json()
        }
    })
    const onClose = () => {
        setIsOpen(false)
        router.back()
    }
    return (
        <Dialog open={isOpen} defaultOpen={true} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Ship:</DialogTitle>
                    {isLoading ? <h1>Loading...</h1> : <EditForm data={data[0]} />}
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}