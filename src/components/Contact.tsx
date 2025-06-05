
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-purple to-purple-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to regain control of your tech spend?
        </h2>
        
        <p className="text-xl lg:text-2xl mb-12 opacity-90">
          Let's identify where your budget is leaking—and fix it fast.
        </p>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
          <h3 className="text-2xl font-semibold mb-4">
            What You'll Get in Our Strategy Call:
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
              <span>Complete audit of your current tech stack</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
              <span>Immediate savings opportunities identified</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
              <span>Custom roadmap for cost optimization</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
              <span>Due diligence readiness assessment</span>
            </div>
          </div>
        </div>

        <Button className="btn-orange text-xl px-12 py-4">
          Book a Strategy Call
        </Button>

        <p className="text-sm mt-4 opacity-75">
          No obligation. No sales pitch. Just actionable insights.
        </p>
      </div>
    </section>
  );
};

export default Contact;
