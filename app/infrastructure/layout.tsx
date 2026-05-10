'use client';

import { Suspense } from 'react';
import InfraSidebar from '@/components/infrastructure/InfraSidebar';
import InfraTopNav from '@/components/infrastructure/InfraTopNav';

export default function InfraLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-bg-primary text-white flex flex-col overflow-hidden">
      {/* TOP NAVIGATION */}
      <header className="w-full shrink-0 z-100 border-b border-white/5 bg-bg-primary">
        <Suspense fallback={null}>
          <InfraTopNav />
        </Suspense>
      </header>

      {/* MAIN LAYOUT BODY */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* COLUMN 1: SLIM LEFT SIDEBAR
            Using fixed pixels (260px) or w-65 to prevent it from shrinking or growing.
        */}
        <aside className="hidden lg:flex flex-col w-65 shrink-0 border-r border-white/5 bg-bg-primary h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar">
            <InfraSidebar />
        </aside>

        {/* COLUMN 2: MAIN CONTENT AREA
            'flex-1' ensures it takes up all remaining space.
            'overflow-y-auto' allows this specific section to scroll.
        */}
        <main className="flex-1 min-w-0 h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar bg-bg-primary relative">
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </main>
      </div>
    </div>
  );
}