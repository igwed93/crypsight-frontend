import Hero from "@/components/sections/Hero";
import EcosystemVerticals from "@/components/sections/EcosystemVerticals";
import ProtocolBattleground from "@/components/sections/ProtocolBattleground";
import NewsletterCTA from "@/components/sections/NewsletterCTA";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <EcosystemVerticals />
      <ProtocolBattleground />
      <NewsletterCTA />
    </main>
  );
}