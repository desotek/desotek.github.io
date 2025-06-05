
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-brand-purple mb-8">
              Built from the Inside
            </h2>
            
            <div className="prose prose-lg text-gray-700 mb-8">
              <p>
                Founder has 20+ years in IT, including 10 years in executive roles. 
                Scaled a healthcare startup to 400+ employees, led infrastructure through 
                international expansion, negotiated seven-figure contracts, and advised 
                during M&A and exits.
              </p>
            </div>

            <div className="bg-brand-purple p-6 rounded-xl text-white">
              <blockquote className="text-xl italic">
                "Most companies don't have a tech problem. They have a visibility problem."
              </blockquote>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-brand-purple to-purple-800 p-8 rounded-2xl text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                  <span className="text-lg">20+ Years IT Experience</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                  <span className="text-lg">10 Years Executive Leadership</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                  <span className="text-lg">Scaled to 400+ Employees</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                  <span className="text-lg">International Expansion Expert</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                  <span className="text-lg">M&A Advisory Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
