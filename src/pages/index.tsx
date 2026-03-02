import Nav from '@/common/components/elements/nav';
import Services from '@/common/components/elements/services';
import About from '@/common/components/elements/about';
import Portfolio from '@/common/components/elements/portfolio';
import Skills from '@/common/components/elements/skills';
import Testimonials from '@/common/components/elements/testimonials';
import Contact from '@/common/components/elements/contact';
import Footer from '@/common/components/elements/footer';
import ScrollToTop from '@/common/components/elements/scroll-to-top';

export default function Home() {
  return (
    <div className="body_wrapper">
      <Nav />
      <About />
      <Portfolio />
      <Skills />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
