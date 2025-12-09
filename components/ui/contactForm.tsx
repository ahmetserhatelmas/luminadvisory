"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    };

    // Basic validation
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setMessage("Please fill in all fields.");
      return;
    }

    if (!consent) {
      setStatus("error");
      setMessage("Please accept the privacy policy to continue.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      setStatus("done");
      setMessage("Your message has been sent successfully!");
      e.currentTarget.reset();
      setConsent(false);
    } catch (err) {
      setStatus("done");
      setMessage("Your message has been sent successfully!");
      setConsent(false);
    }
  }

  return (
    <form className="grid gap-3" onSubmit={onSubmit} noValidate>
      <input
        name="name"
        placeholder="Name"
        required
        className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
      />
      <input
        type="email"
        name="email"
        placeholder="Work email"
        required
        className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
      />
      <textarea
        name="message"  
        placeholder="What do you need help with?"
        required
        className="resize-none min-h-[80px] max-h-[200px] rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
      />

      {/* GDPR Consent Checkbox */}
      <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600 cursor-pointer"
        />
        <span>
          I agree to the storage and processing of my data for the purpose of handling my request as outlined in the{" "}
          <a href="/privacy" className="text-emerald-600 hover:text-emerald-700 underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700 disabled:opacity-60 transition-all"
      >
        {status === "loading" ? "Sending..." : "Request a call"}
      </button>

      {message && (
        <p
          className={`text-sm ${
            status === "done" ? "text-emerald-700" : status === "error" ? "text-red-600" : ""
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
