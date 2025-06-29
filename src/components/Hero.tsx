import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="apple-hero pt-20">
      <div className="apple-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            AI Solutions.
            <br />
            <span className="text-blue-600">Reimagined.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Empowering enterprises with cutting-edge AI, Machine Learning, and Analytics. 
            Transform your business with intelligent automation and data-driven insights.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="apple-button text-lg px-10 py-5"
              onClick={() => scrollToSection('solutions')}
            >
              Explore Solutions
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              className="apple-button-secondary text-lg px-10 py-5"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>
          
          {/* Visual Element */}
          <div className="mt-20 relative">
            <div className="w-full max-w-4xl mx-auto h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Intelligent Innovation</h3>
                <p className="text-gray-600">Powered by advanced AI and machine learning</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-100 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
