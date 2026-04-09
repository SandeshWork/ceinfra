import { motion } from "motion/react";
import {
  Wrench,
  Shield,
  Clock,
  MapPin,
  CheckCircle,
  Package,
  Link as LinkIcon,
  Star,
  Building2,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import boomPumpImage from "../../assets/boom-pump.png";
import scissorLiftImage from "../../assets/scissor-lift.png";

const machineryCategories = [
  {
    id: 1,
    name: "Boom Lifts",
    description:
      "Versatile aerial work platforms for high-reach applications in construction and maintenance",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1771793307225-f92a984b3d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29tJTIwbGlmdCUyMGFlcmlhbCUyMHBsYXRmb3JtJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3NTQwOTMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specs: [
      "Working heights from 12m to 43m reach",
      "Articulating & telescopic models",
      "Indoor/outdoor capability",
    ],
  },
  {
    id: 2,
    name: "Scissor Lifts",
    description:
      "Stable vertical lifting platforms ideal for indoor and outdoor maintenance work",
    icon: Wrench,
    image: scissorLiftImage,
    specs: [
      "Platform heights from 6m to 18m capacity",
      "Electric & diesel options",
      "Large work platform",
    ],
  },
  {
    id: 3,
    name: "Spider & Truck-Mounted",
    description:
      "Compact tracked lifts and truck-mounted platforms for complex access scenarios",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1671293316362-0038564fe14f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlkZXIlMjBsaWZ0JTIwdHJhY2tlZCUyMHBsYXRmb3JtfGVufDF8fHx8MTc3NTQwOTMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specs: [
      "Specialized units reaching up to 50m+ for complex access requirements",
      "Narrow access capability",
      "Quick setup & mobility",
    ],
  },
  {
    id: 4,
    name: "Transit Mixer",
    description:
      "High-capacity concrete mixing trucks for efficient on-site concrete delivery",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1690719744562-249937b9c03a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMG1peGVyJTIwdHJ1Y2slMjBvcGVyYXRpb25hbHxlbnwxfHx8fDE3NzU0MDkzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specs: [
      "6m³ to 10m³ capacity",
      "GPS tracking enabled",
      "Computerized batching",
    ],
  },
  {
    id: 5,
    name: "Concrete Boom Placers",
    description: "Precision concrete placement equipment for large-scale construction projects",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1656846349663-a7e533721680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHBsYWNpbmclMjBib29tJTIwY29uc3RydWN0aW9uJTIwc2l0ZSUyMHdpZGV8ZW58MXx8fHwxNzc1NDEwNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specs: ["24m to 42m reach", "360° rotation capability", "Remote operation available"]
  },
  {
    id: 6,
    name: "Boom Pumps",
    description:
      "Powerful concrete pumping systems for high-rise and infrastructure projects",
    icon: Shield,
    image: boomPumpImage,
    specs: [
      "28m to 61m vertical reach",
      "High output capacity",
      "Stabilization systems",
    ],
  },
  {
    id: 7,
    name: "Piling Rigs",
    description:
      "Advanced foundation piling equipment for deep foundation works",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1662800172921-8b00a2b4a25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxpbmclMjByaWclMjBmb3VuZGF0aW9uJTIwZHJpbGxpbmd8ZW58MXx8fHwxNzc1NDA5MzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specs: [
      "CFA & Rotary drilling",
      "Up to 60m depth",
      "Various diameter options",
    ],
  },
  {
    id: 8,
    name: "Barges",
    description:
      "Marine transportation and work platforms for port and offshore operations",
    icon: MapPin,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/82/Barge_on_River_Thames%2C_London_-_Dec_2009.jpg",
    specs: [
      "Multiple tonnage classes",
      "Equipped for heavy lifts",
      "Full marine compliance",
    ],
  },
  {
    id: 9,
    name: "Fork Lifts",
    description:
      "Versatile material handling equipment for various industrial applications",
    icon: Wrench,
    image:
      "https://images.pexels.com/photos/32959539/pexels-photo-32959539.jpeg?_gl=1*hljgec*_ga*Mjc4OTAwNDY1LjE3NjU3NTEyMTQ.*_ga_8JE65Q40S6*czE3NzU0MDg4MDgkbzQkZzEkdDE3NzU0MTAzMzEkajQwJGwwJGgw",
    specs: [
      "1 ton to 16 ton capacity",
      "Diesel & electric models",
      "Indoor/outdoor use",
    ],
  },
  {
    id: 10,
    name: "Pick and Carry Cranes",
    description:
      "Mobile crane solutions for quick and efficient lifting operations",
    icon: Shield,
    image:
      "https://images.pexels.com/photos/29492015/pexels-photo-29492015.jpeg?_gl=1*1d610eu*_ga*Mjc4OTAwNDY1LjE3NjU3NTEyMTQ.*_ga_8JE65Q40S6*czE3NzU0MDg4MDgkbzQkZzEkdDE3NzU0MTAyNjMkajQ3JGwwJGgw",
    specs: [
      "14 ton to 25 ton capacity",
      "Compact & maneuverable",
      "Quick setup time",
    ],
  },
  {
    id: 11,
    name: "Telehandlers",
    description:
      "Telescopic material handlers for construction and industrial sites",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1611401433776-5295c244b757?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specs: [
      "9m to 18m reach",
      "Multi-purpose attachments",
      "All-terrain capability",
    ],
  },
  {
    id: 12,
    name: "Puller Axles",
    description:
      "Heavy-duty axle systems for transporting oversized and heavy loads",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1756888195367-550106bd7906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMGR1dHklMjB0cmFpbGVyJTIwdHJ1Y2t8ZW58MXx8fHwxNzc1NDA5MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specs: [
      "50 ton to 200 ton capacity",
      "Modular configuration",
      "Hydraulic steering",
    ],
  },
];

export default function Machineries() {
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
              Our{" "}
              <span className="text-[#FF6A00]">
                Machineries
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Comprehensive range of specialized heavy equipment
              for construction, infrastructure, and industrial
              projects
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block bg-[#FF6A00] px-6 py-3 rounded-full font-bold text-lg text-[#ffffff]"
            >
              150+ Types of Machinery
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlight Banner */}
      <section className="py-12 bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-[#1A2639] text-white px-8 py-6 rounded-2xl shadow-2xl">
              <Star className="text-[#FF6A00]" size={40} />
              <div className="text-left">
                <div className="text-2xl font-bold">
                  Available Across India
                </div>
                <div className="text-sm text-gray-300">
                  Pan-India Service Network
                </div>
              </div>
              <Star className="text-[#FF6A00]" size={40} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Machinery Categories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1A2639] mb-16"
          >
            Machinery{" "}
            <span className="text-[#FF6A00]">Categories</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {machineryCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#FF6A00] group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2639] to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-[#ffffff] p-3 rounded-lg">
                        <category.icon
                          className="text-[#1A2639]"
                          size={24}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {category.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full" />
                        <span className="text-gray-700">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="block w-full bg-[#FF6A00] px-4 py-3 rounded-lg font-semibold hover:bg-[#FF6A00]/90 transition-all text-center text-[#ffffff]"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1A2639] mb-16"
          >
            Why Choose{" "}
            <span className="text-[#FF6A00]">
              Our Machinery
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Latest Technology",
                description:
                  "Modern, well-maintained equipment with advanced features and safety systems",
                icon: Star,
              },
              {
                title: "Pan-India Availability",
                description:
                  "Extensive fleet coverage across major cities and project locations in India",
                icon: Building2,
              },
              {
                title: "Expert Support",
                description:
                  "Skilled operators and 24/7 technical support for all equipment",
                icon: Star,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1A2639] to-[#1A2639]/90 text-white p-8 rounded-xl text-center"
              >
                <feature.icon
                  className="text-[#FF6A00] mx-auto mb-4"
                  size={48}
                />
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ffffff]">
              Need Specialized Equipment?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[#ffffff]">
              Contact our team for custom machinery solutions
              and availability across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#1A2639] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1A2639]/90 transition-all shadow-lg"
              >
                Request Equipment Quote
              </Link>
              <button className="bg-white text-[#1A2639] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all shadow-lg">
                Download Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}