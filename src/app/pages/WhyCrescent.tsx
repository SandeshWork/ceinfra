import { motion } from "motion/react";
import { Shield, Clock, Award, Users, TrendingUp, CheckCircle, Zap, Wrench } from "lucide-react";

export default function WhyCrescent() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1A2639] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00] to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Why Choose <span className="text-[#ffffff]">CE Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The CE Infrastructure difference: Safety, reliability, and excellence in every project
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Crescent Way */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1A2639] mb-16"
          >
            The <span className="text-[#FF6A00]">CE Infrastructure Way</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "24/7 Support",
                description: "Round-the-clock availability with rapid response times for all your needs",
                icon: Clock
              },
              {
                step: "02",
                title: "Smart Tracking",
                description: "Real-time equipment monitoring with smart card technology for transparency",
                icon: Zap
              },
              {
                step: "03",
                title: "Trained Crew",
                description: "CE certified operators with continuous training and safety excellence",
                icon: Users
              },
              {
                step: "04",
                title: "Invoice Accuracy",
                description: "Transparent billing with detailed usage reports and competitive pricing",
                icon: CheckCircle
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-[#1A2639] text-white p-8 rounded-xl h-full">
                  <div className="text-6xl font-bold opacity-20 mb-4 text-[#ffffff]">
                    {step.step}
                  </div>
                  <step.icon className="text-[#FF6A00] mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#FF6A00] transform rotate-45" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Differentiators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1A2639] mb-16"
          >
            What Sets Us <span className="text-[#FF6A00]">Apart</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Shield,
                title: "Safety-First Culture",
                description: "Zero-compromise safety protocols with CE certified equipment and comprehensive insurance coverage. Our safety record speaks for itself with zero major incidents across 500+ projects.",
                stats: ["100% Safety Record", "CE Certified Fleet", "Comprehensive Insurance"]
              },
              {
                icon: TrendingUp,
                title: "Industry-Leading Uptime",
                description: "97% equipment uptime through preventive maintenance, backup fleet availability, and rapid response protocols. Your project timeline is our priority.",
                stats: ["97% Uptime", "Preventive Maintenance", "Backup Fleet Ready"]
              },
              {
                icon: Wrench,
                title: "Integrated Solutions",
                description: "Unique advantage of combining equipment rental with skilled manpower, turnkey execution capabilities, and end-to-end project support.",
                stats: ["Turnkey Execution", "Skilled Workforce", "Complete Solutions"]
              },
              {
                icon: Award,
                title: "Proven Excellence",
                description: "Trusted by industry giants including L&T, JSW, Adani, and Tata. Award-winning service quality with 97% client retention rate.",
                stats: ["50+ Major Clients", "500+ Projects", "97% Retention"]
              }
            ].map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#dad6d3]">
                  <diff.icon className="text-[#1A2639]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A2639] mb-4">{diff.title}</h3>
                <p className="text-gray-600 mb-6">{diff.description}</p>
                <div className="grid grid-cols-1 gap-2">
                  {diff.stats.map((stat) => (
                    <div key={stat} className="flex items-center gap-2">
                      <CheckCircle className="text-[#FF6A00]" size={18} />
                      <span className="text-sm text-gray-700">{stat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-[#1A2639] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Eco-Safe <span className="text-[#FF6A00]">Innovations</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Pioneering sustainable solutions in the heavy equipment industry with our eco-safe electric conversions and green technology initiatives.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Electric Conversions",
                    description: "Converting diesel equipment to electric for indoor and environmentally sensitive projects"
                  },
                  {
                    title: "Low Emission Fleet",
                    description: "Investing in latest generation equipment with reduced carbon footprint"
                  },
                  {
                    title: "Smart Energy Management",
                    description: "IoT-enabled monitoring for optimized fuel consumption and efficiency"
                  },
                  {
                    title: "Sustainable Practices",
                    description: "Comprehensive recycling and waste management protocols"
                  }
                ].map((innovation) => (
                  <div key={innovation.title} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <h3 className="font-bold text-lg mb-2 text-[#FF6A00]">{innovation.title}</h3>
                    <p className="text-gray-300 text-sm">{innovation.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-12 rounded-2xl border border-white/20"
            >
              <div className="text-center">
                <Zap className="text-[#FF6A00] mx-auto mb-6" size={64} />
                <div className="text-5xl font-bold mb-4">30%</div>
                <p className="text-xl mb-8">Reduction in Carbon Emissions</p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-[#FF6A00] mb-2">25+</div>
                    <p className="text-sm text-gray-300">Electric Units</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#FF6A00] mb-2">100%</div>
                    <p className="text-sm text-gray-300">Green Certified</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1A2639] mb-16"
          >
            Service <span className="text-[#FF6A00]">Excellence</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rapid Response",
                value: "< 2 Hours",
                description: "Average response time for service requests and emergency support"
              },
              {
                title: "Equipment Availability",
                value: "97%",
                description: "Fleet uptime through preventive maintenance and backup units"
              },
              {
                title: "Client Satisfaction",
                value: "4.9/5",
                description: "Average rating from client feedback and project reviews"
              }
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gray-50 p-8 rounded-xl border-2 border-[#FF6A00]"
              >
                <div className="text-5xl font-bold text-[#FF6A00] mb-4">{metric.value}</div>
                <h3 className="text-xl font-bold text-[#1A2639] mb-3">{metric.title}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-6xl text-[#1A2639] mb-6">"</div>
            <p className="text-2xl md:text-3xl font-medium mb-8 text-[#ffffff]">
              CE Infrastructure LLP has consistently exceeded our expectations. Their combination of top-tier equipment, skilled operators, and unwavering commitment to safety makes them our preferred partner.
            </p>
            <div className="text-[#1A2639]">
              <div className="font-bold text-xl text-[#ffffff]">Senior Project Manager</div>
              <div className="text-[#dadada] text-[#dbdbdb] text-[#ededed] text-[#fafafa] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff]">L&T Construction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a2639]">
              Experience the CE Infrastructure Difference
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-[#1a2639]">
              Join industry leaders who trust us for their elevation needs
            </p>
            <button className="bg-[#FF6A00] px-8 py-4 rounded-lg font-semibold hover:bg-[#FF6A00]/90 transition-all shadow-lg text-[#ffffff]">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}