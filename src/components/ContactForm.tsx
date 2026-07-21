"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, TextArea } from "@/components/ui/Input";
import { sendEmail } from "@/lib/send-email";
import { Toaster, toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { useEffect } from "react";

const initialState = { success: false, message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendEmail, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#18181b",
            border: "1px solid #27272a",
            color: "#fafafa",
          },
        }}
      />
      <form action={formAction} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Name *"
            name="name"
            type="text"
            placeholder="Your name"
            required
            minLength={2}
          />
          <Input
            label="Email *"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Company"
            name="company"
            type="text"
            placeholder="Your company (optional)"
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000 (optional)"
          />
        </div>
        <TextArea
          label="Message *"
          name="message"
          placeholder="Tell us about your project..."
          required
          minLength={10}
          maxLength={2000}
        />
        <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
          {pending ? (
            <>
              <Loader2 size={18} className="mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={16} className="ml-2" />
            </>
          )}
        </Button>
      </form>
    </>
  );
}
