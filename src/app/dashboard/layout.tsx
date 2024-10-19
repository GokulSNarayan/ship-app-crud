import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className="grid lg:grid-cols-12 min-h-screen font-[family-name:var(--font-geist-sans)]">
            <SidebarProvider>
                <AppSidebar />
            <main className="col-span-3 h-screen lg:col-span-10 lg:border-l">
                {/* <SidebarTrigger /> */}
                {children}
            </main>
            </SidebarProvider>
        </div>
    )
}