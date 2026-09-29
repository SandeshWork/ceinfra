import Link from "next/link";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import footerLogo from "@/assets/footer-logo.png";

export default function Footer() {
  return (
    <footer className="text-white pt-16 pb-8 bg-[#1a2639]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={footerLogo.src} alt="CE Infrastructure LLP" className="w-12 h-12 object-contain" />
              <div>
                <div className="font-bold text-lg">CE Infrastructure LLP</div>
                <div className="text-xs text-[#ffffff]">by Crescent Enterprises</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              Pan India infrastructure solutions provider. Safety-first partner delivering excellence across industries.
            </p>
            <p className="text-[#FF6A00] text-sm font-semibold mb-6">
              Pan India Operations
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/ce-infrastructure-llp/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6A00] rounded-lg flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/ceinfrastructure/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6A00] rounded-lg flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61566683195244"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6A00] rounded-lg flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <button
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-colors cursor-not-allowed opacity-50"
                title="YouTube"
                disabled
              >
                <Youtube size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[#ffffff]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-[#FF6A00]">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#FF6A00]">Services</Link></li>
              <li><Link href="/industries" className="text-gray-300 hover:text-[#FF6A00]">Industries</Link></li>
              <li><Link href="/why-crescent" className="text-gray-300 hover:text-[#FF6A00]">Why CE Infrastructure</Link></li>
            </ul>
          </div>

          {/* Solutions & Services */}
          <div>
            <h3 className="font-semibold mb-4 text-[#ffffff]">Solutions & Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/machineries" className="text-gray-300 hover:text-[#FF6A00]">Machineries</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-[#FF6A00]">Projects</Link></li>
              <li className="text-gray-300">Ship Repair Services</li>
              <li className="text-gray-300">Pier Girder Erection</li>
              <li className="text-gray-300">Piling Foundation Works</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-[#ffffff]">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-300">
                <span className="font-semibold">Operations:</span><br />
                B-1047, 1st Floor<br />
                Bima Complex, Kalamboli Steel Market<br />
                Navi Mumbai – 410218
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Admin:</span><br />
                C-4084/85/86, 4th Floor<br />
                Bima Complex, Kalamboli Steel Market<br />
                Navi Mumbai – 410218
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Phone:</span><br />
                +91 91525 68545
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">Email:</span><br />
                sales@ceinfrastructure.in<br />
                info@ceinfrastructure.in
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400 space-y-2">
          <p>&copy; {new Date().getFullYear()} CE Infrastructure LLP by Crescent Enterprises. All rights reserved.</p>
          <p>
            <Link href="/privacy-policy" className="hover:text-[#FF6A00] transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
