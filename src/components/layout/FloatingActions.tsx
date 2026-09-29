"use client";

import { Phone, Download } from "lucide-react";
import { MessageSquare } from "lucide-react";

export default function FloatingActions() {
  return (
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
  );
}
