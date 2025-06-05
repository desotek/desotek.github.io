
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "The Hidden Cost of SaaS Sprawl in PE-Backed Companies",
      summary: "How portfolio companies unknowingly waste 6-figures annually on redundant software subscriptions.",
      tag: "For CFOs",
      tagColor: "bg-brand-orange"
    },
    {
      title: "Due Diligence Red Flags: What Buyers Really Look For",
      summary: "The top 5 IT infrastructure issues that can derail your exit and how to fix them.",
      tag: "PE-Backed CIOs",
      tagColor: "bg-brand-green"
    },
    {
      title: "M&A Playbook: Preparing Your Tech Stack for Exit",
      summary: "A step-by-step guide to making your technology assets an acquisition advantage.",
      tag: "For CFOs",
      tagColor: "bg-brand-orange"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-brand-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-purple mb-6">
            Insights & Playbooks
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="mb-4">
                <span className={`${post.tagColor} text-white text-xs px-3 py-1 rounded-full`}>
                  {post.tag}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-brand-purple mb-3 group-hover:text-brand-orange transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {post.summary}
              </p>
              
              <div className="flex items-center text-brand-purple group-hover:text-brand-orange transition-colors">
                <span className="text-sm font-medium">Read More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-outline text-lg px-8 py-4">
            Read the Blog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
