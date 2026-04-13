"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="relative bg-bg-primary py-32 overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-125 w-175 rounded-full bg-brand-purple opacity-10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">

          {/* Heading */}
          <h2 className="whitespace-nowrap text-6xl font-bold tracking-tight text-white/80">
            Stay ahead of the curve.
          </h2>

          {/* Subtitle */}
          <p className="text-lg leading-relaxed text-text-secondary">
            Weekly alpha delivered directly to your inbox. Institutional
            insights, decoded for everyone.
          </p>

          {/* Input row */}
          {submitted ? (
            <div className="flex items-center gap-2 rounded-md bg-brand-cyan/10 px-8 py-4 text-lg text-brand-cyan">
              You're on the list. Alpha incoming.
            </div>
          ) : (
            <div className="mt-2 relative w-full max-w-xl">
                <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    className="w-full rounded-md border-0 bg-bg-card/60 backdrop-blur-sm text-white text-base placeholder:text-text-muted focus-visible:ring-brand-purple/30 focus-visible:ring-1 h-16 px-5 pr-36"
                />
                <Button
                    onClick={handleSubmit}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md bg-brand-purple hover:bg-brand-purple-dim text-[#1a0a2e] font-semibold text-sm px-5 h-13"
                >
                    Subscribe
                </Button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}