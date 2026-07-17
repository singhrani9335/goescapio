"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";

import DestinationMegaMenu from "./destination/DestinationMegaMenu";
import ThemeMegaMenu from "./theme/ThemeMegaMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [destinationOpen, setDestinationOpen] = useState(false);

  const themeRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);

  const themeTimer = useRef<NodeJS.Timeout | null>(null);
  const destinationTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (themeRef.current && !themeRef.current.contains(target)) {
        setThemeOpen(false);
      }

      if (destinationRef.current && !destinationRef.current.contains(target)) {
        setDestinationOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
      {/* TOP BAR */}

      <div className="hidden bg-[#081B2A] text-white md:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <a
              href="tel:+917744848000"
              className="
              flex cursor-pointer items-center gap-2
              text-sm font-semibold transition
              hover:text-blue-300
              "
            >
              <Phone size={15} />
              07744848000
            </a>

            <a
              href="mailto:sales@goescapio.in"
              className="
              flex cursor-pointer items-center gap-2
              text-sm font-semibold transition
              hover:text-blue-300
              "
            >
              <Mail size={15} />
              sales@goescapio.in
            </a>
          </div>

          <div className="flex items-center gap-8">
            <button
              className="
              flex cursor-pointer items-center gap-1
              text-sm font-semibold
              "
            >
              ₹ INR
              <ChevronDown size={14} />
            </button>

            <button
              className="
              cursor-pointer text-sm font-semibold
              hover:text-blue-300
              "
            >
              Manage Booking →
            </button>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}

      <div className="relative mx-auto max-w-7xl">
        <div className="flex h-[78px] items-center justify-between px-6">
          {/* MOBILE */}

          <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* LOGO */}

          <Link
            href="/"
            className="
            relative h-16 w-44
            transition hover:scale-105
            "
          >
            <Image
              src="/images/darklogo.png"
              alt="GoEscapio"
              fill
              priority
              sizes="176px"
              className="object-contain"
            />
          </Link>

          {/* NAVIGATION */}

          <nav
            className="
            hidden items-center gap-11
            text-[15px] font-bold
            text-gray-800 md:flex
            "
          >
            <Link
              href="/#home"
              className="
              cursor-pointer transition
              hover:text-blue-600
              "
            >
              Home
            </Link>

            {/* DESTINATIONS */}

            <div
              ref={destinationRef}
              className="relative py-6 -my-6"
              onMouseEnter={() => {
                if (destinationTimer.current)
                  clearTimeout(destinationTimer.current);

                setDestinationOpen(true);
              }}
              onMouseLeave={() => {
                destinationTimer.current = setTimeout(() => {
                  setDestinationOpen(false);
                }, 200);
              }}
            >
              <button
                className="
                flex cursor-pointer items-center gap-1
                transition hover:text-blue-600
                "
              >
                Destinations
                <ChevronDown
                  size={16}
                  className={`
                  transition-transform duration-300
                  ${destinationOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              <DestinationMegaMenu isOpen={destinationOpen} />
            </div>

            {/* THEMES */}

            <div
              ref={themeRef}
              className="relative py-6 -my-6"
              onMouseEnter={() => {
                if (themeTimer.current) clearTimeout(themeTimer.current);

                setThemeOpen(true);
              }}
              onMouseLeave={() => {
                themeTimer.current = setTimeout(() => {
                  setThemeOpen(false);
                }, 200);
              }}
            >
              <button
                className="
                flex cursor-pointer items-center gap-1
                transition hover:text-blue-600
                "
              >
                Themes
                <ChevronDown
                  size={16}
                  className={`
                  transition-transform duration-300
                  ${themeOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              <ThemeMegaMenu isOpen={themeOpen} />
            </div>

            <Link
              href="/contact"
              className="
              cursor-pointer transition
              hover:text-blue-600
              "
            >
              Contact Us
            </Link>
          </nav>

          {/* RIGHT CONTACT */}

          <div
            className="
            hidden items-center gap-3 md:flex
            "
          >
            <div
              className="
              flex h-11 w-11 items-center
              justify-center rounded-full
              bg-blue-100 text-blue-600
              "
            >
              <Phone size={22} />
            </div>

            <div>
              <a
                href="tel:+917744848000"
                className="
                cursor-pointer text-lg
                font-extrabold text-gray-900
                hover:text-blue-600
                "
              >
                07744848000
              </a>

              <p
                className="
                text-xs font-medium text-gray-500
                "
              >
                Grab The Best Deal Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
