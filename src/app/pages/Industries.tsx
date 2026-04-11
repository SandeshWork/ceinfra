import { motion } from "motion/react";
import { Building2, Zap, Factory, Train, Ship, Plane, Wrench, TrendingUp } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const industries = [
  {
    title: "Power",
    icon: Zap,
    description: "Providing machinery solutions for power plant projects.",
    image: "https://images.unsplash.com/photo-1747026477608-2aaed8ec76f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMHBsYW50fGVufDF8fHx8MTc3MjQ0MTIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    applications: ["Turbine maintenance", "Solar panel installation", "Wind turbine service", "Cooling tower work"]
  },
  {
    title: "Telecom",
    icon: Plane,
    description: "Supporting telecom infrastructure installation and maintenance.",
    image: "https://images.unsplash.com/photo-1765435149256-56f3ea3db68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBsaWZ0JTIwZXF1aXBtZW50JTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzI0NzM3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    applications: ["Tower installation", "Network equipment setup", "Infrastructure maintenance", "Antenna deployment"]
  },
  {
    title: "Railways",
    icon: Train,
    description: "Turnkey pier erection and specialized access for rail infrastructure projects.",
    image: "https://images.unsplash.com/photo-1752980628969-62c587373c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRybyUyMHJhaWwlMjBjb25zdHJ1Y3Rpb24lMjBicmlkZ2V8ZW58MXx8fHwxNzcyNDczNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    applications: ["Pier erection", "Girder launching", "Station construction", "Overhead line work"]
  },
  {
    title: "Construction",
    icon: Building2,
    description: "Providing safe access solutions for high-rise buildings and projects.",
    image: "https://images.unsplash.com/photo-1765435149256-56f3ea3db68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBsaWZ0JTIwZXF1aXBtZW50JTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzI0NzM3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    applications: ["Facade work", "Interior finishing", "MEP installations", "Safety inspections"]
  },
  {
    title: "Oil & Gas",
    icon: Zap,
    description: "Supporting critical maintenance and installation work in refineries and petrochemical plants.",
    image: "https://images.unsplash.com/photo-1768128834332-7d3479c8d634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI0NzM3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    applications: ["Plant maintenance", "Pipeline inspection", "Tank cleaning", "Emergency repairs"]
  },
  {
    title: "Manufacturing",
    icon: Factory,
    description: "Supporting production facilities with equipment access for installation and maintenance.",
    image: "https://images.unsplash.com/photo-1747026477608-2aaed8ec76f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMHBsYW50fGVufDF8fHx8MTc3MjQ0MTIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    applications: ["Equipment installation", "Warehouse operations", "Facility maintenance", "Automation setup"]
  },
  {
    title: "Ports & Shipyards",
    icon: Ship,
    description: "Comprehensive ship repair services and port infrastructure support.",
    image: "https://images.unsplash.com/photo-1758553527857-e23046f88a63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlweWFyZCUyMHJlcGFpciUyMGRvY2t8ZW58MXx8fHwxNzcyNDczNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    applications: ["Ship repairs", "Drydock operations", "Port equipment", "Hull maintenance"]
  },
  {
    title: "Infrastructure",
    icon: Wrench,
    description: "Heavy lifting and logistics support for roads, bridges, and major infrastructure.",
    image: "https://images.unsplash.com/photo-1762530358132-94b652b2e514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY3JhbmUlMjBwaWVyJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3MjQ3Mzc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    applications: ["Bridge construction", "Road development", "Utility installation", "Structural work"]
  }
];

export default function Industries() {
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
              Industries We <span className="text-[#FF6A00]">Serve</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering specialized elevation solutions across diverse sectors with proven expertise and safety excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 2) * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all bg-white border-2 border-transparent hover:border-[#FF6A00]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:items-stretch">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto lg:min-h-full overflow-hidden">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A2639]/80 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#ffffff]">
                        <industry.icon className="text-[#1A2639]" size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#1A2639] mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {industry.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-[#1A2639] mb-2">Key Applications:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {industry.applications.map((app) => (
                          <div key={app} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full" />
                            {app}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1A2639] mb-16"
          >
            Our Industry Impact
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "8", label: "Industries Served" },
              { value: "50+", label: "Active Clients" },
              { value: "100%", label: "Safety Record" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FF6A00] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#1A2639] font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-[#1A2639] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Industry-Specific <span className="text-[#FF6A00]">Expertise</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Our deep understanding of sector-specific challenges allows us to deliver tailored solutions that meet the unique requirements of each industry.
              </p>
              <div className="space-y-4">
                {[
                  "Certified equipment for hazardous environments",
                  "Industry-specific safety compliance",
                  "Experienced technical teams",
                  "Customized service packages",
                  "24/7 emergency response",
                  "Preventive maintenance programs"
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FF6A00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-[#1A2639] rounded-full" />
                    </div>
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#FF6A00] rounded-2xl transform rotate-3" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1747026477608-2aaed8ec76f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMHBsYW50fGVufDF8fHx8MTc3MjQ0MTIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Industrial facility"
                className="relative rounded-xl shadow-2xl"
              />
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ffffff]">Your Industry, Our Expertise</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[#ffffff]">
              Let's discuss how we can support your specific industry needs with our comprehensive solutions
            </p>
            <Link to="/contact">
              <button className="bg-[#1A2639] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1A2639]/90 transition-all shadow-lg">
                Schedule a Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}