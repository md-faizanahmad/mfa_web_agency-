// src/hooks/useContactForm.ts
import { contactSchema } from "@/validation/contact.schema";
import { useState } from "react";
import { ZodError } from "zod";

export type ContactStatus = "idle" | "sending" | "success" | "error";

interface ContactError {
  message: string;
}

export function useContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [error, setError] = useState<ContactError | null>(null);

  const submit = async (form: HTMLFormElement): Promise<void> => {
    setStatus("sending");
    setError(null);

    const formData = new FormData(form);

    const rawData: Record<string, FormDataEntryValue | null> = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      goal: formData.get("goal"),
      message: formData.get("message"),
      company: formData.get("company"),
    };

    // 🔒 Zod validation (client-side)
    const parsed = contactSchema.safeParse(rawData);

    if (!parsed.success) {
      const zodError: ZodError = parsed.error;
      setStatus("error");
      setError({ message: zodError.issues[0]?.message ?? "Invalid input" });
      return;
    }

    // 🐝 Honeypot: silently accept
    if (parsed.data.company) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const response: unknown = await res.json().catch(() => null);

        if (
          typeof response === "object" &&
          response !== null &&
          "error" in response &&
          typeof (response as { error: unknown }).error === "string"
        ) {
          throw new Error((response as { error: string }).error);
        }

        throw new Error("Unable to submit the form at this time.");
      }

      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      console.error("Contact submission failed:", err);

      setStatus("error");

      if (err instanceof Error) {
        setError({ message: err.message });
      } else {
        setError({ message: "Unexpected error occurred." });
      }
    }
  };

  const reset = (): void => {
    setStatus("idle");
    setError(null);
  };

  return {
    status,
    error,
    submit,
    reset,
  };
}
