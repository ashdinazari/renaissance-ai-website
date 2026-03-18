"use client";

import { useEffect, useState } from "react";

export function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-all duration-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-midnight/95 backdrop-blur-xl border-t border-white/10 px-4 py-3">
        <a
          href="/book"
          className="block w-full py-3.5 rounded-xl bg-gradient-to-r from-royal to-electric text-center text-white font-semibold shadow-[0_4px_14px_rgba(37,99,235,0.4)]"
        >
          Book a Call &rarr;
        </a>
      </div>
    </div>
  );
}
