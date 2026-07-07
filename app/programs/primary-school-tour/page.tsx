import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Primary School Tour",
  description:
    "Exploring how sports can become a professional trajectory for the youth of Sierra Leone.",
  openGraph: {
    images: ["/_next/image?url=https%3A%2F%2Fff6afvdal8w6atua.public.blob.vercel-storage.com%2Farticles%2F%2520%25E2%2581%25A0%25E2%2581%25A0ysd_preview_article%2FIMG_6631.jpg&w=1200&q=75"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/_next/image?url=https%3A%2F%2Fff6afvdal8w6atua.public.blob.vercel-storage.com%2Farticles%2F%2520%25E2%2581%25A0%25E2%2581%25A0ysd_preview_article%2FIMG_6631.jpg&w=1200&q=75"],
  },
};

export default function PrimarySchoolTourPage() {
  return (
    <main className="bg-surface min-h-screen">
      {/* Article Hero */}
      <header className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_6631.jpg"
          alt="Primary school children participating in sports"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-pillar-purple text-white text-xs font-black uppercase tracking-widest">
              Impact Story
            </span>
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
              8 Min Read
            </span>
          </div>
          <h1 className="font-headline uppercase text-4xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-8">
            School Tour: <br />
            <span className="text-pillar-purple-container uppercase">
              Sports as a Career Path.
            </span>
          </h1>
        </div>
      </header>

      {/* Article Meta & Content */}
      <section className="relative z-10 -mt-12 md:-mt-20 pb-20">
        <div className="max-w-4xl mx-auto px-6 prose lg:prose-xl">
          <div className="bg-surface-container-high rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-black/10">
            {/* Author Section */}
            <div className="flex items-center gap-4 mb-2 pb-2 border-b border-outline-variant/10">
              <div className="w-14 h-14 rounded-full bg-pillar-purple flex items-center justify-center text-white font-black text-xl">
                YSD
              </div>
              <div>
                <p className="text-on-surface font-bold">
                  YSD Communications Team
                </p>
                <p className="text-on-surface-variant text-sm font-medium">
                  October, 2025 • Editorial Staff
                </p>
              </div>
            </div>

            {/* Kinetic Stat Strip */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
              <div className="bg-surface-container-lowest p-8 rounded-3xl text-center group hover:bg-pillar-purple transition-colors duration-500">
                <span className="font-headline block text-5xl font-black text-pillar-purple group-hover:text-white mb-2 italic tracking-tighter">
                  15
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-white/80">
                  Schools Visited
                </span>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-3xl text-center group hover:bg-pillar-purple transition-colors duration-500">
                <span className="font-headline block text-5xl font-black text-pillar-purple group-hover:text-white mb-2 italic tracking-tighter">
                  500+
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-white/80">
                  Pupils reached
                </span>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-3xl text-center group hover:bg-pillar-purple transition-colors duration-500">
                <span className="font-headline block text-5xl font-black text-pillar-purple group-hover:text-white mb-2 italic tracking-tighter">
                  6
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-white/80">
                  Expert speakers
                </span>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-3xl text-center group hover:bg-pillar-purple transition-colors duration-500">
                <span className="font-headline block text-5xl font-black text-pillar-purple group-hover:text-white mb-2 italic tracking-tighter">
                  100
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-white/80">
                  Schools target 2026
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="font-body text-on-surface-variant space-y-8">
              <div className="intro-float">
                <p>
                  In October 2025, Youth Sport Development SL embarked on a
                  landmark primary school tour across Freetown — introducing
                  hundreds of young pupils to the vast world of sports careers
                  while proving that academic excellence and sporting ambition
                  are not competing dreams, but the same dream. From colourful
                  school halls to open-air pitches, the team connected with the
                  next generation of Sierra Leonean champions.
                </p>
              </div>

              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-gold before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']"></div>
              <h2 className="font-headline uppercase font-bold">
                Why this matters
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />

              <p>
                Sierra Leone has made remarkable strides through the
                government's Free Quality Education (FQE) initiative,
                dramatically increasing school enrolment across the country. Yet
                access to quality education, retention, and completion remain
                stubborn challenges. A 2022 UNICEF report underlined just how
                few alternative pathways exist for young people to build
                economically empowering skills outside traditional academic
                routes.
              </p>
              <p>
                Youth Sport Development SL stepped into that gap — not to
                replace education, but to strengthen it. By showing pupils that
                sport and academics are natural partners, the tour opened eyes
                to a future where passion and knowledge work together.
              </p>
              <div
                className="relative bg-pillar-purple-container border-l-[5px] border-pillar-purple
         p-[30px_34px] my-[38px] rounded-r-[10px]
         before:content-['“'] before:absolute before:top-[-10px] before:left-[14px]
         before:text-[5rem] before:text-on-pillar-purple-container before:opacity-[0.14]
         before:font-headline before:leading-none"
              >
                <p
                  className="relative z-10 m-0 text-[1.28rem] italic
           text-on-pillar-purple-container leading-[1.65]"
                >
                  Catch them when they are young — build a generation of Sierra
                  Leonean champions who are as sharp in the classroom as they
                  are on the pitch.
                </p>
              </div>

              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-gold before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']"></div>
              <h2 className="font-headline uppercase font-bold">
                Moments from the tour
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />
              <p>
                Across fifteen schools, every visit told a different story — but
                all shared the same energy, curiosity, and excitement. Here are
                the moments that captured it best.
              </p>
              <span
                className="inline-block bg-[var(--soft-green)] text-on-pillar-purple-container
         text-[11px] font-extrabold tracking-[1.5px] uppercase
         py-[5px] px-[14px] rounded-full mb-[14px]
         border border-pillar-purple bg-pillar-purple-container"
              >
                Inside the classroom sessions
              </span>
              <img
                src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_6631.jpg"
                alt=""
                className="w-full h-[480px] object-cover rounded-[16px] block mb-4 shadow-[0_10px_40px_rgba(0,0,0,0.14)]"
              />
              <p className="text-center text-[13px] text-muted italic mt-[6px] mb-[26px] leading-[1.5]">
                Hundreds of pupils in vibrant yellow uniforms fill a school hall
                — hanging on every word as speakers share their journey from
                classroom to career.
              </p>

              <div className="grid grid-cols-[2fr_1fr] gap-[14px] mb-4">
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_6667.jpg"
                  alt=""
                />
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_7810.jpg"
                  alt=""
                />
              </div>
              <p className="text-center text-[13px] text-muted italic mt-[6px] mb-[26px] leading-[1.5]">
                Left: A pupil takes the mic and speaks with remarkable
                confidence. Right: A forest of raised hands — every child eager
                to participate.
              </p>

              <span
                className="inline-block bg-[var(--soft-green)] text-on-pillar-purple-container
         text-[11px] font-extrabold tracking-[1.5px] uppercase
         py-[5px] px-[14px] rounded-full mb-[14px]
         border border-pillar-purple bg-pillar-purple-container"
              >
                On the pitch
              </span>
              <div className="grid grid-cols-[2fr_1fr] gap-[14px] mb-4">
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_6672.jpg"
                  alt=""
                  className="w-full h-[320px] object-cover rounded-[10px] shadow-[0_4px_18px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02]"
                />
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_7856.jpg"
                  alt=""
                  className="w-full h-[320px] object-cover rounded-[10px] shadow-[0_4px_18px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
              <p className="text-center text-[13px] text-muted italic mt-[6px] mb-[26px] leading-[1.5]">
                Left: A pre-game team huddle — arms locked, heads down, unity
                forged before a ball is even kicked. Right: The YSD team at Hill
                Valley Academy.
              </p>

              <div className="grid grid-cols-3 gap-[14px] mb-4">
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_6720.jpg"
                  alt=""
                  className="w-full h-[240px] object-cover rounded-[10px] shadow-[0_4px_18px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_12px_36px_rgba(0,0,0,0.18)]"
                />
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_1215.jpg"
                  alt=""
                  className="w-full h-[240px] object-cover rounded-[10px] shadow-[0_4px_18px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_12px_36px_rgba(0,0,0,0.18)]"
                />
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_1244.jpg"
                  alt=""
                  className="w-full h-[240px] object-cover rounded-[10px] shadow-[0_4px_18px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_12px_36px_rgba(0,0,0,0.18)]"
                />
              </div>
              <p className="text-center text-[13px] text-muted italic mt-[6px] mb-[26px] leading-[1.5]">
                From left: Courtyard games bring the theory to life · Girls
                sprint with everything they have · Boys battle it out for
                possession on the dirt pitch.
              </p>

              <span
                className="inline-block bg-[var(--soft-green)] text-on-pillar-purple-container
         text-[11px] font-extrabold tracking-[1.5px] uppercase
         py-[5px] px-[14px] rounded-full mb-[14px]
         border border-pillar-purple bg-pillar-purple-container"
              >
                On the pitch
              </span>
              <div className="grid grid-cols-2 gap-[14px] mb-4">
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_8107.jpg"
                  alt=""
                  className="w-full h-[240px] object-cover rounded-[10px] block shadow-[0_4px_18px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_12px_36px_rgba(0,0,0,0.18)]"
                />
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_8059.jpg"
                  alt=""
                  className="w-full h-[240px] object-cover rounded-[10px] block shadow-[0_4px_18px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_12px_36px_rgba(0,0,0,0.18)]"
                />
              </div>
              <p className="text-center text-[13px] text-muted italic mt-[6px] mb-[26px] leading-[1.5]">
                Left: The full Hill Valley Academy crew — a celebration of a
                brilliant day. Right: An organiser brings infectious energy to
                every outdoor session.
              </p>

              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-gold before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']"></div>
              <h2 className="font-headline uppercase font-bold">
                Sports career pathways explored
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />
              <p>
                The tour introduced pupils to a full spectrum of sports careers
                — each one built on, and rewarded by, strong academic
                foundations. Three major tracks were explored in depth across
                every school visit:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-7">
                <div
                  className="bg-white rounded-[12px] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)]
                border-t-[5px] border-green
                transition-all duration-200
                hover:-translate-y-[5px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)]"
                >
                  <h3 className="font-headline text-[1.08rem] font-bold mb-[10px] text-dark">
                    Sports management
                  </h3>
                  <p className="text-[0.9rem] text-muted leading-[1.7] m-0">
                    From agents and event managers to club administrators and
                    marketing directors — the business of sport is built on
                    business education and opens doors at every level.
                  </p>
                </div>
                <div
                  className="bg-white rounded-[12px] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)]
                border-t-[5px] border-green
                transition-all duration-200
                hover:-translate-y-[5px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)]"
                >
                  <h3 className="font-headline text-[1.08rem] font-bold mb-[10px] text-dark">
                    Sports journalism &amp; media
                  </h3>
                  <p className="text-[0.9rem] text-muted leading-[1.7] m-0">
                    Reporters, broadcasters, analysts, content creators —
                    telling the story of sport demands sharp communication
                    skills and opens doors to travel the world.
                  </p>
                </div>
                <div
                  className="bg-white rounded-[12px] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)]
                border-t-[5px] border-green
                transition-all duration-200
                hover:-translate-y-[5px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)]"
                >
                  <h3 className="font-headline text-[1.08rem] font-bold mb-[10px] text-dark">
                    Sports science &amp; health
                  </h3>
                  <p className="text-[0.9rem] text-muted leading-[1.7] m-0">
                    Physiotherapists, nutritionists, sports psychologists — the
                    science that keeps athletes performing at their peak,
                    grounded in biology and medicine.
                  </p>
                </div>
              </div>

              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-gold before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']"></div>
              <h2 className="font-headline uppercase font-bold">
                What the tour set out to achieve
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />

              <ul className="grid gap-[12px] my-5 list-none">
                <li
                  className="bg-white p-[16px_20px] rounded-[10px]
               shadow-[0_2px_14px_rgba(0,0,0,0.04)]
               flex items-start gap-[14px]
               text-[0.98rem] text-[#444] leading-[1.6]
               border-l-[3px] border-transparent
               transition-colors hover:border-l-gold"
                >
                  <span
                    className="bg-pillar-purple text-white w-6 h-6 rounded-full
               flex items-center justify-center
               text-[12px] font-extrabold flex-shrink-0 mt-[1px]"
                  >
                    ✓
                  </span>
                  Familiarise pupils with diverse sports disciplines and the
                  career paths that complement academic excellence
                </li>
                <li
                  className="bg-white p-[16px_20px] rounded-[10px]
               shadow-[0_2px_14px_rgba(0,0,0,0.04)]
               flex items-start gap-[14px]
               text-[0.98rem] text-[#444] leading-[1.6]
               border-l-[3px] border-transparent
               transition-colors hover:border-l-gold"
                >
                  <span
                    className="bg-pillar-purple text-white w-6 h-6 rounded-full
               flex items-center justify-center
               text-[12px] font-extrabold flex-shrink-0 mt-[1px]"
                  >
                    ✓
                  </span>
                  Showcase how physical activity and sport are essential to a
                  healthy, balanced lifestyle
                </li>
                <li
                  className="bg-white p-[16px_20px] rounded-[10px]
               shadow-[0_2px_14px_rgba(0,0,0,0.04)]
               flex items-start gap-[14px]
               text-[0.98rem] text-[#444] leading-[1.6]
               border-l-[3px] border-transparent
               transition-colors hover:border-l-gold"
                >
                  <span
                    className="bg-pillar-purple text-white w-6 h-6 rounded-full
               flex items-center justify-center
               text-[12px] font-extrabold flex-shrink-0 mt-[1px]"
                  >
                    ✓
                  </span>
                  Highlight the values of teamwork, discipline, leadership, and
                  resilience that sport builds
                </li>
                <li
                  className="bg-white p-[16px_20px] rounded-[10px]
               shadow-[0_2px_14px_rgba(0,0,0,0.04)]
               flex items-start gap-[14px]
               text-[0.98rem] text-[#444] leading-[1.6]
               border-l-[3px] border-transparent
               transition-colors hover:border-l-gold"
                >
                  <span
                    className="bg-pillar-purple text-white w-6 h-6 rounded-full
               flex items-center justify-center
               text-[12px] font-extrabold flex-shrink-0 mt-[1px]"
                  >
                    ✓
                  </span>
                  Provide clear insights into educational pathways required to
                  pursue a career in sport
                </li>
                <li
                  className="bg-white p-[16px_20px] rounded-[10px]
               shadow-[0_2px_14px_rgba(0,0,0,0.04)]
               flex items-start gap-[14px]
               text-[0.98rem] text-[#444] leading-[1.6]
               border-l-[3px] border-transparent
               transition-colors hover:border-l-gold"
                >
                  <span
                    className="bg-pillar-purple text-white w-6 h-6 rounded-full
               flex items-center justify-center
               text-[12px] font-extrabold flex-shrink-0 mt-[1px]"
                  >
                    ✓
                  </span>
                  Demonstrate how science, business, and communications connect
                  directly to sports careers
                </li>
                <li
                  className="bg-white p-[16px_20px] rounded-[10px]
               shadow-[0_2px_14px_rgba(0,0,0,0.04)]
               flex items-start gap-[14px]
               text-[0.98rem] text-[#444] leading-[1.6]
               border-l-[3px] border-transparent
               transition-colors hover:border-l-gold"
                >
                  <span
                    className="bg-pillar-purple text-white w-6 h-6 rounded-full
               flex items-center justify-center
               text-[12px] font-extrabold flex-shrink-0 mt-[1px]"
                  >
                    ✓
                  </span>
                  Emphasise that a strong educational foundation makes every
                  sports career stronger
                </li>
              </ul>

              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-gold before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']"></div>
              <h2 className="font-headline uppercase font-bold">
                How each school visit unfolded
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />
              <p>
                Each 90–120 minute visit followed a three-part structure
                designed to inform, inspire, and energise every pupil in the
                room:
              </p>
              <div className="space-y-4">
                <div
                  className="font-headline text-[3rem] font-black
               text-gold leading-none flex-shrink-0 opacity-70"
                >
                  01
                </div>
                <div>
                  <h3 className="text-[1.02rem] font-extrabold text-green mb-[8px]">
                    Interactive learning session
                  </h3>
                  <p className="text-[0.95rem] text-[#555] leading-[1.75] m-0">
                    An education-first presentation explored how school subjects
                    connect to sports careers — from science in physiotherapy to
                    communications in journalism. Pupils discovered career paths
                    through group discussions, live Q&amp;A, and hands-on sport
                    demonstrations that brought every concept to life.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div
                  className="font-headline text-[3rem] font-black
               text-gold leading-none flex-shrink-0 opacity-70"
                >
                  02
                </div>
                <div>
                  <h3 className="text-[1.02rem] font-extrabold text-green mb-[8px]">
                    Meet &amp; greet with experts
                  </h3>
                  <p className="text-[0.95rem] text-[#555] leading-[1.75] m-0">
                    Pupils interacted directly with sport professionals,
                    athletes, and role models who shared their personal
                    journeys. Every speaker carried the same message: education
                    was not the obstacle to a sporting career — it was the very
                    foundation of it.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div
                  className="font-headline text-[3rem] font-black
               text-gold leading-none flex-shrink-0 opacity-70"
                >
                  03
                </div>
                <div>
                  <h3 className="text-[1.02rem] font-extrabold text-green mb-[8px]">
                    Practical demonstrations on the pitch
                  </h3>
                  <p className="text-[0.95rem] text-[#555] leading-[1.75] m-0">
                    With footballs, basketballs, volleyballs, tennis balls, and
                    bibs, pupils moved from the hall to the field — experiencing
                    the physical demands of different sports and beginning to
                    see themselves not just as students, but as athletes in the
                    making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Footer */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-outline-variant/10">
        <h4 className="font-headline text-2xl font-black mb-10 tracking-tight text-center uppercase">
          Continue Exploring
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link
            href="/programs/private-football-tournament"
            className="group block"
          >
            <div className="relative h-80 rounded-[3rem] overflow-hidden mb-8 shadow-xl shadow-black/20">
              <img
                src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/IMG_6027.png"
                alt="Private School Tournament"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pillar-red/60 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <span className="text-white font-black text-xs uppercase tracking-widest mb-2 block">
                  Initiative
                </span>
                <h5 className="font-headline uppercase text-4xl font-black text-white leading-none tracking-tighter">
                  Private Schools <br />
                  <span className="text-pillar-purple-container uppercase">
                    Football.
                  </span>
                  <br />
                  Tournament
                </h5>
              </div>
            </div>
          </Link>

          <Link
            href="/programs/inspiring-the-next-generation"
            className="group block"
          >
            <div className="relative h-80 rounded-[3rem] overflow-hidden mb-8 shadow-xl shadow-black/20">
              <img
                src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/ysd_article_v7/instagram.png13.png"
                alt="Next Generation"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pillar-green/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="text-white w-40 h-40 opacity-10" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <span className="text-white font-black text-xs uppercase tracking-widest mb-2 block">
                  Mentorship
                </span>
                <h5 className="font-headline text-4xl font-black text-white leading-none tracking-tighter">
                  INSPIRING <br /> THE NEXT GEN.
                </h5>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
