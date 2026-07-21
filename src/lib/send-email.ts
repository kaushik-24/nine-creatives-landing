"use server";

import type { FormResult } from "./types";

function validateField(name: string, value: string): string | null {
  if (name === "name" && value.length < 2) return "Name must be at least 2 characters.";
  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return "Please enter a valid email address.";
  if (name === "message" && value.length < 10)
    return "Message must be at least 10 characters.";
  return null;
}

export async function sendEmail(_prevState: FormResult, formData: FormData): Promise<FormResult> {
  const entries = [
    ["name", formData.get("name") as string],
    ["email", formData.get("email") as string],
    ["company", (formData.get("company") as string) || ""],
    ["phone", (formData.get("phone") as string) || ""],
    ["message", formData.get("message") as string],
  ] as const;

  for (const [field, value] of entries) {
    const error = validateField(field, value);
    if (error) return { success: false, message: error };
  }

  const name = entries[0][1];
  const email = entries[1][1];
  const company = entries[2][1];
  const phone = entries[3][1];
  const message = entries[4][1];

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const toEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  if (!serviceId || !templateId || !publicKey || !toEmail) {
    console.error("Missing EmailJS configuration");
    return { success: false, message: "Email service is not configured." };
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          company,
          phone,
          message,
          to_email: toEmail,
        },
      }),
    });

    if (response.ok) {
      return { success: true, message: "Message sent successfully! We'll be in touch soon." };
    }

    const text = await response.text();
    console.error("EmailJS API error:", response.status, text);
    return { success: false, message: "Failed to send message. Please try again." };
  } catch (error) {
    console.error("EmailJS send error:", error);
    return { success: false, message: "Something went wrong. Please try again later." };
  }
}
