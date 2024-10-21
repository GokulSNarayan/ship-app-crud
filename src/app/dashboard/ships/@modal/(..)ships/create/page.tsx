'use client'

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreateForm } from "../../../components/create-form";

export default function ShipCreateDialog() {
    const [isOpen, setIsOpen] = useState(true);  
    const router = useRouter()
    const onClose = () => {
        setIsOpen(false)
        router.back()
    }
    return (
        <Dialog open={isOpen} defaultOpen={true} onOpenChange={onClose}>
            <DialogContent aria-describedby="create-ship-description">
                <DialogHeader>
                    <DialogTitle>Create Ship record:</DialogTitle>
                   <CreateForm  />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}