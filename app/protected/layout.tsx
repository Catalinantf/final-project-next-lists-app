import SideNav from "@/components/ui/home/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  h-screen space-between bg-slate-800 flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
