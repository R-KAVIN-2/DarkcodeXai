import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    
    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save to public/logo.png
    const filePath = path.join(process.cwd(), "public", "logo.png");
    await writeFile(filePath, buffer);

    return NextResponse.json({ success: true, message: "Logo uploaded successfully" });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to upload logo." }, { status: 500 });
  }
}
