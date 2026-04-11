import image_b2b68b978befbc1f68c481ea5a6efcb6b47be227 from '../../assets/b2b68b978befbc1f68c481ea5a6efcb6b47be227.png'
import image_1a6279a726b7fa8ca737334e5adcae69e424d060 from '../../assets/1a6279a726b7fa8ca737334e5adcae69e424d060.png'
import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Phone, Download, ChevronDown, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/ce-logo.png";
import footerLogo from "../../assets/footer-logo.png";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Why CE Infrastructure", path: "/why-crescent" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ isScrolled ? "bg-[#1A2639] shadow-lg" : "bg-[#1A2639]/95" } bg-[#ffffffdb]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <img src={logo} alt="CE Infrastructure LLP" className="w-12 h-12 sm:w-18 sm:h-18 object-contain rounded-[10px] flex-shrink-0" />
              <div>
                <div className="text-#1a2639 font-bold text-sm sm:text-xl text-[#1a2639] leading-tight">CE Infrastructure LLP</div>
                <div className="text-[10px] sm:text-xs text-[#1A2639]">by Crescent Enterprises</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 bg-[#ff6a0000]">
              {navLinks.map((link) => {
                if (link.name === "Services") {
                  return (
                    <div
                      key={link.path}
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`text-sm font-medium transition-colors hover:text-[#FF6A00] flex items-center gap-1 py-2 ${ location.pathname === link.path || location.pathname === "/machineries" || location.pathname === "/projects" ? "text-[#1a2639]" : "text-#1a2639" } text-[#1a2639]`}
                      >
                        {link.name}
                        <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                      </Link>
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 pt-2 z-50">
                          <div className="w-48 bg-white rounded-lg shadow-xl py-2">
                            <Link
                              to="/machineries"
                              className="block px-4 py-2 text-sm text-[#1A2639] hover:bg-[#FF6A00] hover:text-white transition-colors"
                            >
                              Machineries
                            </Link>
                            <Link
                              to="/projects"
                              className="block px-4 py-2 text-sm text-[#1A2639] hover:bg-[#FF6A00] hover:text-white transition-colors"
                            >
                              Projects
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-[#1a2639] ${ location.pathname === link.path ? "text-[#1a2639]" : "text-#1a2639" } text-[#1a2639]`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link to="/contact" className="bg-[#FF6A00] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#FF6A00]/90 transition-all">
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#1A2639] border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => {
                if (link.name === "Services") {
                  return (
                    <div key={link.path}>
                      <Link
                        to={link.path}
                        className={`block px-4 py-2 rounded-lg transition-colors ${
                          location.pathname === link.path
                            ? "bg-[#FF6A00] text-white"
                            : "text-white hover:bg-white/10"
                        }`}
                      >
                        {link.name}
                      </Link>
                      <div className="ml-4 mt-2 space-y-2">
                        <Link
                          to="/machineries"
                          className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-lg"
                        >
                          • Machineries
                        </Link>
                        <Link
                          to="/projects"
                          className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-lg"
                        >
                          • Projects
                        </Link>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? "bg-[#FF6A00] text-white"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link to="/contact" className="w-full bg-[#FF6A00] text-white px-6 py-2 rounded-lg font-semibold">
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="text-white pt-16 pb-8 bg-[#1a2639]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={footerLogo} alt="CE Infrastructure LLP" className="w-12 h-12 object-contain" />
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
                  href="https://www.linkedin.com/in/media-crescent-b17281402/"
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
                <button
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-colors cursor-not-allowed opacity-50"
                  title="Facebook"
                  disabled
                >
                  <Facebook size={20} className="text-white" />
                </button>
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
                <li><Link to="/about" className="text-gray-300 hover:text-[#FF6A00]">About Us</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-[#FF6A00]">Services</Link></li>
                <li><Link to="/industries" className="text-gray-300 hover:text-[#FF6A00]">Industries</Link></li>
                <li><Link to="/why-crescent" className="text-gray-300 hover:text-[#FF6A00]">Why CE Infrastructure</Link></li>
              </ul>
            </div>

            {/* Solutions & Services */}
            <div>
              <h3 className="font-semibold mb-4 text-[#ffffff]">Solutions & Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/machineries" className="text-gray-300 hover:text-[#FF6A00]">Machineries</Link></li>
                <li><Link to="/projects" className="text-gray-300 hover:text-[#FF6A00]">Projects</Link></li>
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

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} CE Infrastructure LLP by Crescent Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Quick Actions */}
      <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 flex flex-col gap-2 sm:gap-3 z-40">
        <a
          href="tel:+919152568545"
          className="bg-[#FF6A00] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          title="Call Us"
        >
          <Phone size={24} />
        </a>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/uc?export=download&id=1D7jNDX86QyTTe7QmKlbjGGt6gQLNwGZb",
              "_blank",
            )
          }
          className="bg-[#1A2639] text-[#FF6A00] p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          title="Download Catalog"
        >
          <Download size={24} />
        </button>
        <a
          href="https://wa.me/919152568545"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          title="WhatsApp Support"
        >
          <MessageSquare size={24} />
        </a>
      </div>
    </div>
  );
}