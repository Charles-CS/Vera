"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";

type ContactForm = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    topic: "General support",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`${form.topic} - Vera Contact`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
    );

    window.location.href = `mailto:support@vera.ai?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col gap-12 pb-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950/50 backdrop-blur-xl px-6 py-14 md:px-10 lg:px-14">
        <div className="absolute -top-16 right-[-60px] h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-[-80px] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-6 lg:flex lg:h-full lg:flex-col lg:justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="max-w-2xl text-5xl font-bold tracking-tight text-white md:text-6xl leading-[1.05]"
            >
              Reach the team behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic font-medium">Vera</span> experience.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="max-w-2xl text-base leading-7 text-neutral-400 md:text-lg"
            >
              Whether you need help with an identification, want to explore a partnership, or need to flag a safety concern, we keep the same precise, high-signal tone Vera uses everywhere else.
            </motion.p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            onSubmit={handleSubmit}
            className="glass-panel glass-shine p-6 md:p-8"
          >
            <div className="mb-6">
              <h2 className="mt-2 text-2xl font-semibold text-white">Start a conversation</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-neutral-300">Name</span>
                <input
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-neutral-950/70 px-4 py-3 text-white placeholder:text-neutral-600 outline-none transition-colors focus:border-emerald-400/60"
                  placeholder="Your name"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-neutral-300">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-neutral-950/70 px-4 py-3 text-white placeholder:text-neutral-600 outline-none transition-colors focus:border-emerald-400/60"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-4 block space-y-2">
              <span className="text-sm font-medium text-neutral-300">Topic</span>
              <div className="relative">
                <select
                  value={form.topic}
                  onChange={(event) => setForm((current) => ({ ...current, topic: event.target.value }))}
                  className="w-full appearance-none rounded-2xl border border-white/10 bg-neutral-950/70 px-4 py-3 pr-12 text-white outline-none transition-colors focus:border-emerald-400/60"
                >
                  <option>General support</option>
                  <option>Partnerships</option>
                  <option>Urgent help</option>
                  <option>Product feedback</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
              </div>
            </label>

            <label className="mt-4 block space-y-2">
              <span className="text-sm font-medium text-neutral-300">Message</span>
              <textarea
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                required
                rows={6}
                className="w-full resize-none rounded-3xl border border-white/10 bg-neutral-950/70 px-4 py-3 text-white placeholder:text-neutral-600 outline-none transition-colors focus:border-emerald-400/60"
                placeholder="Tell us what you need help with..."
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-neutral-950 transition-all duration-300 hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] sm:w-full"
              >
                Send message
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
