import { motion } from "motion/react";
import { Link } from "react-router";
import { Truck, Building2, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Solutions() {
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
              Our <span className="text-[#FF6A00]">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive equipment and services for your infrastructure needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Machineries Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all"
            >
              <Link to="/machineries" className="block">
                <div className="relative h-[500px]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765435149256-56f3ea3db68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBsaWZ0JTIwZXF1aXBtZW50JTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzI0NzM3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Our machinery fleet"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2639] via-[#1A2639]/70 to-[#1A2639]/30" />
                </div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <div className="mb-6">
                    <Truck className="text-[#FF6A00]" size={64} />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">Machineries</h2>
                  <p className="text-lg text-gray-200 mb-6">
                    Explore our extensive fleet of over 150+ types of specialized machinery available across India.
                  </p>
                  <div className="flex items-center gap-3 text-[#FF6A00] font-semibold text-lg group-hover:gap-5 transition-all">
                    Explore Machineries <ArrowRight size={24} />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Projects Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all"
            >
              <Link to="/projects" className="block">
                <div className="relative h-[500px]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1752980628969-62c587373c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRybyUyMHJhaWwlMjBjb25zdHJ1Y3Rpb24lMjBicmlkZ2V8ZW58MXx8fHwxNzcyNDczNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Our projects"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2639] via-[#1A2639]/70 to-[#1A2639]/30" />
                </div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <div className="mb-6">
                    <Building2 className="text-[#FF6A00]" size={64} />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">Projects</h2>
                  <p className="text-lg text-gray-200 mb-6">
                    Discover our portfolio of successful projects across ship repair, pier girder erection, and piling foundation works.
                  </p>
                  <div className="flex items-center gap-3 text-[#FF6A00] font-semibold text-lg group-hover:gap-5 transition-all">
                    View Projects <ArrowRight size={24} />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A2639] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can design and execute tailored solutions for your specific project requirements
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FF6A00] px-8 py-4 rounded-lg font-semibold hover:bg-[#FF6A00]/90 transition-all text-[#f4f5f7]"
            >
              Contact Our Experts <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}