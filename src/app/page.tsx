import { Hero } from '@/components/home/Hero/Hero';
import { TrustLogos } from '@/components/home/TrustLogos/TrustLogos';
import { Services } from '@/components/home/Services/Services';
import { Process } from '@/components/home/Process/Process';
import { Testimonials } from '@/components/home/Testimonials/Testimonials';
import { CtaBanner } from '@/components/home/CtaBanner/CtaBanner';
import { ParticleBackground } from '@/components/effects/ParticleBackground/ParticleBackground';

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Hero />
      <TrustLogos />
      <Services />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
