
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build the future of AI, ML, and software solutions. Work with cutting-edge technology 
              and help transform businesses worldwide.
            </p>
          </div>
        </section>

        {/* No Current Openings */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We don't have any open positions at the moment, but we're always looking for talented individuals.
            </p>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">No positions available right now</h3>
              <p className="text-gray-600 mb-6">
                Check back soon or send us your resume to be considered for future opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Future Opportunities?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and tell us 
              how you'd like to contribute to our mission.
            </p>
            <Button 
              size="lg"
              onClick={() => window.open('mailto:careers@avishkaar.com?subject=General Application&body=Hello,%0D%0A%0D%0AI am interested in opportunities at AVishKaar. Please find my resume attached.%0D%0A%0D%0ABest regards,', '_blank')}
            >
              Send General Application
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
