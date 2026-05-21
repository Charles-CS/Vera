"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Sparkles,
} from "lucide-react";

type ContactForm = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

const contactTopics = [
  {
    title: "General support",
    description: "Questions about identification, scans, or how Vera works.",
    icon: MessageCircle,
    href: "mailto:support@vera.ai",
  },
  {
    title: "Partnerships",
    description: "Collaborations, integrations, and product opportunities.",
    icon: Sparkles,
    href: "mailto:partners@vera.ai",
  },
  {
    title: "Urgent help",
    description: "Report an inaccurate result or a safety-related concern.",
    icon: PhoneCall,
    href: "mailto:support@vera.ai?subject=Urgent%20support%20request",
  },
];

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

        <div className="relative z-10 max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300"
            >
              <Sparkles className="h-4 w-4" />
              Contact Vera
            </motion.div>

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

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <div className="glass-panel glass-shine p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Email</p>
                    <Link href="mailto:support@vera.ai" className="mt-2 block text-lg font-semibold text-white hover:text-emerald-300 transition-colors">
                      support@vera.ai
                    </Link>
                  </div>
                </div>
              </div>

              <div className="glass-panel glass-shine p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Response time</p>
                    <p className="mt-2 text-lg font-semibold text-white">Usually within 1 business day</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel glass-shine p-5 sm:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Best use cases</p>
                    <p className="mt-2 text-lg font-semibold text-white">Support, partnerships, and product feedback for Vera Intelligence.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            onSubmit={handleSubmit}
            className="glass-panel glass-shine p-6 md:p-8"
          >
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Send a message</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Start a conversation</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                This form opens your email client with the details prefilled so you can send a direct message to the Vera team.
              </p>
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
              <select
                value={form.topic}
                onChange={(event) => setForm((current) => ({ ...current, topic: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-neutral-950/70 px-4 py-3 text-white outline-none transition-colors focus:border-emerald-400/60"
              >
                <option>General support</option>
                <option>Partnerships</option>
                <option>Urgent help</option>
                <option>Product feedback</option>
              </select>
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
              <p className="text-sm text-neutral-500">
                We only use this to respond to your message.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-neutral-950 transition-all duration-300 hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98]"
              >
                Send message
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <section className="max-w-6xl mx-auto w-full grid gap-4 md:grid-cols-3">
        {contactTopics.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 * index }}
              className="glass-panel glass-panel-interactive glass-shine p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">{item.description}</p>
                  <Link href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-colors">
                    Open email
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
