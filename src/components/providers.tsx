"use client";

import { ReactNode } from "react";

// import { SessionProvider } from "next-auth/react";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";


export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ReactQueryClientProvider>
            {children}
        </ReactQueryClientProvider>
    );
}
