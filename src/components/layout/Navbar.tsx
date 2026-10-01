"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/ce-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Why CE Infrastructure", path: "/why-crescent" },
  { name: "Blog", path: "/blog" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

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
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#1A2639] shadow-lg" : "bg-[#1A2639]/95"} bg-[#ffffffdb]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <img src={logo.src} alt="CE Infrastructure LLP" className="w-12 h-12 sm:w-18 sm:h-18 object-contain rounded-[10px] flex-shrink-0" />
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
                      href={link.path}
                      className={`text-sm font-medium transition-colors hover:text-[#FF6A00] flex items-center gap-1 py-2 ${pathname === link.path || pathname === "/machineries" || pathname === "/projects" ? "text-[#1a2639]" : "text-#1a2639"} text-[#1a2639]`}
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                    </Link>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="w-48 bg-white rounded-lg shadow-xl py-2">
                          <Link
                            href="/machineries"
                            className="block px-4 py-2 text-sm text-[#1A2639] hover:bg-[#FF6A00] hover:text-white transition-colors"
                          >
                            Machineries
                          </Link>
                          <Link
                            href="/projects"
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
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#1a2639] ${pathname === link.path ? "text-[#1a2639]" : "text-#1a2639"} text-[#1a2639]`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link href="/contact" className="bg-[#FF6A00] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#FF6A00]/90 transition-all">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#FF6A00] p-2"
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
                      href={link.path}
                      className={`block px-4 py-2 rounded-lg transition-colors ${
                        pathname === link.path
                          ? "bg-[#FF6A00] text-white"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {link.name}
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      <Link
                        href="/machineries"
                        className="block px-4 py-2 text-sm text-white hover:bg-white/10 rounded-lg"
                      >
                        • Machineries
                      </Link>
                      <Link
                        href="/projects"
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
                  href={link.path}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    pathname === link.path
                      ? "bg-[#FF6A00] text-white"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link href="/contact" className="w-full bg-[#FF6A00] text-white px-6 py-2 rounded-lg font-semibold block text-center">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
