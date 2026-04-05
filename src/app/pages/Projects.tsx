import { motion } from "motion/react";
import { CheckCircle, Award, TrendingUp, Ship, Building2, HardHat } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const projectCategories = [
  {
    id: 1,
    title: "Ship Repair",
    icon: Ship,
    description: "Comprehensive ship repair and maintenance services including drydock operations, hull maintenance, mechanical repairs, and marine system installations. Our integrated approach combines specialized equipment, skilled workforce, and efficient project management to minimize vessel downtime.",
    image: "https://images.unsplash.com/photo-1763911660308-f38f2d54a466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwJTIwcmVwYWlyJTIwZG9jayUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc0Mjk1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    capabilities: [
      "Drydock maintenance and repairs",
      "Hull cleaning and painting",
      "Mechanical and electrical system repairs",
      "Marine equipment installation",
      "Structural fabrication and welding",
      "Emergency repair services 24/7"
    ],
    stats: [
      { label: "Vessels Serviced", value: "200+" },
      { label: "Avg. Turnaround", value: "15 Days" },
      { label: "Success Rate", value: "100%" }
    ],
    clients: ["Adani Ports", "ABG Shipyard", "Cochin Shipyard", "Indian Navy"]
  },
  {
    id: 2,
    title: "Pier Girder Erection",
    icon: Building2,
    description: "Expert turnkey solutions for pier construction and girder launching operations for elevated metro corridors, flyovers, and bridge projects. We provide end-to-end services including pier erection, segment launching, and structural installation with advanced equipment and safety protocols.",
    image: "https://images.unsplash.com/photo-1646460072212-7ea22904038a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWVyJTIwZ2lyZGVyJTIwYnJpZGdlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3NDI5NTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    capabilities: [
      "Pier erection and construction",
      "Girder segment launching",
      "Launch girder operations",
      "Heavy lifting and rigging",
      "Pre-stressed concrete work",
      "Quality control and safety management"
    ],
    stats: [
      { label: "Piers Erected", value: "500+" },
      { label: "Total Span", value: "50+ km" },
      { label: "Safety Record", value: "Zero Incidents" }
    ],
    clients: ["L&T Construction", "NCRTC", "MMRDA", "Delhi Metro"]
  },
  {
    id: 3,
    title: "Piling Foundation Works",
    icon: HardHat,
    description: "Advanced deep foundation solutions using state-of-the-art piling equipment and techniques. We specialize in CFA piling, rotary drilling, and various foundation systems for high-rise buildings, bridges, industrial structures, and infrastructure projects with precision and reliability.",
    image: "https://images.unsplash.com/photo-1766595680992-31635890cf70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VuZGF0aW9uJTIwcGlsaW5nJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzQyOTU1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    capabilities: [
      "CFA (Continuous Flight Auger) piling",
      "Rotary bored piling",
      "Diaphragm wall construction",
      "Soil investigation and analysis",
      "Load testing and monitoring",
      "Deep foundation design support"
    ],
    stats: [
      { label: "Piles Installed", value: "10,000+" },
      { label: "Max Depth", value: "60m" },
      { label: "Project Success", value: "98%" }
    ],
    clients: ["Tata Projects", "Shapoorji Pallonji", "NCC Limited", "GMR Group"]
  }
];

export default function Projects() {
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
              Our <span className="text-[#FF6A00]">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized expertise in ship repair, infrastructure erection, and foundation works
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, value: "500+", label: "Projects Completed" },
              { icon: Award, value: "100%", label: "Safety Record" },
              { icon: TrendingUp, value: "97%", label: "Client Retention" },
              { icon: CheckCircle, value: "50+", label: "Active Clients" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="text-[#FF6A00] mx-auto mb-3" size={40} />
                <div className="text-3xl md:text-4xl font-bold text-[#1A2639] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1A2639] mb-16"
          >
            Our Project <span className="text-[#FF6A00]">Specializations</span>
          </motion.h2>

          <div className="space-y-16">
            {projectCategories.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2639] via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 bg-[#FF6A00] inline-flex px-4 py-3 rounded-lg">
                        <project.icon className="text-[#ffffff]" size={32} />
                        <h3 className="text-2xl font-bold text-[#ffffff]">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Capabilities */}
                    <div className="bg-white rounded-xl p-6 mb-6 shadow-md border-l-4 border-[#FF6A00]">
                      <h4 className="font-bold text-[#1A2639] mb-4 text-lg">Key Capabilities:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="text-[#FF6A00] flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-gray-700 text-sm">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="bg-[#1A2639] text-white p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-[#FF6A00] mb-1">{stat.value}</div>
                          <div className="text-xs text-gray-300">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clients */}
                  <div className="bg-gradient-to-r from-[#1A2639] to-[#1A2639]/90 text-white p-6 rounded-xl">
                    <h4 className="font-bold mb-3 text-[#FF6A00]">Trusted by Leading Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.clients.map((client, idx) => (
                        <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-[#1A2639] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Performance <span className="text-[#FF6A00]">Metrics</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Downtime",
                description: "Preventive maintenance ensures continuous project operations",
                icon: CheckCircle
              },
              {
                title: "100% Safety",
                description: "Award-winning safety protocols with zero major incidents",
                icon: Award
              },
              {
                title: "On-Time Delivery",
                description: "98% of projects completed on or ahead of schedule",
                icon: TrendingUp
              }
            ].map((kpi, index) => (
              <motion.div
                key={kpi.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all"
              >
                <kpi.icon className="text-[#FF6A00] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">{kpi.title}</h3>
                <p className="text-gray-300">{kpi.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1A2639] mb-16"
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Crescent's pier erection expertise was instrumental in completing our metro project ahead of schedule. Outstanding execution and safety standards.",
                author: "Project Director",
                company: "L&T Construction"
              },
              {
                quote: "Their integrated ship repair services reduced our vessel downtime by 30%. Highly professional team with excellent equipment.",
                author: "Operations Manager",
                company: "Adani Ports"
              },
              {
                quote: "The piling foundation work was executed with precision and reliability. Their technical expertise is unmatched in the industry.",
                author: "Chief Engineer",
                company: "Tata Projects"
              },
              {
                quote: "Exceptional coordination and timely delivery on our bridge construction project. A reliable partner for complex infrastructure works.",
                author: "Project Manager",
                company: "NCRTC"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border-2 border-[#FF6A00]"
              >
                <div className="text-4xl text-[#FF6A00] mb-4">"</div>
                <p className="text-gray-700 text-lg mb-6 italic">{testimonial.quote}</p>
                <div>
                  <div className="font-bold text-[#1A2639]">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2639] mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-[#1A2639] text-lg mb-8 max-w-2xl mx-auto">
              Join the leading companies that trust CE Infrastructure LLP for their infrastructure needs
            </p>
            <button className="bg-[#1A2639] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1A2639]/90 transition-all shadow-lg">
              Discuss Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}