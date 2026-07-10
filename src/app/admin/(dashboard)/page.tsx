"use client";

import { Users, FolderKanban, TrendingUp, Mail } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-space-grotesk">Dashboard Overview</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome to the DarkCode X AI admin panel.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Projects" value="24" icon={<FolderKanban className="text-primary" />} trend="+3 this month" />
        <StatCard title="Total Users" value="1,234" icon={<Users className="text-accent" />} trend="+12% this month" />
        <StatCard title="Total Views" value="45.2K" icon={<TrendingUp className="text-green-400" />} trend="+8% this week" />
        <StatCard title="New Messages" value="12" icon={<Mail className="text-secondary" />} trend="4 unread" />
      </div>

      {/* Recent Activity */}
      <div className="glass p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                U{i}
              </div>
              <div className="flex-1">
                <p className="text-gray-900 dark:text-white font-medium">User logged in</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">admin@darkcodex.ai • 2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend }: { title: string, value: string, icon: React.ReactNode, trend: string }) {
  return (
    <div className="glass p-6 rounded-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">{title}</p>
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-space-grotesk">{value}</h3>
      <p className="text-sm text-primary">{trend}</p>
    </div>
  );
}
