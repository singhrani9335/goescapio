"use client";

import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/data/footerLinks";

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-10 lg:grid-cols-4">

        {/* Logo & Contact */}
        <div>
          <div className="mb-5">
            <Image
              src="/images/darklogo.png"
              alt="Go Escapio"
              width={180}
              height={60}
              className="h-auto w-[170px]"
            />
          </div>

          <p className="mb-5 text-sm leading-7 text-white/80">
            AIHP Signature,
            <br />
            418-419, Phase-IV,
            <br />
            Udyog Vihar,
            <br />
            Gurgaon, Haryana-122015
          </p>

          <p className="text-sm text-white/80">
            📞 07744848000
          </p>

          <p className="mt-2 text-sm text-white/80">
            ✉️ sales@goescapio.in
          </p>
        </div>


        {/* Explore */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Explore
          </h3>

          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Certification */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Certification
          </h3>

          

          <h3 className="mt-8 text-xl font-semibold">
            Blog
          </h3>
        </div>


        {/* Newsletter */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Subscribe
          </h3>

          <p className="mb-5 text-sm leading-6 text-white/80">
            Subscribe Our Newsletter For Quick Updates
          </p>

          <div className="flex overflow-hidden rounded-lg bg-white">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-3 text-sm text-gray-800 outline-none"
            />

            <button className="bg-blue-600 px-5 text-sm font-medium text-white">
              Subscribe
            </button>
          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="border-t border-white/20 py-5 text-center">
        <p className="px-5 text-sm text-white/70">
          Copyright 2026 Flights Guru InfoTech Services Pvt. Ltd.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}