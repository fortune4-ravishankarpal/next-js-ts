"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
let queryClient = new QueryClient();
function MyApp({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <>{children}</>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default MyApp;
