
import { Search, Scissors, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Framework = () => {
  return (
    <section id="framework" className="py-20 bg-brand-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-purple mb-6">
            Our Method: Cut + Control
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The Cut + Control Framework™ helps executives clean up bloated vendor ecosystems, 
            align spend to ROI, and prepare for board-level or buyer scrutiny.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1: Diagnose */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="bg-brand-purple p-4 rounded-full">
                <Search className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-purple mb-4 text-center">
              1. Diagnose
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Audit your SaaS and vendor stack to identify overlapping tools, 
              unused licenses, and hidden costs that are bleeding your budget.
            </p>
          </div>

          {/* Step 2: Cut */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="bg-brand-orange p-4 rounded-full">
                <Scissors className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-purple mb-4 text-center">
              2. Cut
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Eliminate waste, consolidate overlapping tools, and negotiate 
              better contracts to immediately reduce your monthly spend.
            </p>
          </div>

          {/* Step 3: Control */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="bg-brand-green p-4 rounded-full">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-purple mb-4 text-center">
              3. Control
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Align IT spend with business strategy and implement controls 
              that prevent future waste and support due diligence readiness.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button className="btn-outline text-lg px-8 py-4">
            Request a Sample Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Framework;
