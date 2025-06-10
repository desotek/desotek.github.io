const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <footer className="bg-brand-purple text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Desotek Advisory</h3>
            <p className="text-gray-300 leading-relaxed">
              Helping finance and IT leaders uncover waste, recover 6–7 figures in overspend, 
              and build lean infrastructure that holds up in due diligence.
            </p>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-white transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('framework')} className="block text-gray-300 hover:text-white transition-colors">
                  Framework
                </button>
                <button onClick={() => scrollToSection('blog')} className="block text-gray-300 hover:text-white transition-colors">
                  Blog
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="https://www.linkedin.com/in/eric-l-martin/" className="block text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Desotek Advisory. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
