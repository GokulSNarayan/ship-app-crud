'use client'

import { deleteShip } from "@/app/dashboard/ships/actions";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function ShipDeleteDialog({ params }: { params: { id: string } }) {
    const [isOpen, setIsOpen] = useState(true);
    const { toast } = useToast()
    const router = useRouter()
    const onClose = () => {
        setIsOpen(false)
        router.back()
    }
    const onDelete = async () => {
        const { success, message } = await deleteShip(Number(params.id))
        if(success){
            toast({
                title: message,
                description: "The record was deleted successfully!",
              })
        } else {
            toast({
                title: message,
                description: "There was some error while deleting the record!",
                variant:"destructive"
              })
        }
        router.back()
    }
    return (
        <Dialog open={isOpen} defaultOpen={true} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Are you sure you want to delete this record?</DialogTitle>
                </DialogHeader>
                <DialogFooter>
                    <Button variant={"outline"} onClick={onClose}>Cancel</Button>
                    <Button variant="destructive" onClick={onDelete}>Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}