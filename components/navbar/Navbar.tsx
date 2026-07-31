"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";

import DestinationMegaMenu from "./destination/DestinationMegaMenu";
import ThemeMegaMenu from "./theme/ThemeMegaMenu";
import { useCurrency } from "@/context/CurrencyContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [destinationOpen, setDestinationOpen] = useState(false);

  // Currency Dropdown
  const [isOpen, setIsOpen] = useState(false);

  const { currency, setCurrency } = useCurrency();

  const themeRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);

  const themeTimer = useRef<NodeJS.Timeout | null>(null);
  const destinationTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (themeRef.current && !themeRef.current.contains(target)) {
        setThemeOpen(false);
      }

      if (
        destinationRef.current &&
        !destinationRef.current.contains(target)
      ) {
        setDestinationOpen(false);
      }

      if (
        currencyRef.current &&
        !currencyRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      {/* TOP BAR */}

      <div className="hidden bg-[#081B2A] text-white md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">
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

            {/* Currency Dropdown */}

            <div
              className="relative"
              ref={currencyRef}
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                  flex cursor-pointer items-center gap-1
                  text-sm font-semibold
                  hover:text-blue-300
                "
              >
                {currency}

                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  className="
                    absolute right-0 top-8 z-50
                    w-32 overflow-hidden rounded-md
                    bg-white text-black shadow-lg
                  "
                >
                  {[
                    {
                      code: "INR",
                      label: "INR ₹",
                    },
                    {
                      code: "USD",
                      label: "USD $",
                    },
                    {
                      code: "EUR",
                      label: "EUR €",
                    },
                  ].map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        setCurrency(
                          item.code as
                            | "INR"
                            | "USD"
                            | "EUR"
                        );
                        setIsOpen(false);
                      }}
                      className="
                        block w-full px-4 py-2
                        text-left text-sm
                        hover:bg-gray-100
                      "
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="
                cursor-pointer text-sm
                font-semibold
                hover:text-blue-300
              "
            >
              Manage Booking →
            </button>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
            <div className="border-b bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* LOGO */}

          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="GoEscapio"
              width={180}
              height={60}
              priority
            />
          </Link>

          {/* DESKTOP MENU */}

          <nav
            className="
              hidden items-center gap-8
              font-semibold text-gray-800
              md:flex
            "
          >
            <Link
              href="/"
              className="
                cursor-pointer transition
                hover:text-blue-700
              "
            >
              Home
            </Link>

            {/* DESTINATION */}

            <div
              ref={destinationRef}
              className="relative"
              onMouseEnter={() => {
                if (destinationTimer.current) {
                  clearTimeout(destinationTimer.current);
                }
                setDestinationOpen(true);
              }}
              onMouseLeave={() => {
                destinationTimer.current = setTimeout(() => {
                  setDestinationOpen(false);
                }, 120);
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

              <DestinationMegaMenu
                isOpen={destinationOpen}
              />
            </div>

            {/* THEMES */}

            <div
              ref={themeRef}
              className="relative"
              onMouseEnter={() => {
                if (themeTimer.current) {
                  clearTimeout(themeTimer.current);
                }
                setThemeOpen(true);
              }}
              onMouseLeave={() => {
                themeTimer.current = setTimeout(() => {
                  setThemeOpen(false);
                }, 120);
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

              <ThemeMegaMenu
                isOpen={themeOpen}
              />
            </div>

            <Link
              href="/contact"
              className="
                cursor-pointer transition
                hover:text-blue-700
              "
            >
              Contact Us
            </Link>
          </nav>

          {/* RIGHT CONTACT */}

          <div className="hidden items-center gap-3 md:flex">
            <div
              className="
                flex h-10 w-10 items-center
                justify-center rounded-full
                bg-blue-100 text-blue-600
              "
            >
              <Phone size={20} />
            </div>

            <div>
              <a
                href="tel:+917744848000"
                className="
                  cursor-pointer text-lg
                  font-extrabold text-gray-900
                  transition-colors
                  hover:text-blue-700
                "
              >
                07744848000
              </a>

              <p
                className="
                  text-xs font-medium
                  text-gray-500
                "
              >
                Grab The Best Deal Now
              </p>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
            {/* MOBILE MENU */}

      {open && (
        <div
          className="
            border-t bg-white
            md:hidden
          "
        >
          <nav className="flex flex-col px-6 py-4">
            <Link
              href="/#home"
              onClick={() => setOpen(false)}
              className="
                border-b py-3
                font-semibold text-gray-800
                hover:text-blue-600
              "
            >
              Home
            </Link>

            <Link
              href="/destinations"
              onClick={() => setOpen(false)}
              className="
                border-b py-3
                font-semibold text-gray-800
                hover:text-blue-600
              "
            >
              Destinations
            </Link>

            <Link
              href="/themes"
              onClick={() => setOpen(false)}
              className="
                border-b py-3
                font-semibold text-gray-800
                hover:text-blue-600
              "
            >
              Themes
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="
                border-b py-3
                font-semibold text-gray-800
                hover:text-blue-600
              "
            >
              Contact Us
            </Link>

            {/* Mobile Currency */}

            <div className="border-b py-3">
              <p className="mb-2 font-semibold text-gray-800">
                Currency
              </p>

              <div className="flex gap-2">
                {[
                  { code: "INR", label: "₹ INR" },
                  { code: "USD", label: "$ USD" },
                  { code: "EUR", label: "€ EUR" },
                ].map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setCurrency(
                        item.code as
                          | "INR"
                          | "USD"
                          | "EUR"
                      );
                      setOpen(false);
                    }}
                    className={`
                      rounded border px-3 py-2 text-sm
                      ${
                        currency === item.code
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-gray-300"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="tel:+917744848000"
              className="
                py-3
                font-semibold text-blue-600
              "
            >
              📞 07744848000
            </a>

            <a
              href="mailto:sales@goescapio.in"
              className="
                py-2
                font-semibold text-blue-600
              "
            >
              ✉ sales@goescapio.in
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}