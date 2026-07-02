import { prisma } from "@/lib/prisma";
import { Mail, Calendar, CheckCircle } from "lucide-react";
import { revalidatePath } from "next/cache";

async function markAsRead(id: string) {
  "use server";
  await prisma.message.update({
    where: { id },
    data: { isRead: true }
  });
  revalidatePath("/admin/messages");
}

export default async function MessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white font-space-grotesk">Messages Inbox</h1>
          <p className="text-gray-400 mt-1">View and manage contact form submissions.</p>
        </div>
      </div>

      <div className="glass rounded-2xl overflow-hidden border border-white/10">
        {messages.length === 0 ? (
          <div className="p-12 text-center text-gray-400">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>No messages yet.</p>
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`p-6 transition-colors ${msg.isRead ? 'bg-transparent opacity-70' : 'bg-white/5 border-l-4 border-l-primary'}`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-4">
                      <h3 className="text-lg font-bold text-white">{msg.name}</h3>
                      <span className="text-sm text-gray-400 px-2 py-1 bg-white/5 rounded-full">
                        {msg.email}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="text-gray-300 whitespace-pre-wrap bg-black/20 p-4 rounded-xl border border-white/5 text-sm leading-relaxed">
                      {msg.content}
                    </div>
                  </div>

                  {!msg.isRead && (
                    <form action={markAsRead.bind(null, msg.id)}>
                      <button 
                        type="submit"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-sm font-medium transition-colors"
                      >
                        <CheckCircle size={16} />
                        Mark Read
                      </button>
                    </form>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
