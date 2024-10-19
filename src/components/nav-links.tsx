'use client'

import Link from "next/link"
import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { usePathname } from "next/navigation"
import { items } from "@/constants/NavLinks"



export default function NavLinks() {
    const pathname = usePathname()
    return (
        <>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                        <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </>)
}