"use client";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[2rem] mt-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="bg-slate-200 h-[1px] w-full mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              Ç
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
                YSD (SL) LG
              </span>
            </div>
            <p className="text-slate-500 text-sm">
              {`© ${new Date().getFullYear()} Youth Sport Development Sierra Leone. All rights reserved.`}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="font-body text-sm font-medium text-slate-500 hover:text-green-600 hover:translate-x-1 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            <div
              className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-all cursor-pointer"
              onClick={() =>
                navigator.share({
                  title: "Youth Sport Development Sierra Leone",
                  url: "https://youthsportdevelopment.sl/",
                })
              }
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </div>
            <a
              href="mailto:youthsportdevelopment.sl.lg@gmail.com"
              className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
