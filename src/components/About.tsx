
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";

export const About = () => {
  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Award },
    { number: "25+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Target },
    { number: "100%", label: "Success Rate", icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About AVishKaar
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  AVishKaar is a leading technology company specializing in AI, Machine Learning, Analytics, and Software Solutions. We empower businesses to harness the power of data and artificial intelligence to drive growth and innovation.
                </p>
                <p>
                  Our team of experts combines deep technical knowledge with industry experience to deliver cutting-edge solutions that solve real-world problems and create tangible value for our clients.
                </p>
                <p>
                  From startups to large enterprises, we partner with organizations across industries to transform their operations through intelligent automation, predictive analytics, and custom software development.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="space-y-3 p-0">
                      <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
