import {
  Faq,
  Features,
  Hero,
  Pricing,
  StartAndGrow,
  Testimonials,
} from '@/components/landing';
import FooterCard from '@/components/landing/footer-card';
import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';

export default function Home() {
  return (
    <>
      <div className="w-full flex items-center flex-col justify-center">
        <Navbar />
        <Hero />
        <StartAndGrow />
        <Features />
        <Testimonials />
        {/* <Pricing /> */}
        <Faq />
      </div>
      <FooterCard />
      <Footer />
    </>
  );
}
