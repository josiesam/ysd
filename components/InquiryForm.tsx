"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inquiryTypes = [
  "Partnership",
  "Sponsorship",
  "Volunteer",
  "Media / Press",
  "General",
];

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "General",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", type: "General", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-secondary-container rounded-[2rem] p-12 text-center">
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-4xl text-on-secondary">
            check_circle
          </span>
        </div>
        <h3 className="font-headline font-black text-2xl text-on-secondary-container mb-3">
          Message Sent!
        </h3>
        <p className="text-on-secondary-container/80 mb-8">
          Thanks for reaching out. We&apos;ll get back to you within 48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-headline font-bold hover:opacity-90 transition-all"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-sm"
    >
      <h3 className="font-headline font-black text-2xl text-on-surface mb-2">
        Send an Inquiry
      </h3>
      <p className="text-on-surface-variant text-sm mb-8">
        All messages are forwarded directly to our team.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            Full Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Mamadu Bah"
            className="bg-surface-container px-5 py-3.5 rounded-xl text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/30 focus:bg-surface-container-lowest transition-all"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            Email Address <span className="text-error">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="bg-surface-container px-5 py-3.5 rounded-xl text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/30 focus:bg-surface-container-lowest transition-all"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            Phone{" "}
            <span className="text-outline normal-case font-normal tracking-normal">
              (optional)
            </span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+232 76 000 000"
            className="bg-surface-container px-5 py-3.5 rounded-xl text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/30 focus:bg-surface-container-lowest transition-all"
          />
        </div>

        {/* Inquiry Type */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            Inquiry Type
          </label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="bg-surface-container px-5 py-3.5 rounded-xl text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:bg-surface-container-lowest transition-all appearance-none cursor-pointer"
          >
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5 mb-8">
        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your interest in partnering with Youth Sport Development SL..."
          className="bg-surface-container px-5 py-3.5 rounded-xl text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/30 focus:bg-surface-container-lowest transition-all resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-error text-sm font-bold mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-base">error</span>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary text-on-primary py-4 rounded-full font-headline font-black text-lg hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {status === "loading" ? (
          <>
            <span className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <span className="material-symbols-outlined">send</span>
          </>
        )}
      </button>
    </form>
  );
}
