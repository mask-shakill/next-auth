import DashBoardSidebar from "@/components/DashBoardSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
        <DashBoardSidebar/>
        <main className="pl-8 pt-5"> {children}</main>
    </div>
  );
}
