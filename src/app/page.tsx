import {
  Faq,
  Features,
  Hero,
  Pricing,
  StartAndGrow,
  Testimonials,
} from '@/components/landing';
import FooterCard from '@/components/landing/footer-card';
import BackToTop from '@/components/shared/back-to-top';
import Footer from '@/components/shared/footer';

export default function HomePage() {
  return (
    <>
      <div className="w-full flex items-center flex-col justify-center">
        <Hero />
        <StartAndGrow />
        <Features />
        <Testimonials />
        {/* <Pricing /> */}
        <Faq />
      </div>
      <FooterCard />
      <Footer />
      <BackToTop />
    </>
  );
}
