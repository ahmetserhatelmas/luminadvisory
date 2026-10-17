"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    setMessage("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setMessage(t.form.required);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setStatus("error");
      setMessage(t.form.invalidEmail);
      return;
    }

    if (!consent) {
      setStatus("error");
      setMessage(t.form.consentRequired);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Network response was not ok");
      }

      setStatus("done");
      setMessage(t.form.success);
      form.reset();
      setConsent(false);
    } catch (err) {
      setStatus("error");
      setMessage(t.form.error);
    }
  }

  return (
    <form className="grid gap-3" onSubmit={onSubmit} noValidate>
      <input
        name="name"
        placeholder={t.form.name}
        required
        className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
      />
      <input
        type="email"
        name="email"
        placeholder={t.form.email}
        required
        className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
      />
      <input
        name="company"
        placeholder={t.form.company}
        className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
      />
      <textarea
        name="message"  
        placeholder={t.form.message}
        required
        className="resize-none min-h-[80px] max-h-[200px] rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
      />

      <label className="flex items-start gap-2 text-base text-slate-600 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600 cursor-pointer"
        />
        <span>
          {t.form.consent}{" "}
          <Link href={t.form.privacyHref} className="text-emerald-600 hover:text-emerald-700 underline">
            {t.form.privacy}
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700 disabled:opacity-60 transition-all"
      >
        {status === "loading" ? t.form.sending : t.form.submit}
      </button>

      {message && (
        <p
          className={`text-base ${
            status === "done" ? "text-emerald-700" : status === "error" ? "text-red-600" : ""
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
