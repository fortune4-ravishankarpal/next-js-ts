"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/component/app-sidebar";

function MyApp({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <SidebarProvider>
                <AppSidebar />
                <main className="relative flex min-h-svh flex-1 flex-col ">
                    <SidebarTrigger />
                    <div className="p-4 min-w-full">{children}</div>
                </main>
            </SidebarProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
