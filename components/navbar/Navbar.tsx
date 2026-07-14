"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (themeRef.current && !themeRef.current.contains(target)) {
        setThemeOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      {/* ================= TOP BAR ================= */}

      <div className="hidden bg-[#081B2A] text-white md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <a
              href="tel:+917744848000"
              className="flex items-center gap-2 text-xs"
            >
              <Phone size={14} />
              07744848000
            </a>

            <a
              href="mailto:sales@goescapio.in"
              className="flex items-center gap-2 text-xs"
            >
              <Mail size={14} />
              sales@goescapio.in
            </a>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <button className="flex items-center gap-1">
              ₹ INR
              <ChevronDown size={14} />
            </button>

            <button>Manage Booking →</button>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}

      <div className="relative mx-auto max-w-7xl">
        <div className="flex h-[72px] items-center justify-between px-6">
          {/* Mobile */}

          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}

          <Link href="/" className="relative h-12 w-36">
            <Image
              src="/images/darklogo.png"
              alt="GoEscapio"
              fill
              priority
              sizes="144px"
              className="object-contain"
            />
          </Link>

          {/* Navigation */}

          <nav className="hidden items-center gap-10 font-medium text-gray-700 md:flex">
            <Link href="/#home" className="hover:text-blue-600">
              Home
            </Link>

            <Link
              href="/#destinations"
              className="hover:text-blue-600"
            >
              Destinations
            </Link>

            {/* Themes */}

            <div ref={themeRef} className="relative">
              <button
                onClick={() => setThemeOpen(!themeOpen)}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                Themes
                <ChevronDown size={16} />
              </button>

              {themeOpen && (
                <div className="absolute left-0 top-12 w-64 overflow-hidden rounded-xl border bg-white shadow-xl">
                  {[
                    "Adventure Tours",
                    "Honeymoon Tours",
                    "Family Tours",
                    "Beach Holidays",
                    "Wildlife Tours",
                  ].map((item) => (
                    <Link
                      key={item}
                      href="/#themes"
                      className="block px-6 py-4 hover:bg-gray-50"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-blue-600">
              Contact Us
            </Link>
          </nav>

          {/* Right Contact */}

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Phone size={20} />
            </div>

            <div>
              <p className="font-bold text-gray-900">07744848000</p>
              <p className="text-xs text-gray-500">Grab The Best Deal Now</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}