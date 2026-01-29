import { useState } from "react";

export type ContactStatus = "idle" | "sending" | "success" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (form: HTMLFormElement) => {
    setStatus("sending");
    setError(null);

    const formData = new FormData(form);

    // 🔎 Explicit extraction (no guessing)
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      goal: formData.get("goal"),
      message: formData.get("message"),
      company: formData.get("company"), // honeypot
    };

    // 🧨 Hard guard (prevents silent 400s)
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setError("Required fields missing");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Request failed");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      console.error("Contact submit failed:", err);
      setStatus("error");
      setError(err.message || "Something went wrong");
    }
  };

  const reset = () => {
    setStatus("idle");
    setError(null);
  };

  return { status, error, submit, reset };
}
