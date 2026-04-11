import { motion } from "motion/react";
import {
  Users,
  TrendingUp,
  Award,
  Heart,
  Briefcase,
  GraduationCap,
  DollarSign,
  Shield,
  Trophy,
  Calendar,
  BookOpen,
  Rocket,
  HardHat,
  PartyPopper,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const openings = [
  {
    title: "Equipment Operator",
    department: "Operations",
    location: "Multiple Locations",
    type: "Full-time",
    experience: "2-5 years",
    description:
      "Operate aerial work platforms and ensure safe execution of projects",
  },
  {
    title: "Project Manager",
    department: "Project Management",
    location: "Mumbai",
    type: "Full-time",
    experience: "5-8 years",
    description:
      "Oversee turnkey execution of pier erection and infrastructure projects",
  },
  {
    title: "Welding Specialist",
    department: "Ship Repair",
    location: "Port Cities",
    type: "Full-time",
    experience: "3-7 years",
    description:
      "Perform welding and fabrication work on ship repair projects",
  },
  {
    title: "Maintenance Engineer",
    department: "Engineering",
    location: "Delhi NCR",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Maintain and service fleet equipment ensuring optimal uptime",
  },
  {
    title: "Safety Officer",
    department: "Safety & Compliance",
    location: "Multiple Locations",
    type: "Full-time",
    experience: "3-6 years",
    description:
      "Implement and monitor safety protocols across projects",
  },
  {
    title: "Sales Executive",
    department: "Sales",
    location: "Bangalore",
    type: "Full-time",
    experience: "2-5 years",
    description:
      "Drive business development in infrastructure and industrial sectors",
  },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<number | null>(
    null,
  );

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
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Build Your Career at{" "}
              <span className="text-[#FF6A00]">
                CE Infrastructure
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Join a team that's taking the industry to new
              heights – safely, efficiently, reliably
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1A2639] mb-4"
          >
            Open{" "}
            <span className="text-[#FF6A00]">Positions</span>
          </motion.h2>
          <p className="text-center text-gray-600 mb-12">
            Explore opportunities to join our growing team
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openings.slice(0, 2).map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-[#FF6A00]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A2639] mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="bg-[#FF6A00] px-3 py-1 rounded-full font-semibold text-[#ffffff]">
                        {job.department}
                      </span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Briefcase
                    className="text-[#FF6A00]"
                    size={24}
                  />
                </div>

                <p className="text-gray-600 mb-4">
                  {job.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">
                      Location:
                    </span>
                    <div className="font-semibold text-[#1A2639]">
                      {job.location}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">
                      Experience:
                    </span>
                    <div className="font-semibold text-[#1A2639]">
                      {job.experience}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(index)}
                  className="w-full bg-[#1A2639] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1A2639]/90 transition-all"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1A2639] mb-16"
          >
            Why Work With{" "}
            <span className="text-[#FF6A00]">Us</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Collaborative Culture",
                description:
                  "Work with passionate professionals in a supportive team environment",
              },
              {
                icon: TrendingUp,
                title: "Growth Opportunities",
                description:
                  "Clear career progression paths and continuous learning programs",
              },
              {
                icon: Award,
                title: "Industry Leadership",
                description:
                  "Be part of India's leading elevation and infrastructure solutions provider",
              },
              {
                icon: Heart,
                title: "Work-Life Balance",
                description:
                  "Competitive benefits with focus on employee well-being",
              },
              {
                icon: GraduationCap,
                title: "Training & Development",
                description:
                  "Regular skill enhancement and certification programs",
              },
              {
                icon: Briefcase,
                title: "Challenging Projects",
                description:
                  "Work on prestigious projects with India's top industrial companies",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border-2 border-transparent hover:border-[#FF6A00] transition-all"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#d3d3d3]">
                  <value.icon
                    className="text-[#1A2639]"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1A2639] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#1A2639] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Employee{" "}
            <span className="text-[#FF6A00]">Benefits</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              { icon: DollarSign, title: "Competitive Salary" },
              { icon: Shield, title: "Health Insurance" },
              { icon: Trophy, title: "Performance Bonuses" },
              { icon: Calendar, title: "Paid Time Off" },
              { icon: BookOpen, title: "Training Programs" },
              { icon: Rocket, title: "Career Development" },
              { icon: HardHat, title: "Safety Equipment" },
              { icon: PartyPopper, title: "Team Events" },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center"
              >
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <div className="font-semibold">{benefit.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {selectedJob !== null && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedJob(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-4 sm:p-8 max-w-2xl w-full my-4 sm:my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-[#1A2639] mb-2">
              Apply for Position
            </h2>
            <h3 className="text-xl text-[#FF6A00] mb-6">
              {openings[selectedJob].title}
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#FF6A00]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#FF6A00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#FF6A00]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#FF6A00]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <input
                  type="number"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#FF6A00]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#FF6A00]"
                />
                <p className="text-xs text-gray-500 mt-1">
                  PDF, DOC, or DOCX (Max 5MB)
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#FF6A00]"
                  placeholder="Tell us why you're a great fit for this role..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#1A2639] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1A2639]/90 transition-all"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2639] mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-[#1A2639] text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals.
              Send us your resume and we'll keep you in mind for
              future opportunities.
            </p>
            <Link to="/contact">
              <button className="bg-[#1A2639] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1A2639]/90 transition-all shadow-lg">
                Send General Application
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}