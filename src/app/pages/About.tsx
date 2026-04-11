import { motion } from "motion/react";
import { Award, Target, Users, TrendingUp, CheckCircle, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
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
              About <span className="text-[#FF6A00]">CE Infrastructure LLP</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
              Crescent Enterprises is a leading infrastructure solutions provider delivering high-performance machinery and services across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2639] mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                What began as an aerial work platform rental company has evolved into a comprehensive infrastructure execution partner. At Crescent Enterprises, we've expanded our capabilities to include pier erection, ship repair, and specialized lifting solutions.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our journey has been driven by a singular vision: to be the safety-first elevation partner across industries. Through continuous innovation, rigorous training, and unwavering commitment to excellence, we've built lasting relationships with India's leading industrial giants.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we operate a fleet of 50+ aerial lifts with height capabilities reaching 75m, maintaining an industry-leading 97% uptime and providing 24/7 support to our valued clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
             <div className="relative">
  <ImageWithFallback
    src="https://images.unsplash.com/photo-1762530358132-94b652b2e514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY3JhbmUlMjBwaWVyJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3MjQ3Mzc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Industrial construction site"
    className="rounded-xl shadow-2xl"
  />
  <div className="absolute inset-0 bg-white/10 rounded-xl" />
</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A2639] text-white p-10 rounded-xl"
            >
              <Target className="text-[#FF6A00] mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg">
                To be recognized as India's most trusted safety-first elevation partner across industries, setting new standards in equipment reliability, execution excellence, and customer service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#FF6A00] text-[#1A2639] p-10 rounded-xl"
            >
              <CheckCircle className="mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-[#ffffff]">Our Mission</h3>
              <p className="text-lg text-[#ffffff]">
                To deliver comprehensive elevation solutions with zero-compromise safety, industry-leading uptime, and exceptional value through innovation, skilled manpower, and customer-centric service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competency */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2639] mb-4">
              Our <span className="text-[#FF6A00]">Core Competency</span>
            </h2>
            <p className="text-[#FF6A00] font-semibold text-lg mb-8">
              SERVICE BEFORE SELF
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                Being a service provider, our priority is to provide on-time smooth service to our clients to finish up their work in time, which will lead to saving their money. For timely service, we have a strong team focusing on operational and maintenance of the equipment and site work.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our team is active 24/7, regardless of the time. We are up for challenges day and night to make our service utmost. The difference between a good service and a service is just a word difference in books, but for us, that good is what we are serving for and will be serving at our best.
              </p>
              
              <div className="bg-[#1A2639] text-white p-8 rounded-xl mt-8">
                <h3 className="text-xl font-bold mb-4">Our Team's Commitment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#FF6A00] mt-1 flex-shrink-0" size={20} />
                    <span>Preventive measures to make equipment work smoothly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#FF6A00] mt-1 flex-shrink-0" size={20} />
                    <span>Working and analyzing day and night across all our regions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#FF6A00] mt-1 flex-shrink-0" size={20} />
                    <span>Ready for challenges at any time to ensure project success</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "24/7", value: "Service Available", icon: "🕐" },
                { label: "Pan India", value: "Operations", icon: "🇮🇳" },
                { label: "97%", value: "Uptime", icon: "📈" },
                { label: "50+", value: "Equipment Assets", icon: "🏗️" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#FF6A00] to-[#FF8533] p-6 rounded-lg text-white text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1">{stat.label}</div>
                  <div className="text-sm opacity-90">{stat.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1A2639] mb-16"
          >
            Our Growth Journey
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FF6A00] hidden md:block" />
            
            <div className="space-y-12">
              {[
                { year: "2015", title: "Foundation", description: "Started with 10 aerial work platforms serving local construction projects" },
                { year: "2017", title: "Fleet Expansion", description: "Grew to 25+ units and expanded service to metro rail projects" },
                { year: "2019", title: "Service Diversification", description: "Added pier erection and ship repair capabilities" },
                { year: "2021", title: "Technology Integration", description: "Implemented smart card tracking and 24/7 support system" },
                { year: "2024", title: "Industry Leader", description: "Operating 50+ lifts with 97% uptime serving major industrial clients" },
                { year: "2026", title: "Future Ready", description: "Pioneering eco-safe electric conversions and expanding nationwide" }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#FF6A00]">
                      <div className="text-[#FF6A00] font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-[#1A2639] mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-6 h-6 bg-[#FF6A00] rounded-full border-4 border-white shadow-lg relative z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#1A2639] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#ffffff]"
          >Our Core <span className="text-[#FF6A00]">Values</span></motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Safety", description: "Zero-compromise safety protocols and CE certified equipment" },
              { icon: Award, title: "Excellence", description: "Industry-leading 97% uptime and quality standards" },
              { icon: Users, title: "Customer Focus", description: "24/7 support with personalized service delivery" },
              { icon: TrendingUp, title: "Innovation", description: "Pioneering eco-safe solutions and smart tracking" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#ffffff]">
                  <value.icon className="text-[#1A2639]" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2639] mb-4">
              Certifications & Awards
            </h2>
            <p className="text-gray-600 text-lg">
              Recognized for our commitment to quality and safety
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "CE Certified Equipment", description: "All equipment meets European safety standards" },
              { title: "ISO 9001:2015", description: "Quality management system certified" },
              { title: "Safety Excellence Award", description: "Recognized for zero-accident record in 2025" }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl text-center border-2 border-[#FF6A00] hover:shadow-xl transition-all"
              >
                <Award className="text-[#FF6A00] mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-[#1A2639] mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Quote */}
      <section className="py-20 bg-gradient-to-r from-[#FF6A00] to-[#FF8533]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6 text-[#ffffff]">"</div>
            <p className="text-2xl md:text-3xl font-medium mb-8 text-[#ffffff]">
              At CE Infrastructure LLP, we don't just provide equipment – we elevate possibilities. Every project is an opportunity to demonstrate our commitment to safety, reliability, and excellence.
            </p>
            <div className="text-[#1A2639]">
              <div className="font-bold text-xl text-[#ffffff]">Leadership Team</div>
              <div className="text-sm text-[#ffffff]">CE Infrastructure LLP</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}