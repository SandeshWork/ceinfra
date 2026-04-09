import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
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

  const GOOGLE_SHEET_WEBAPP_URL =
    "https://script.google.com/macros/s/AKfycbzYpD5wrgzdhzUb7ER6E4FwNYqgb6UKHd_MgWD0ZmsB-Or7VhbD8WRDOWkxFEeyzeGJOA/exec";

  const getSelectedServices = () => {
    return formData.service ? [formData.service] : [];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      const responseText = await response.text();
      console.log("Response text:", responseText);

      if (!response.ok) {
        throw new Error(
          `Server error: ${response.status} - ${responseText || response.statusText}`
        );
      }

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in{" "}
              <span className="text-[#FF6A00]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#d3d3d3]">
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
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#1A2639] mb-6">
                Send Us a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#FF6A00] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#FF6A00] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#FF6A00] transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#FF6A00] transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#FF6A00] transition-colors"
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
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#FF6A00] transition-colors"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A2639] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#1A2639]/90 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
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
          paddingBottom: "37.04%", // 400/1080 * 100 = aspect ratio
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