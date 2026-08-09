import { motion } from "motion/react";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const sections = [
  { id: "who-we-are", title: "1. Who We Are" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Information" },
  { id: "legal-basis", title: "4. Legal Basis for Processing" },
  { id: "sharing", title: "5. How We Share Information" },
  { id: "cookies", title: "6. Cookies & Third-Party Services" },
  { id: "security", title: "7. Data Storage & Security" },
  { id: "retention", title: "8. Data Retention" },
  { id: "rights", title: "9. Your Rights" },
  { id: "children", title: "10. Children's Privacy" },
  { id: "changes", title: "11. Changes to This Policy" },
  { id: "contact", title: "12. Contact Us & Grievance Officer" },
];

export default function PrivacyPolicy() {
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
            <div className="w-16 h-16 rounded-full bg-[#FF6A00]/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="text-[#FF6A00]" size={32} />
            </div>
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-[#FF6A00]">Policy</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              How CE Infrastructure LLP collects, uses, and protects your
              information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: August 10, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-28 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#1A2639] mb-4">
                  On This Page
                </h3>
                <ul className="space-y-2 text-sm">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-gray-600 hover:text-[#FF6A00] transition-colors"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Policy Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-12 text-gray-600 text-base leading-relaxed"
            >
              <p>
                CE Infrastructure LLP ("CE Infrastructure", "Crescent
                Enterprises", "we", "us", or "our") respects your privacy and
                is committed to protecting the personal information you share
                with us through our website{" "}
                <span className="font-semibold text-[#1A2639]">
                  ceinfrastructure.in
                </span>{" "}
                (the "Site") and in the course of our equipment rental,
                infrastructure, and project execution services (the
                "Services"). This Privacy Policy explains what information we
                collect, why we collect it, how we use and safeguard it, and
                the choices and rights available to you. It is drafted in
                line with the Information Technology Act, 2000 and the
                Information Technology (Reasonable Security Practices and
                Procedures and Sensitive Personal Data or Information) Rules,
                2011, and the Digital Personal Data Protection Act, 2023
                ("DPDP Act") as applicable in India.
              </p>

              {/* 1. Who We Are */}
              <div id="who-we-are">
                <h2 className="text-2xl font-bold text-[#1A2639] mb-4">
                  1. Who We Are
                </h2>
                <p className="mb-3">
                  CE Infrastructure LLP, operating under Crescent Enterprises,
                  is a Pan India infrastructure solutions provider offering
                  aerial work platform and heavy machinery rental (boom
                  lifts, scissor lifts, crawler cranes, piling rigs, and
                  more), pier girder erection, ship repair services, and
                  piling foundation works. For the purposes of this Policy,
                  CE Infrastructure LLP is the "data fiduciary" responsible
                  for the personal data described below.
                </p>
                <p>
                  Our registered offices are located at Bima Complex,
                  Kalamboli Steel Market, Navi Mumbai – 410218, India.
                </p>
              </div>

              {/* 2. Information We Collect */}
              <div id="information-we-collect">
                <h2 className="text-2xl font-bold text-[#1A2639] mb-4">
                  2. Information We Collect
                </h2>
                <p className="mb-3">
                  We only collect information that you choose to share with
                  us. Depending on how you interact with the Site, this may
                  include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li>
                    <span className="font-semibold text-[#1A2639]">
                      Contact & enquiry details:
                    </span>{" "}
                    full name, email address, phone number, company name, the
                    service you are enquiring about, and the message you
                    submit through our "Get a Quote" / Contact form.
                  </li>
                  <li>
                    <span className="font-semibold text-[#1A2639]">
                      Careers / job application details:
                    </span>{" "}
                    your name, contact details, and resume/CV, along with any
                    other information you choose to include, when you apply
                    for a position through our Careers page.
                  </li>
                  <li>
                    <span className="font-semibold text-[#1A2639]">
                      Direct communications:
                    </span>{" "}
                    information you provide when you call, email, or message
                    us on WhatsApp using the contact details published on the
                    Site.
                  </li>
                  <li>
                    <span className="font-semibold text-[#1A2639]">
                      Technical & usage data:
                    </span>{" "}
                    standard log data such as IP address, browser type,
                    device information, pages visited, and referring URLs,
                    collected automatically when you browse the Site.
                  </li>
                </ul>
                <p>
                  We do not require you to create an account to use the Site,
                  and we do not process any online payments through the Site.
                </p>
              </div>

              {/* 3. How We Use Your Information */}
              <div id="how-we-use">
                <h2 className="text-2xl font-bold text-[#1A2639] mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Respond to your enquiries and provide quotes for
                    machinery rental or infrastructure services;
                  </li>
                  <li>
                    Communicate with you about your enquiry, project, or job
                    application via phone, email, or WhatsApp;
                  </li>
                  <li>
                    Evaluate applications for employment and contact
                    candidates regarding open or future positions;
                  </li>
                  <li>
                    Maintain records of business enquiries for internal
                    sales and operational tracking;
                  </li>
                  <li>
                    Improve our Site, understand how visitors use it, and
                    keep it secure and functioning correctly;
                  </li>
                  <li>
                    Comply with applicable legal, regulatory, or contractual
                    obligations.
                  </li>
                </ul>
              </div>

              {/* 4. Legal Basis */}
              <div id="legal-basis">
                <h2 className="text-2xl font-bold text-[#1A2639] mb-4">
                  4. Legal Basis for Processing
                </h2>
                <p>
                  We process your personal data on the basis of your consent
                  (for example, when you voluntarily submit the contact or
                  careers form), for the performance of a business
                  relationship or steps taken at your request prior to
                  entering one (such as preparing a quote), and, where
                  applicable, to comply with our legal obligations. You may
                  withdraw your consent at any time by contacting us using
                  the details in Section 12, without affecting the lawfulness
                  of processing carried out before withdrawal.
                </p>
              </div>

              {/* 5. Sharing */}
              <div id="sharing">
                <h2 className="text-2xl font-bold text-[#1A2639] mb-4">
                  5. How We Share Information
                </h2>
                <p className="mb-3">
                  We do not sell, rent, or trade your personal information.
                  We only share it in the following limited circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold text-[#1A2639]">
                      Service providers:
                    </span>{" "}
                    with trusted third parties that help us operate the Site
                    and process enquiries, such as Google (for form
                    submission, spreadsheet storage, and map display) and our
                    website hosting provider, solely for the purpose of
                    providing these services to us.
                  </li>
                  <li>
                    <span className="font-semibold text-[#1A2639]">
                      Internal teams:
                    </span>{" "}
                    with our sales, operations, and HR personnel who need the
                    information to respond to your enquiry or application.
                  </li>
                  <li>
                    <span className="font-semibold text-[#1A2639]">
                      Legal requirements:
                    </span>{" "}
                    where disclosure is required to comply with a legal
                    obligation, court order, or governmental request, or to
                    protect the rights, property, or safety of CE
                    Infrastructure LLP, our clients, or the public.
                  </li>
                </ul>
              </div>

              {/* 6. Cookies & Third Party Services */}
              <div id="cookies">
                <h2 className="text-2xl font-bold text-[#1A2639] mb-4">
                  6. Cookies & Third-Party Services
                </h2>
                <p className="mb-3">
                  Our Site may use essential cookies and similar technologies
                  required for it to function correctly. We do not currently
                  use cookies for advertising or cross-site tracking. Certain
                  pages embed third-party services that operate under their
                  own privacy policies, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold text-[#1A2639]">
                      Google Maps
                    </span>{" "}
                    – used to display our office location.
                  </li>
                  <li>
                    <span className="font-semibold text-[#1A2639]">
                      WhatsApp
                    </span>{" "}
                    – used to enable click-to-chat support, subject to
                    WhatsApp's (Meta's) privacy policy.
                  </li>
                  <li>
                    <span className="font-semibold text-[#1A2639]">
                      LinkedIn, Instagram, and Facebook
                    </span>{" "}
                    – linked from our Site; any information you share on
                    these platforms is governed by their respective privacy
                    policies.
                  </li>
                </ul>
                <p className="mt-3">
                  We encourage you to review the privacy policies of these
                  third-party services, as we do not control how they
                  process your data.
                </p>
              </div>

              {/* 7. Security */}
              <div id="security">
                <h2 className="text-2xl font-bold text-[#1A2639] mb-4">
                  7. Data Storage & Security
                </h2>
                <p>
                  We implement reasonable technical and organizational
                  safeguards designed to protect your personal information
                  from unauthorized access, alteration, disclosure, or
                  destruction. Enquiry and application data submitted through
                  our forms is stored using access-controlled Google
                  services. However, no method of transmission over the
                  internet or electronic storage is completely secure, and we
                  cannot guarantee absolute security.
                </p>
              </div>

              {/* 8. Retention */}
              <div id="retention">
                <h2 className="text-2xl font-bold text-[#1A2639] mb-4">
                  8. Data Retention
                </h2>
                <p>
                  We retain personal information only for as long as
                  reasonably necessary to fulfil the purposes described in
                  this Policy, including responding to your enquiry,
                  maintaining business and sales records, or complying with
                  our legal and accounting obligations. Job application data
                  is retained for a reasonable period to allow us to consider
                  candidates for current and future openings, unless you ask
                  us to delete it sooner.
                </p>
              </div>

              {/* 9. Rights */}
              <div id="rights">
                <h2 className="text-2xl font-bold text-[#1A2639] mb-4">
                  9. Your Rights
                </h2>
                <p className="mb-3">
                  Subject to applicable law, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request confirmation of and access to the personal data we hold about you;</li>
                  <li>Request correction of inaccurate or incomplete data;</li>
                  <li>Request erasure of your personal data, where applicable;</li>
                  <li>Withdraw consent you previously provided;</li>
                  <li>Register a grievance regarding our handling of your personal data.</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, please contact us using
                  the details in Section 12. We will respond within a
                  reasonable timeframe and in accordance with applicable law.
                </p>
              </div>

              {/* 10. Children */}
              <div id="children">
                <h2 className="text-2xl font-bold text-[#1A2639] mb-4">
                  10. Children's Privacy
                </h2>
                <p>
                  Our Site and Services are intended for businesses and
                  working professionals and are not directed at children. We
                  do not knowingly collect personal data from individuals
                  under the age of 18. If you believe a child has provided us
                  with personal data, please contact us so we can delete it.
                </p>
              </div>

              {/* 11. Changes */}
              <div id="changes">
                <h2 className="text-2xl font-bold text-[#1A2639] mb-4">
                  11. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to
                  reflect changes in our practices or applicable law. The
                  "Last updated" date at the top of this page indicates when
                  this Policy was last revised. We encourage you to review
                  this page periodically.
                </p>
              </div>

              {/* 12. Contact */}
              <div id="contact">
                <h2 className="text-2xl font-bold text-[#1A2639] mb-4">
                  12. Contact Us & Grievance Officer
                </h2>
                <p className="mb-6">
                  If you have questions about this Privacy Policy, wish to
                  exercise your rights, or have a grievance regarding the
                  processing of your personal data, please reach out to us:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-[#FF6A00] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-[#1A2639]">Email</div>
                      <div>info@ceinfrastructure.in</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-[#FF6A00] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-[#1A2639]">Phone</div>
                      <div>+91 91525 68545</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#FF6A00] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-[#1A2639]">Address</div>
                      <div>
                        C-4084/85/86, 4th Floor, Bima Complex, Kalamboli
                        Steel Market, Navi Mumbai – 410218, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
