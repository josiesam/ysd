import Link from "next/link";

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 kinetic-gradient -z-10" />
        <div
          className="absolute inset-0 opacity-20 -z-10"
          style={{
            backgroundImage:
              "url('https://ff6afvdal8w6atua.public.blob.vercel-storage.com/landingpage.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            Lakka, Sierra Leone
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] font-headline tracking-tighter mb-8">
            Integrating Sports <br /> and Education for <br /> Sierra
            Leone&apos;s Future.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 leading-relaxed font-medium">
            Based in Lakka, we empower the next generation by bridging the gap
            between classroom learning and athletic excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-tertiary text-on-tertiary text-lg px-10 py-5 rounded-full font-black flex items-center gap-3 hover:translate-y-[-2px] transition-all sport-shadow"
            >
              Get Involved
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              href="/about"
              className="glass-card text-white border border-white/30 text-lg px-10 py-5 rounded-full font-black hover:bg-white/10 transition-all"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Match Ticker */}
      <div className="bg-surface-container-low py-4 overflow-hidden relative">
        <div className="scrolling-ticker flex gap-12 items-center">
          <span className="flex items-center gap-4 text-on-surface-variant font-bold">
            <span className="w-2 h-2 rounded-full bg-error animate-pulse inline-block" />
            BILINGUAL HIGH SCHOOL VS. VERTEX INTERNATIONAL ACADEMY
          </span>
          <span className="text-outline-variant">|</span>
          <span className="flex items-center gap-4 text-on-surface-variant font-bold">
            <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
            LEBANESE INTERNATIONAL SCHOOL 2-1 STANDARDS INTERNATIONAL SCHOOL
          </span>
          <span className="text-outline-variant">|</span>
          <span className="flex items-center gap-4 text-on-surface-variant font-bold">
            MURRAYDEEN PREPARATORY SCHOOL VS. BILINGUAL ELEMENTRY SCHOOL
          </span>
          <span className="text-outline-variant">|</span>
          <span className="flex items-center gap-4 text-on-surface-variant font-bold">
            HILL VALLEY ACADEMY 3-3 LAKKA COMMUNITY PRIMARY SCHOOL
          </span>
          {/* Duplicate for seamless loop */}
          {/* <span className="flex items-center gap-4 text-on-surface-variant font-bold">
            <span className="w-2 h-2 rounded-full bg-error animate-pulse inline-block" />
            Lebanese School 2 - 1 Standard International
          </span>
          <span className="text-outline-variant">|</span>
          <span className="flex items-center gap-4 text-on-surface-variant font-bold">
            <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
            Lakka Academy vs. Hamilton High (Starts 15:00)
          </span> */}
        </div>
      </div>

      {/* Impact Grid (Bento) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-surface-container rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-tertiary font-black text-8xl md:text-9xl tracking-tighter block mb-4">
                15+
              </span>
              <h3 className="text-3xl font-headline font-black text-primary leading-tight">
                Partner Schools <br /> Across the Peninsula
              </h3>
              <p className="mt-6 text-on-surface-variant max-w-xs text-lg">
                Forging deep connections with educational institutions to create
                structured sports curricula.
              </p>
            </div>
            <img
              className="absolute bottom-[-10%] right-[-10%] w-2/3 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 rotate-12"
              alt="Group of smiling school children in Sierra Leone wearing school uniforms and holding footballs"
              src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/school_partnership.jpeg"
            />
          </div>
          <div className="md:col-span-2 bg-tertiary-container rounded-[2rem] p-10 flex flex-col justify-center relative overflow-hidden">
            <span className="text-on-tertiary-container font-black text-7xl tracking-tighter">
              600+
            </span>
            <h3 className="text-2xl font-headline font-bold text-on-tertiary-container">
              Active Pupils
            </h3>
            <p className="mt-2 text-on-tertiary-container/80 text-lg">
              Daily engagement in specialized athletic training and mentorship
              programs.
            </p>
            <div className="mt-6 h-3 w-full bg-tertiary/20 rounded-full overflow-hidden">
              <div className="h-full bg-tertiary w-3/4 rounded-full" />
            </div>
          </div>
          <div className="md:col-span-1 bg-secondary-container rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
            <span className="text-on-secondary-container font-black text-6xl tracking-tighter">
              90%
            </span>
            <p className="text-on-secondary-container font-bold text-lg leading-tight mt-2">
              Retention &amp; Engagement
            </p>
          </div>
          <div className="md:col-span-1 bg-primary-container rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group">
            <span className="material-symbols-outlined text-6xl text-on-primary-container mb-4 group-hover:scale-110 transition-transform">
              diversity_3
            </span>
            <p className="text-on-primary-container font-bold text-lg leading-tight">
              Community Driven
            </p>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="bg-surface-container-low py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-headline font-black text-primary tracking-tighter mb-6">
              Our Core Pillars
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl">
              A holistic approach to youth development, focusing on mind, body,
              and societal impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-surface-container-lowest p-2 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="h-64 rounded-[2rem] overflow-hidden mb-8">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Young athlete leading a team huddle on a dusty football pitch at sunset"
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/school_tour.jpeg"
                />
              </div>
              <div className="px-8 pb-10">
                <div className="w-14 h-14 rounded-full bg-[#6A359B]/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#6A359B] text-3xl">
                    school
                  </span>
                </div>
                <h3 className="text-2xl font-black font-headline mb-4">
                  Primary School Tours
                </h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Introducing students to leadership roles, vocational insights,
                  and diverse career pathways through the lens of sport.
                </p>
                <Link
                  href="/programs"
                  className="text-[#6A359B] font-bold flex items-center gap-2 group/link"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-surface-container-lowest p-2 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="h-64 rounded-[2rem] overflow-hidden mb-8">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Intense action shot of a soccer player kicking a ball during a high-stakes local tournament match"
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/tournament.jpeg"
                />
              </div>
              <div className="px-8 pb-10">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary text-3xl">
                    sports_soccer
                  </span>
                </div>
                <h3 className="text-2xl font-black font-headline mb-4">
                  Football Gala
                </h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  High-energy athletic competitions that foster teamwork,
                  discipline, and healthy rivalry among peninsula schools.
                </p>
                <Link
                  href="/gallery"
                  className="text-secondary font-bold flex items-center gap-2 group/link"
                >
                  View Gallery{" "}
                  <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-surface-container-lowest p-2 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="h-64 rounded-[2rem] overflow-hidden mb-8">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Close-up of two young men engaged in a serious conversation, portraying a moment of mentorship and support"
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/at_risk"
                />
              </div>
              <div className="px-8 pb-10">
                <div className="w-14 h-14 rounded-full bg-error/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-error text-3xl">
                    health_and_safety
                  </span>
                </div>
                <h3 className="text-2xl font-black font-headline mb-4">
                  Champions at Risk
                </h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Critical intervention programs focusing on drug prevention,
                  mental health, and social rehabilitation for at-risk youth.
                </p>
                <Link
                  href="/programs"
                  className="text-error font-bold flex items-center gap-2 group/link"
                >
                  Get Support{" "}
                  <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-24 px-6 max-w-7xl mx-auto">
        <h4 className="text-center text-outline-variant font-bold uppercase tracking-widest text-sm mb-12">
          Trusted By World-Class Partners
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl">
              corporate_fare
            </span>
            <span className="font-black text-xl tracking-tight">
              Leone Rock Metal Group
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl">
              account_balance
            </span>
            <span className="font-black text-xl tracking-tight">
              Gender &amp; Children Affairs SL
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl">stadium</span>
            <span className="font-black text-xl tracking-tight">
              SL National Sports Authority
            </span>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="mx-6 mb-24">
        <div className="max-w-7xl mx-auto rounded-[3rem] kinetic-gradient p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <h2 className="text-4xl md:text-7xl font-headline font-black text-white tracking-tighter mb-8 relative z-10">
            Ready to change the game?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 relative z-10">
            Join our community of coaches, mentors, and sponsors today and help
            us build a brighter future for Sierra Leonean youth.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
            <Link
              href="/contact"
              className="bg-tertiary text-on-tertiary px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform sport-shadow"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="bg-white text-primary px-12 py-5 rounded-full font-black text-xl hover:bg-on-primary transition-colors"
            >
              Volunteer Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
