"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadLogoPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setMessage("Logo uploaded successfully! Redirecting to home...");
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 2000);
      } else {
        setMessage("Upload failed.");
      }
    } catch (err) {
      setMessage("Upload error.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center container mx-auto px-6">
      <div className="glass p-12 rounded-3xl max-w-md w-full text-center">
        <h1 className="text-3xl font-space-grotesk font-bold text-white mb-6">Add Your Logo</h1>
        <p className="text-gray-400 mb-8">Please select your logo file from your computer to add it directly to the website.</p>
        
        <form onSubmit={handleUpload} className="space-y-6">
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30"
          />
          
          <button 
            type="submit" 
            disabled={!file || uploading}
            className="w-full py-3 bg-primary text-background rounded-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "Upload Logo"}
          </button>
        </form>
        
        {message && <p className="mt-4 text-white font-medium">{message}</p>}
      </div>
    </div>
  );
}
