import Hero from '@/components/sections/Hero';
import EcosystemVerticals from '@/components/sections/EcosystemVerticals';
import TrendingProtocols from '@/components/sections/TrendingProtocols';
import KnowledgeVault from '@/components/sections/KnowledgeVault';
import PrecisionComparisons from '@/components/sections/PrecisionComparisons';
import EcosystemSignals from '@/components/sections/EcosystemSignals';
import ArchitectCTA from '@/components/sections/NewsletterCTA';

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <EcosystemVerticals />
      <TrendingProtocols />
      <KnowledgeVault />
      <PrecisionComparisons />
      <EcosystemSignals />
      <ArchitectCTA />
    </main>
  );
}
