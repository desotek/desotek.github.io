
import { Button } from '@/components/ui/button';
import { Search, BarChart3 } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFramework = () => {
    const element = document.getElementById('framework');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-neutral to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-purple mb-6 leading-tight">
              Tech spend isn't the problem.{' '}
              <span className="text-brand-orange">Visibility is.</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              We help finance and IT leaders uncover waste, recover 6–7 figures in overspend, 
              and build lean infrastructure that holds up in due diligence.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-orange text-lg px-8 py-4"
                onClick={scrollToContact}
              >
                Book a Free Strategy Call
              </Button>
              <Button 
                className="btn-outline text-lg px-8 py-4"
                onClick={scrollToFramework}
              >
                See How It Works
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <Search className="w-16 h-16 text-brand-orange" />
                  <div className="absolute -top-2 -right-2 bg-brand-green rounded-full p-2">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium">SaaS Tools</span>
                  <span className="text-red-500 font-semibold">$89K/month</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium">Overlapping Tools</span>
                  <span className="text-red-500 font-semibold">9 found</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Potential Savings</span>
                  <span className="text-brand-green font-semibold">$680K/year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
