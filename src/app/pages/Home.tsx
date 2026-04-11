import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  Shield,
  Clock,
  Users,
  Wrench,
  CheckCircle,
  TrendingUp,
  Award,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect } from "react";
import adaniLogo from "../../assets/40240ca88b4419df9952c61a5d1763016edfde42.png";
import tataProjectsLogo from "../../assets/30f25cd78ae75dfc9fb3dc962a2ab6654ce6b8df.png";
import ultratechLogo from "../../assets/1badbcf65e34acc08da2e3d1cb1349c3591d42e9.png";
import jswLogo from "../../assets/e2c956b83dc961b045e47c9498ad88107f10dd77.png";
import relianceLogo from "../../assets/a39c74a6d549425f0a3bfaec71aef0aa98feb7a1.png";
import accLogo from "../../assets/603fa9fa8c96cd7303c019ffd04ef12addcb2e71.png";
import shapoorjiLogo from "../../assets/285a6180effc9c9fa59ec9a28327a0fb2f7b21cb.png";
import larsenToubroLogo from "../../assets/da0f9a78205fb5dba97328e92d3efe5dab604316.png";
import vedantaLogo from "../../assets/387d99ad071dce316ab7596d5bb3f4f7d9b1a624.png";

const clientLogos = [
  { name: "Adani", logo: adaniLogo },
  { name: "Tata Projects", logo: tataProjectsLogo },
  { name: "UltraTech Cement", logo: ultratechLogo },
  { name: "JSW", logo: jswLogo },
  { name: "Reliance Industries", logo: relianceLogo },
  { name: "ACC", logo: accLogo },
  { name: "Shapoorji Pallonji", logo: shapoorjiLogo },
  { name: "Larsen & Toubro", logo: larsenToubroLogo },
  { name: "Vedanta", logo: vedantaLogo },
];

function Counter({
  end,
  duration = 2,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(
        (timestamp - startTime) / (duration * 1000),
        1,
      );
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="text-[#b96f3b] text-[#b9703c] text-[#d7996d] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff] text-[#ffffff]">
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#232323]/95 to-[#232323]/80 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1765435149256-56f3ea3db68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBsaWZ0JTIwZXF1aXBtZW50JTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzI0NzM3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Aerial lift equipment at construction site"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Pan India{" "}
            <span className="text-[#FF6A00]">Infrastructure Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Infrastructure Excellence by CE Infrastructure LLP
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#FF6A00]/90 transition-all inline-flex items-center justify-center gap-2"
            >
              Get a Quote <ArrowRight size={20} />
            </Link>
            <button
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?export=download&id=1D7jNDX86QyTTe7QmKlbjGGt6gQLNwGZb",
                  "_blank",
                )
              }
            >
              Download Capability Profile
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1A2639] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#FF6A00] mb-2">
                <Counter end={150} suffix="+" />
              </div>
              <div className="text-white text-sm md:text-base">
                Machinery Types
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#FF6A00] mb-2">
                <Counter end={500} suffix="+" />
              </div>
              <div className="text-white text-sm md:text-base">
                Projects Completed
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#FF6A00] mb-2">
                <Counter end={97} suffix="%" />
              </div>
              <div className="text-white text-sm md:text-base">
                Client Satisfaction
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[#ffffff]">
                24/7
              </div>
              <div className="text-white text-sm md:text-base">
                Service
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1A2639] mb-12"
          >
            Trusted by Industry Giants
          </motion.h2>

          <div className="relative">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -100 * clientLogos.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {clientLogos.map((client, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-xl transition-all flex-shrink-0 w-48 h-32"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((client, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-xl transition-all flex-shrink-0 w-48 h-32"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2639] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive equipment and services for your
              infrastructure needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Machineries",
                description:
                  "Over 150+ types of specialized machinery available across India",
                icon: Wrench,
                link: "/machineries",
                image:
                  "https://images.unsplash.com/photo-1765435149256-56f3ea3db68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBsaWZ0JTIwZXF1aXBtZW50JTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzI0NzM3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "Projects",
                description:
                  "Ship repair, pier girder erection, and piling foundation works",
                icon: Award,
                link: "/projects",
                image:
                  "https://images.unsplash.com/photo-1752980628969-62c587373c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRybyUyMHJhaWwlMjBjb25zdHJ1Y3Rpb24lMjBicmlkZ2V8ZW58MXx8fHwxNzcyNDczNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={solution.link}
                  className="block group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="relative h-96">
                    <ImageWithFallback
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2639] via-[#1A2639]/70 to-[#1A2639]/30" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <solution.icon
                      className="mb-4 text-[#FF6A00]"
                      size={48}
                    />
                    <h3 className="font-bold text-2xl mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-base text-gray-200 mb-4">
                      {solution.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#FF6A00] font-semibold group-hover:gap-4 transition-all">
                      Learn More <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#1A2639] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1A2639]/90 transition-all"
            >
              Explore All Services <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#1A2639] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose{" "}
              <span className="text-[#FF6A00]">
                CE Infrastructure LLP
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Your trusted partner for infrastructure excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "CE certified equipment with trained crew and zero-compromise safety protocols",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description:
                  "Round-the-clock service with smart tracking and rapid response",
              },
              {
                icon: CheckCircle,
                title: "97% Uptime",
                description:
                  "Industry-leading reliability with preventive maintenance and backup fleet",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <feature.icon
                  className="text-[#FF6A00] mb-4"
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
      <section className="py-20 bg-[##f4f5f7]]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-#1a2639 mb-6 text-[#1a2639]"
          >
            Ready to Build Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-#1a2639 text-lg mb-8 max-w-2xl mx-auto text-[#1a2639]"
          >
            Get a customized quote and experience CE
            Infrastructure excellence
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#1A2639] text-#1a2639 px-8 py-4 rounded-lg font-semibold hover:bg-[#1A2639]/90 transition-all shadow-lg text-[#ffffff]"
            >
              Contact Us Today <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}