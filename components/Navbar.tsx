"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  // { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/web-app-manifest-512x512.png"
            alt="logo"
            width={40}
            height={40}
          />
          <span className="text-2xl hidden xl:inline font-black text-blue-700 tracking-tighter font-headline">
            YOUTH SPORT DEVELOPMENT (SL) LG
          </span>
          <span className="text-2xl font-black xl:hidden text-blue-700 tracking-tighter font-headline">
            YSD
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-headline font-bold tracking-tight text-sm uppercase transition-colors ${
                pathname === link.href
                  ? "text-blue-700 border-b-2 border-orange-500 pb-1"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:block bg-tertiary text-on-tertiary px-6 py-2 rounded-full font-bold shadow-lg hover:opacity-80 transition-all text-sm"
          >
            Get Involved
          </Link>

          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                menuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1 bg-white/95 backdrop-blur-lg border-t border-slate-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-headline font-bold tracking-tight text-sm uppercase py-3 px-4 rounded-xl transition-colors ${
                pathname === link.href
                  ? "text-blue-700 bg-primary-container/30"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-tertiary text-on-tertiary px-6 py-3 rounded-full font-bold shadow-lg hover:opacity-80 transition-all text-sm text-center"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </nav>
  );
}
