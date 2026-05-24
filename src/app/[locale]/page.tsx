import Header from '@/components/Header';
import SideFixed from '@/components/SideFixed';
import BackToTop from '@/components/BackToTop';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Stack from '@/components/Stack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <SideFixed side="left" />
      <SideFixed side="right" />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
