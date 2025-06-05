
const Results = () => {
  const stats = [
    {
      value: "$680K",
      label: "Recovered in Vendor Waste",
      description: "Average savings identified in first 90 days"
    },
    {
      value: "29%",
      label: "Average IT Spend Reduction",
      description: "Without impacting business operations"
    },
    {
      value: "6-Month",
      label: "Payback Period",
      description: "Typical ROI timeline for our engagements"
    },
    {
      value: "9",
      label: "Overlapping Tools Consolidated",
      description: "Average number of redundant tools eliminated"
    }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-purple mb-6">
            The Results Speak for Themselves
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-brand-purple to-purple-800 p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform"
            >
              <div className="text-4xl font-bold text-brand-orange mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-sm opacity-90">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-neutral p-8 rounded-2xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-purple mb-6 text-center">
              Case Study Snapshot
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-brand-purple mb-3">
                  The Challenge
                </h4>
                <p className="text-gray-700">
                  PE-backed SaaS company with $2.3M annual IT spend, 47 different tools, 
                  and zero visibility into ROI. Board demanding 30% cost reduction before exit.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-brand-purple mb-3">
                  The Outcome
                </h4>
                <p className="text-gray-700">
                  Identified $680K in annual savings, consolidated 9 overlapping tools, 
                  and created ROI dashboard that impressed buyers during due diligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
