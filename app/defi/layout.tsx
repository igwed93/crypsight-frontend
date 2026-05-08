'use client';

import { Suspense } from 'react';
import TopNav from "@/components/defi/TopNav";
import SidebarNav from "@/components/defi/SidebarNav";
import RightSidebar from "@/components/defi/RightSidebar";

export default function DeFiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-screen min-h-screen bg-[#060910] text-white flex flex-col">
      {/* TOP NAVIGATION */}
      <div className="w-full">
        <Suspense fallback={null}>
          <TopNav />
        </Suspense>
      </div>

      {/* MAIN GRID LAYOUT */}
      <div className="w-full flex flex-col lg:flex-row overflow-hidden">
        
        {/* COLUMN 1: LEFT SIDEBAR (Standard Nav) */}
        <aside className="hidden lg:block w-[20%] min-w-50 overflow-y-auto">
          <SidebarNav />
        </aside>

        {/* COLUMNS 2 & 3: MAIN CONTENT (The Page)
            This spans the middle 50% of the screen.
        */}
        <main className="flex-1 min-w-0 flex flex-col overflow-y-auto">
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </main>

        {/* COLUMN 4: RIGHT SIDEBAR (Academy/Alpha)
            This is now locked to the far right of the screen.
        */}
        <aside style={{width: '30%'}} className="hidden lg:flex shrink-0 h-screen flex-col sticky top-0 overflow-y-auto custom-scrollbar">
          <RightSidebar />
        </aside>
        
        <aside style={{width: '100%'}} className="w-full lg:hidden">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}