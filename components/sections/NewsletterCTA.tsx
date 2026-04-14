'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    // Basic validation for Email or ENS (which usually contains .eth)
    if (!email || (!email.includes('@') && !email.includes('.eth'))) return;
    setSubmitted(true);
    setEmail('');
  }

  return (
    <section className="bg-bg-primary py-20 px-6">
      <div className="mx-auto max-w-5xl">
        {/* The Gradient Card */}
        <div 
          className="relative overflow-hidden rounded-(--radius-lg) p-8 md:p-16 text-center shadow-2xl"
          style={{
            background: `linear-gradient(135deg, #7c3aed 0%, #080b14 40%, #080b14 60%, #06b6d4 100%)`,
          }}
        >
          {/* Subtle overlay to soften the gradient transitions */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Architecting the Future
            </h2>

            {/* Subtitle - Using text-text-secondary as defined in your CSS */}
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-text-secondary opacity-90">
              Join 50,000+ analysts receiving high-fidelity on-chain intelligence every
              Monday morning.
            </p>

            {/* Input row */}
            <div className="mt-4 w-full max-w-2xl">
              {submitted ? (
                <div className="rounded-full bg-brand-cyan/10 px-8 py-4 text-lg text-brand-cyan border border-brand-cyan/20">
                  Welcome to the future. Check your inbox.
                </div>
              ) : (
                <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                  <div className="relative grow w-full">
                    <Input
                      type="text"
                      placeholder="Enter your ENS or Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                      className="w-full h-14 rounded-pill md:rounded-r-none md:rounded-l-pill border-none bg-[#111c2d]/60 backdrop-blur-md text-white px-6 placeholder:text-text-muted focus-visible:ring-1 focus-visible:ring-white/20"
                    />
                  </div>
                  
                  <Button
                    onClick={handleSubmit}
                    className="w-full md:w-auto h-14 px-10 rounded-pill md:rounded-l-none md:rounded-r-pill bg-white hover:bg-white/90 text-black font-bold transition-all shrink-0"
                  >
                    Join Architect
                  </Button>
                </div>
              )}
            </div>
            
            {/* Design detail: mobile users often prefer the button nested inside on desktop, 
                but for small screens, a stacked approach (as coded above) is more accessible. */}
          </div>
        </div>
      </div>
    </section>
  );
}