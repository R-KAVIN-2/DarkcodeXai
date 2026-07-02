"use server";

import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function submitContactForm(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!firstName || !email || !message) {
      return { error: "First Name, Email, and Message are required." };
    }

    const fullName = `${firstName} ${lastName}`.trim();

    // 1. Save to Database
    await prisma.message.create({
      data: {
        name: fullName,
        email,
        content: message,
      },
    });

    // 2. Send Email (Only if SMTP credentials are provided)
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    if (SMTP_EMAIL && SMTP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: SMTP_EMAIL,
          pass: SMTP_PASSWORD,
        },
      });

      const mailOptions = {
        from: `"${fullName}" <${email}>`,
        to: "infodarkcodexai@gmail.com",
        subject: `New Contact Submission from ${fullName}`,
        text: `You received a new message from your website contact form:\n\nName: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h3>New Contact Submission</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.warn("SMTP credentials not configured. Message saved to database but email not sent.");
    }

    return { success: true };
  } catch (error) {
    console.error("Contact Form Error:", error);
    return { error: "An unexpected error occurred while sending your message." };
  }
}
