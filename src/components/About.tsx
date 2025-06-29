import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";

export const About = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Trusted by businesses worldwide"
    },
    {
      icon: Target,
      number: "1000+",
      label: "Projects Completed",
      description: "Successful implementations"
    },
    {
      icon: Award,
      number: "50+",
      label: "Team Experts",
      description: "Skilled professionals"
    },
    {
      icon: Lightbulb,
      number: "24/7",
      label: "Support",
      description: "Always here to help"
    }
  ];

  return (
    <section id="about" className="apple-section bg-white">
      <div className="apple-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About AVishqaar
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  AVishqaar is a leading technology company specializing in AI, Machine Learning, Analytics, and Software Solutions. We empower businesses to harness the power of data and artificial intelligence to drive growth and innovation.
                </p>
                <p>
                  Our team of experts combines deep technical expertise with industry knowledge to deliver cutting-edge solutions that transform how businesses operate and compete in the digital age.
                </p>
                <p>
                  From startups to Fortune 500 companies, we've helped organizations across industries leverage technology to achieve their goals and stay ahead of the competition.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-600">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Innovation at Scale</h3>
                <p className="text-gray-600 max-w-sm">
                  We believe in the power of technology to solve complex business challenges and create meaningful impact.
                </p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-100 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
