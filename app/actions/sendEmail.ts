"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Basic server-side validation
  if (!name || !email || !message) {
    return { success: false, error: "Please fill out all required fields." };
  }

  try {
    await resend.emails.send({
      from: "Mama Kevina Website <onboarding@resend.dev>", 
      to: "info@mamakevinafoundation.org", 
      subject: `New Contact Form: ${subject || "General Inquiry"}`,
      replyTo: email, 
      html: `
        <h2>New Message from Mama Kevina Foundation Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error: "Failed to send email. Please try again later." };
  }
}