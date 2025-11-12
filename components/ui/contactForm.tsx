"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

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
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Failed to send message. Please try again later.");
    }
  }

  return (
    <form className="grid gap-3 " onSubmit={onSubmit} noValidate>
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

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700 disabled:opacity-60"
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