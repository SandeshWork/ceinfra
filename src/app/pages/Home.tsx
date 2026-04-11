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
  ChevronLeft,
  ChevronRight,
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

const heroCarouselImages = [
  {
    url: "https://images.unsplash.com/photo-1765435149256-56f3ea3db68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBsaWZ0JTIwZXF1aXBtZW50JTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzI0NzM3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Aerial lift equipment at construction site",
    highlights: [
      { value: "150+", label: "Machinery Types" },
      { value: "IPAF Certified", label: "Operators" },
      { value: "Pan India", label: "Operations" },
    ],
  },
  {
    url: "https://images.unsplash.com/photo-1752980628969-62c587373c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRybyUyMHJhaWwlMjBjb25zdHJ1Y3Rpb24lMjBicmlkZ2V8ZW58MXx8fHwxNzcyNDczNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Metro rail and bridge construction",
    highlights: [
      { value: "500+", label: "Projects Delivered" },
      { value: "Metro & Rail", label: "Specialisation" },
      { value: "Zero LTI", label: "Safety Record" },
    ],
  },
  {
    url: "https://images.unsplash.com/photo-1762530358132-94b652b2e514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY3JhbmUlMjBwaWVyJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3MjQ3Mzc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Industrial crane and pier construction",
    highlights: [
      { value: "100T+", label: "Lifting Capacity" },
      { value: "Marine Works", label: "Port & Pier" },
      { value: "24/7", label: "Site Support" },
    ],
  },
  {
    url: "https://images.unsplash.com/photo-1771793307225-f92a984b3d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29tJTIwbGlmdCUyMGFlcmlhbCUyMHBsYXRmb3JtJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3NTQwOTMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Boom lift aerial platform construction",
    highlights: [
      { value: "32+ Cities", label: "Across India" },
      { value: "Trained Crew", label: "With Every Machine" },
      { value: "97%", label: "Equipment Uptime" },
    ],
  },
  {
    url: "https://images.unsplash.com/photo-1747026477608-2aaed8ec76f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMHBsYW50fGVufDF8fHx8MTc3MjQ0MTIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Industrial manufacturing plant",
    highlights: [
      { value: "9+ Sectors", label: "Industry Served" },
      { value: "Heavy Industry", label: "Expertise" },
      { value: "On-Site", label: "Maintenance" },
    ],
  },
  {
    url: "https://images.unsplash.com/photo-1768128834332-7d3479c8d634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI0NzM3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Oil refinery equipment and infrastructure",
    highlights: [
      { value: "Oil & Gas", label: "Sector Ready" },
      { value: "HAZMAT", label: "Compliant Fleet" },
      { value: "ISO Certified", label: "Processes" },
    ],
  },
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroCarouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? heroCarouselImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroCarouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Background Images */}
        <div className="absolute inset-0">
          {heroCarouselImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Multiple Layer Dark Gradient for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/70 via-[#1A2639]/65 to-[#000000]/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A2639]/30 to-[#000000]/50 z-10" />

        {/* Carousel Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Pan India{" "}
            <span className="text-[#FF6A00]">Infrastructure Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md"
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
              className="bg-[#FF6A00] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#FF6A00]/90 transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Get a Quote <ArrowRight size={20} />
            </Link>
            <button
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all border-2 border-white/50 shadow-lg hover:shadow-xl"
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

          {/* Per-slide highlights — animate with each image change */}
          <motion.div
            key={`highlights-${currentImageIndex}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {heroCarouselImages[currentImageIndex].highlights.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center min-w-[100px]"
              >
                <div className="text-[#FF6A00] font-bold text-lg leading-tight">{stat.value}</div>
                <div className="text-white/75 text-xs font-medium mt-0.5 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-8">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm border border-white/30 transition-all shadow-lg hover:shadow-xl"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2 items-center">
            {heroCarouselImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                animate={{
                  width: index === currentImageIndex ? 24 : 8,
                  backgroundColor:
                    index === currentImageIndex ? "#FF6A00" : "rgba(255, 255, 255, 0.5)"
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full backdrop-blur-sm border border-white/30 cursor-pointer hover:bg-white/70"
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm border border-white/30 transition-all shadow-lg hover:shadow-xl"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20"
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