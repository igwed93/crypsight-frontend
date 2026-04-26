'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Sidebar from "@/components/dashboard/Sidebar";
import TopNav from "@/components/dashboard/TopNav";
import StatusFooter from "@/components/dashboard/StatusFooter";

function DashboardLayoutContent({
    children,
}: {
    children: React.ReactNode;
}) {
    const searchParams = useSearchParams();
  const viewMode = searchParams.get('view') === 'compare' ? 'compare' : 'explore';

    return (
        <div className="flex h-screen bg-bg-primary overflow-hidden">
            {/* 1. Hide Sidebar on mobile (hidden), show on large screens (lg:flex) */}
            <div className="hidden lg:flex">
                <Sidebar mode={viewMode} />
            </div>

            <div className="flex flex-col flex-1 overflow-hidden">
                {/* 2. Hide global TopNav on mobile, show on large screens */}
                <div className="hidden lg:block">
                    <TopNav />
                </div>

                {/* 3. Adjust padding for mobile (p-4) vs desktop (p-8) */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                    {children}
                </main>

                {/* 4. Status Footer - Now visible on mobile */}
                <StatusFooter />
            </div>
        </div>
    )
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Suspense fallback={<div className="flex h-screen bg-bg-primary items-center justify-center text-white">Loading...</div>}>
            <DashboardLayoutContent>{children}</DashboardLayoutContent>
        </Suspense>
    );
}