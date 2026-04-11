import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  User,
  Building2,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const GOOGLE_SHEET_WEBAPP_URL =
    "https://script.google.com/macros/s/AKfycbx9D91i_ADkThBAeHLd42sHgmJkz3HP_Kp8FJquERlZlZi3blphyj4qmplAT1mPiIvwEw/exec";

  const getSelectedServices = () => {
    return formData.service ? [formData.service] : [];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      full_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service_required: getSelectedServices(),
      message: formData.message,
    };

    try {
      console.log("Sending payload:", payload);
      console.log("To URL:", GOOGLE_SHEET_WEBAPP_URL);

      const response = await fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status);

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

      alert(
        "Thank you for your inquiry! We'll get back to you within 24 hours.",
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.error("Lead submission error:", errorMessage);
      alert(
        `Error submitting form: ${errorMessage}\n\nPlease check the browser console for more details.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Get in{" "}
              <span className="text-[#FF6A00]">Touch</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to elevate your project? Contact us today
              for a customized quote
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Phone,
                title: "Phone",
                info: "+91 91525 68545",
                subInfo: "Sales Hotline",
              },
              {
                icon: Mail,
                title: "Email",
                info: "sales@ceinfrastructure.in",
                subInfo: "24-hour response",
              },
              {
                icon: Clock,
                title: "Support",
                info: "24/7 Available",
                subInfo: "Emergency hotline",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                info: "+91 91525 68545",
                subInfo: "Quick response",
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all border-2 border-transparent hover:border-[#FF6A00]"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#d3d3d3]">
                  <contact.icon
                    className="text-[#1A2639]"
                    size={28}
                  />
                </div>
                <h3 className="font-bold text-[#1A2639] mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-700 font-semibold mb-1">
                  {contact.info}
                </p>
                <p className="text-sm text-gray-500">
                  {contact.subInfo}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#1A2639] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name Field */}
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative group"
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <User size={18} className="text-[#FF6A00]" />
                    Full Name
                    <span className="text-[#FF6A00] ml-auto">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl outline-none focus:border-[#FF6A00] focus:shadow-lg focus:shadow-[#FF6A00]/20 transition-all"
                    placeholder="John Doe"
                  />
                </motion.div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative"
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Mail size={18} className="text-[#FF6A00]" />
                      Email
                      <span className="text-[#FF6A00]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl outline-none focus:border-[#FF6A00] focus:shadow-lg focus:shadow-[#FF6A00]/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative"
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Phone size={18} className="text-[#FF6A00]" />
                      Phone
                      <span className="text-[#FF6A00]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl outline-none focus:border-[#FF6A00] focus:shadow-lg focus:shadow-[#FF6A00]/20 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </motion.div>
                </div>

                {/* Company Field */}
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative"
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Building2 size={18} className="text-[#FF6A00]" />
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl outline-none focus:border-[#FF6A00] focus:shadow-lg focus:shadow-[#FF6A00]/20 transition-all"
                    placeholder="Your Company Name"
                  />
                </motion.div>

                {/* Service Dropdown */}
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative"
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Briefcase size={18} className="text-[#FF6A00]" />
                    Service Required
                    <span className="text-[#FF6A00]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl outline-none focus:border-[#FF6A00] focus:shadow-lg focus:shadow-[#FF6A00]/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>

                      <optgroup label="Machineries">
                        <option value="transit-mixer">
                          Transit Mixer
                        </option>
                        <option value="concrete-boom-placers">
                          Concrete Boom Placers
                        </option>
                        <option value="boom-pumps">
                          Boom Pumps
                        </option>
                        <option value="piling-rigs">
                          Piling Rigs
                        </option>
                        <option value="barges">Barges</option>
                        <option value="fork-lifts">
                          Fork Lifts
                        </option>
                        <option value="pick-carry-cranes">
                          Pick and Carry Cranes
                        </option>
                        <option value="telehandlers">
                          Telehandlers
                        </option>
                        <option value="puller-axles">
                          Puller Axles
                        </option>
                      </optgroup>

                      <optgroup label="Projects">
                        <option value="ship-repair">
                          Ship Repair
                        </option>
                        <option value="pier-girder-erection">
                          Pier Girder Erection
                        </option>
                        <option value="piling-foundation">
                          Piling Foundation Works
                        </option>
                      </optgroup>

                      <option value="other">
                        Other / General Inquiry
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-[#1A2639]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative"
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <MessageCircle size={18} className="text-[#FF6A00]" />
                    Message
                    <span className="text-[#FF6A00]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl outline-none focus:border-[#FF6A00] focus:shadow-lg focus:shadow-[#FF6A00]/20 transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                  <div className="text-xs text-gray-500 mt-2">
                    {formData.message.length}/500 characters recommended
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-[#1A2639] to-[#1A2639]/80 hover:from-[#FF6A00] hover:to-[#FF6A00]/80 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:from-[#1A2639] disabled:hover:to-[#1A2639]/80"
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Send size={20} />
                      </motion.div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-500 text-center pt-4">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Operations Address */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin
                      className="text-[#ffffff]"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A2639] text-lg mb-2">
                      Operations Address
                    </h3>
                    <p className="text-gray-600">
                      B-1047, 1st Floor
                      <br />
                      Bima Complex, Kalamboli Steel Market
                      <br />
                      Navi Mumbai – 410218
                    </p>
                  </div>
                </div>
              </div>

              {/* Admin Address */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin
                      className="text-[#ffffff]"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A2639] text-lg mb-2">
                      Admin Address
                    </h3>
                    <p className="text-gray-600">
                      C-4084/85/86, 4th Floor
                      <br />
                      Bima Complex, Kalamboli Steel Market
                      <br />
                      Navi Mumbai – 410218
                    </p>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-[#1A2639] text-white p-8 rounded-xl">
                <h3 className="font-bold text-xl mb-4">
                  Department Contacts
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-[#FF6A00] font-semibold mb-1">
                      Sales & Business Development
                    </div>
                    <div className="text-sm">
                      sales@ceinfrastructure.in
                    </div>
                  </div>
                  <div>
                    <div className="text-[#FF6A00] font-semibold mb-1">
                      General Inquiries
                    </div>
                    <div className="text-sm">
                      info@ceinfrastructure.in
                    </div>
                  </div>
                  <div>
                    <div className="text-[#FF6A00] font-semibold mb-1">
                      Customer Support (24/7)
                    </div>
                    <div className="text-sm">
                      +91 91525 68545
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1A2639] mb-12"
          >
            Service Locations
          </motion.h2>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          maxWidth: "1080px",
          height: "0",
          paddingBottom: "56.25%", // 16:9 for mobile; overridden below for wider screens
          position: "relative",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          src="https://maps.google.com/maps?width=1080&height=400&hl=en&q=bima+complex+kalamboli&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          title="CE Infrastructure LLP, Navi Mumbai"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

        </div>
      </section>

      {/* Quick Actions */}
      
    </div>
  );
}