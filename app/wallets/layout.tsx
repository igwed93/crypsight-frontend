import SidebarFilters from "@/components/wallets/SidebarFilters";
import TopNav from "@/components/wallets/TopNav"; // Your top bar with Search/Connect

export default function WalletsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#0b1221] overflow-hidden">
      {/* This sidebar is ONLY for the wallets section */}
      <SidebarFilters /> 
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}