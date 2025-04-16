
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CallToAction } from "@/components/ui/call-to-action";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="About Roof Masters Edmonton" 
          subtitle="Learn more about Edmonton's trusted roofing company with over 15 years of experience."
          image="https://images.unsplash.com/photo-1593604572578-53ea028c3a5e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3"
        />

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Our Story"
                  subtitle="Dedicated to excellence in roofing since 2008"
                />
                <p className="text-gray-600 mb-6">
                  Roof Masters was founded in 2008 with a simple mission: to provide Edmonton and surrounding areas with exceptional roofing services delivered with integrity, quality, and professionalism.
                </p>
                <p className="text-gray-600 mb-6">
                  What started as a small team of dedicated roofers has grown into one of Edmonton's most trusted roofing companies, serving thousands of residential and commercial clients throughout Alberta.
                </p>
                <p className="text-gray-600">
                  Our passion for quality craftmanship, attention to detail, and commitment to customer satisfaction has earned us a reputation as Edmonton's premier roofing company.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573919810127-cef87b1dbade?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Roof Masters team" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-8 -left-8 bg-accent-orange text-white p-4 rounded-lg shadow-lg md:w-64">
                  <p className="font-bold text-xl">15+ Years</p>
                  <p>Serving Edmonton & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading 
              title="Our Core Values"
              subtitle="The principles that guide everything we do"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-roofing-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-roofing-800">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on materials or workmanship. Every project is completed to the highest standards.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-roofing-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-roofing-800">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We're honest and transparent in everything we do, from pricing to project timelines.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-roofing-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-roofing-800">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We listen to your needs and deliver solutions that exceed your expectations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-roofing-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-roofing-800">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Safety</h3>
                <p className="text-gray-600">
                  We maintain strict safety standards to protect our team and your property throughout every project.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-roofing-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-roofing-800">5</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Community</h3>
                <p className="text-gray-600">
                  As a local Edmonton business, we're committed to supporting and giving back to our community.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-roofing-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-roofing-800">6</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We stay updated with the latest roofing technologies and techniques to provide you with the best solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

      

        <CallToAction 
          title="Ready to Work With Edmonton's Best Roofers?"
          subtitle="Contact our team today to discuss your roofing needs and get a free estimate."
          buttonText="Contact Us"
          buttonLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
};

export default About;
