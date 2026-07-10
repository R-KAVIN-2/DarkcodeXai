import { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, FolderKanban, FileText, Settings, Users, LogOut, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard | DarkCode X AI",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white dark:bg-[#0A0514] overflow-hidden pt-20">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 backdrop-blur-xl flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white font-space-grotesk">Admin Panel</h2>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <AdminNavLink href="/admin" icon={<LayoutDashboard size={20} />}>Dashboard</AdminNavLink>
          <AdminNavLink href="/admin/projects" icon={<FolderKanban size={20} />}>Projects</AdminNavLink>

          <AdminNavLink href="/admin/messages" icon={<MessageSquare size={20} />}>Messages</AdminNavLink>
          <AdminNavLink href="/admin/users" icon={<Users size={20} />}>Users</AdminNavLink>
          <AdminNavLink href="/admin/settings" icon={<Settings size={20} />}>Settings</AdminNavLink>
        </nav>
        
        <div className="p-4 border-t border-gray-200 dark:border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-red-400 hover:bg-white/5 rounded-lg w-full transition-colors">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}

function AdminNavLink({ href, icon, children }: { href: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors group"
    >
      <span className="group-hover:text-primary transition-colors">{icon}</span>
      <span className="font-medium">{children}</span>
    </Link>
  );
}
