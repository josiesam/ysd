import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact & Partner | YSD-SL-LG",
};

export default function ContactPage() {
  return (
    <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="font-headline font-black text-5xl md:text-7xl text-primary tracking-tighter leading-tight">
            Let&apos;s Build the <span className="text-secondary">Future</span>{" "}
            of Sport Together.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl">
            Connect with Sierra Leone&apos;s leading youth sports development
            initiative. Whether you&apos;re looking to partner, sponsor, or
            volunteer, your journey starts here.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            {/* <button className="bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-full font-headline font-bold text-lg flex items-center gap-2 hover:shadow-lg transition-all">
              <span className="material-symbols-outlined">download</span>
              Download Pitch Deck
            </button> */}
            <div className="flex items-center gap-2 px-6 py-4 rounded-full border border-outline-variant/30 bg-surface-container-low">
              <span className="material-symbols-outlined text-secondary">
                verified
              </span>
              <span className="font-bold text-sm">
                Official Partnership 2024
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl kinetic-crop-alt">
          <img
            alt="Dynamic close-up of young West African soccer players in vibrant jerseys high-fiving during a sunny afternoon training session"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfRob7FF1Bu8FLq0EkvPG8NAU3Z3lrzc1Ae49zJyo2GE7t8Dywb86M6Foh5p-hmMlttCL81kIovf26HueNbjes1VcZSrX8Cdgo8S18sboXV_P0UtRPnfprdxcQUdCd6DsToDYlsRFXx8PEi_E10DyKEttNOdOrTTGQDCBEtDCWzyt1NnccZIKdOTV5a2AaW7zMtgSx3-h4mZRExZtvZFJ9SVr6fSn0chSREUYQNuvl1MF62hW7aPL_XGw7R0OYavKYJ9LlKGZR1TU"
          />
          <div className="absolute bottom-6 left-6 right-6 glass-effect p-6 rounded-2xl">
            <p className="font-headline font-bold text-primary italic text-xl">
              &quot;Sport is the heartbeat of our youth.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Contact Info */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {/* Phone Card */}
        <a
          href="tel:+23231413504"
          className="md:col-span-2 bg-primary-container/20 p-8 rounded-[2rem] flex flex-col justify-between border border-primary/10"
        >
          <div className="flex justify-between items-start mb-12">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-3xl">
                call
              </span>
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-primary opacity-60">
              Direct Hotlines
            </span>
          </div>
          <div>
            <h3 className="font-headline font-bold text-sm text-primary uppercase mb-2">
              Speak with our Team
            </h3>
            <div className="font-headline font-black text-3xl md:text-5xl text-on-primary-container hover:text-primary transition-colors">
              +232 31 41 3504
            </div>
            <p className="mt-4 text-on-surface-variant font-medium">
              Available Mon - Sat: 8:00 AM - 6:00 PM (GMT)
            </p>
          </div>
        </a>

        {/* Email Card */}
        <a
          href="mailto:youthsportdevelopment.sl.lg@gmail.com"
          className="bg-surface-container p-8 rounded-[2rem] border border-outline-variant/10"
        >
          <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-16">
            <span className="material-symbols-outlined text-on-secondary">
              mail
            </span>
          </div>
          <h3 className="font-headline font-bold text-sm text-secondary uppercase mb-2">
            Email Inquiries
          </h3>
          <a
            className="font-headline font-bold text-xl text-on-surface break-words hover:text-secondary transition-colors"
            href="mailto:youthsportdevelopment.sl.lg@gmail.com"
          >
            youthsportdevelopment.sl.lg@gmail.com
          </a>
          <p className="mt-4 text-sm text-on-surface-variant">
            General inquiries, sponsorship requests, and media.
          </p>
        </a>

        {/* Location Card */}
        <div className="bg-surface-container-high p-8 rounded-[2rem] relative overflow-hidden group">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="font-headline font-bold text-sm text-primary uppercase mb-2">
                Base of Operations
              </h3>
              <p className="font-headline font-bold text-2xl">
                Freetown, Sierra Leone
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold cursor-pointer group-hover:gap-4 transition-all">
              <span>Get Directions</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
          <div className="absolute inset-0 opacity-20 grayscale hover:grayscale-0 transition-all duration-700">
            <img
              className="w-full h-full object-cover"
              alt="Stylized map view of Freetown coastal area"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzIyTA1w8vMexeq3FuIv1bW-M6ZrAnXmberrktWS-yqg4sb1KgBT1zxC7pYMAJqL2YuoHpvrteMdl882P_dephsaDPgSM1D2DlgUmbR1RLXeKoCV-Ei2hGimIOlbIeMvKYeQq-lIdxoS4WxW_kW5Sv5g05Wss-KvDd3zd-_FluXZFNdmviA1b2bi3LAYs2ablW5caC1lOmxgyinCJ64bBTKaYWHn3k9vGEpKHMHAcGmyJNB9VN60dPfBXAX2k1Yb1b8Qzf6q5IQDA"
            />
          </div>
        </div>

        {/* Social Media Bar */}
        <div className="md:col-span-2 bg-surface-container-lowest p-6 rounded-[2rem] flex flex-wrap items-center justify-between gap-6 border border-outline-variant/20 shadow-sm">
          <span className="font-headline font-extrabold text-lg text-on-surface-variant px-4">
            Follow the Movement
          </span>
          <div className="flex items-center gap-4 flex-grow justify-end">
            {/* <a
              className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-[#25D366] hover:scale-110 transition-transform"
              href="#"
              aria-label="WhatsApp"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.961-2.628-.086-.117-.718-.953-.718-1.816 0-.862.453-1.286.613-1.454.161-.168.346-.21.462-.21h.334c.105 0 .245-.039.384.285l.526 1.267c.053.126.088.273.003.441-.084.17-.126.273-.252.42l-.252.304c-.126.147-.258.307-.111.557.147.25.654 1.077 1.403 1.745.966.861 1.778 1.127 2.029 1.252.252.126.399.105.546-.063.147-.168.63-.735.798-.987.168-.252.336-.21.567-.126l1.722.813c.231.105.385.168.44.263.056.105.056.608-.088 1.013z" />
              </svg>
            </a> */}
            <a
              className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-[#1877F2] hover:scale-110 transition-transform"
              href="https://www.facebook.com/share/1EqPBpiNMy/"
              aria-label="Facebook"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-[#E4405F] hover:scale-110 transition-transform"
              href="https://www.instagram.com/youthsportdevelopmentsl/"
              aria-label="Instagram"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Momentum Bar */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-headline font-bold text-on-surface">
            Development Goals Reached
          </h4>
          <span className="text-secondary font-black">78%</span>
        </div>
        <div className="w-full h-4 bg-surface-container-highest rounded-full overflow-hidden relative">
          <div className="h-full bg-secondary w-[78%] relative">
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-tertiary blur-sm" />
          </div>
        </div>
        <p className="mt-4 text-sm text-on-surface-variant italic">
          Join 12 local partners fueling the next generation of athletic talent.
        </p>
      </section>

      {/* Sponsorship CTA */}
      <section className="bg-inverse-surface rounded-[3rem] p-12 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-headline font-black text-4xl md:text-5xl text-surface-bright mb-6 max-w-3xl mx-auto leading-tight">
            Your Brand, Their Legacy. <br />
            <span className="text-tertiary-fixed">Become a Sponsor.</span>
          </h2>
          <p className="text-inverse-on-surface text-lg mb-10 max-w-xl mx-auto">
            Invest in community resilience and youth health. Our pitch deck
            details the various tiers of local and international sponsorship
            opportunities.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#inquiry-form"
              className="bg-white/10 text-white backdrop-blur-md px-10 py-5 rounded-full font-headline font-bold text-xl hover:bg-white/20 transition-all"
            >
              Send an Inquiry ↓
            </a>
          </div> */}
        </div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary opacity-20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary opacity-20 blur-[100px] rounded-full" />
      </section>

      {/* Inquiry Form */}
      {/* <section id="inquiry-form" className="mt-16 scroll-mt-28">
        <div className="mb-10">
          <h2 className="font-headline font-black text-3xl md:text-4xl text-on-surface tracking-tighter">
            Get in Touch
          </h2>
          <p className="text-on-surface-variant mt-2">
            Your message goes straight to our inbox — no middlemen.
          </p>
        </div>
        <InquiryForm />
      </section> */}
    </main>
  );
}
