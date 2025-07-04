
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Framework from '@/components/Framework';
import Results from '@/components/Results';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Framework />
      <Results />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
