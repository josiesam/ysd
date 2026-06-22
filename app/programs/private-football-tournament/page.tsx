"use client";
import type { Metadata } from "next";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Long-form: Primary School Tour | YSD-SL-LG",
//   description:
//     "Exploring how sports can become a professional trajectory for the youth of Sierra Leone.",
// };

type Photo = {
  src: string;
  title: string;
  caption: string;
};

const photos: Photo[] = [
  {
    src: "https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/IMG_5839.png",
    title: "Our Squad",
    caption:
      "Players lined up ahead of one of our test-run friendly matches — ready to compete, grow, and represent their schools with pride.",
  },
  {
    src: "https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/IMG_5846.png",
    title: "In Full Flow",
    caption:
      "Our young athletes in action during a test-run match, demonstrating the quality and passion that exists within Sierra Leone's private schools.",
  },
  {
    src: "https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/IMG_5875.png",
    title: "Green vs Blue",
    caption:
      "Two schools go head to head in one of our organised friendly fixtures — the kind of healthy, competitive rivalry we are building a platform for.",
  },
  {
    src: "https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/IMG_5883.png",
    title: "Built for This",
    caption:
      "The intensity of competition speaks for itself. These are the moments that remind us why this tournament matters.",
  },
  {
    src: "https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/IMG_6027.png",
    title: "Match Day Moments",
    caption:
      "Every duel, every pass, every tackle — our test-run matches proved that private school football in Sierra Leone is ready for its own stage.",
  },
  {
    src: "https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/IMG_6027.png",
    title: "A Crowd Worth Playing For",
    caption:
      "Seeing students pack the stands to cheer on their schools confirmed everything we believed — the appetite for this tournament is real and it is growing.",
  },
  {
    src: "https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/IMG_6037.png",
    title: "United After the Final Whistle",
    caption:
      "Both teams together after a memorable match day. Sport builds bridges, and this image captures exactly what we are working towards.",
  },
];

type GalleryItemProps = {
  photo: Photo;
  index: number;
  panoramic?: boolean;
  objectPosition?: string;
};

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Gallery({ photos }: { photos: Photo[] }) {
  const [cur, setCur] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const isOpen = cur !== null;
  const current = cur !== null ? photos[cur] : null;

  // ── actions ──
  const openLb = (i: number) => setCur(i);
  const closeLb = () => setCur(null);

  const next = () => {
    if (cur === null) return;
    setCur((cur + 1) % photos.length);
  };

  const prev = () => {
    if (cur === null) return;
    setCur((cur - 1 + photos.length) % photos.length);
  };

  // ── keyboard + scroll lock ──
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, cur]);

  return (
    <>
      {/* ───────── GALLERY GRID ───────── */}

      <div className="mt-15">
        {/* Row 1 */}
        <div className="row1">
          <button className="g-pan" onClick={() => openLb(0)}>
            <span className="g-num">01</span>
            <img src={photos[0].src} alt={photos[0].title} />
            <div className="g-pan-over">
              <div>{photos[0].title}</div>
              <div>{photos[0].caption}</div>
            </div>
          </button>
        </div>

        {/* Row 2 */}
        <div className="row2">
          {[1, 2, 3].map((i) => (
            <button key={i} className="g-cell" onClick={() => openLb(i)}>
              <span className="g-num">{String(i + 1).padStart(2, "0")}</span>
              <img src={photos[i].src} alt={photos[i].title} />
              <div>{photos[i].title}</div>
            </button>
          ))}
        </div>

        {/* Row 3 */}
        <div className="row3">
          {[5, 6].map((i) => (
            <button key={i} className="g-cell" onClick={() => openLb(i)}>
              <span className="g-num">{String(i + 1).padStart(2, "0")}</span>
              <img src={photos[i].src} alt={photos[i].title} />
              <div>{photos[i].title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* ───────── LIGHTBOX ───────── */}

      <AnimatePresence>
        {isOpen && current && (
          <motion.div
            className="lb"
            onClick={closeLb}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="lb-inner"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchStartX === null) return;
                const delta = e.changedTouches[0].clientX - touchStartX;

                if (delta > 50) prev();
                if (delta < -50) next();

                setTouchStartX(null);
              }}
            >
              <button onClick={closeLb}>Close</button>
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>

              <img src={current.src} alt={current.title} />

              <h3>{current.title}</h3>
              <p>{current.caption}</p>

              <div>
                {(cur ?? 0) + 1} / {photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const features = [
  {
    num: "01",
    title: "Knockout Competition",
    text: "A structured knockout format across 15 match days involving up to 15 registered private schools. Clean, competitive, and professionally run from start to finish.",
  },
  {
    num: "02",
    title: "Certified Officiating",
    text: "We insist on certified referee officiating for every single match. Our players deserve a fair, professional standard of competition — and we deliver that.",
  },
  {
    num: "03",
    title: "Awards Ceremony",
    text: "A proper closing ceremony recognising top teams, standout individual players, and the best of the tournament. We celebrate our athletes the way they deserve to be celebrated.",
  },
  {
    num: "04",
    title: "Talent Identification",
    text: "We create real pathways. Our tournament is a platform for talented players to be seen by scouts and connected to development opportunities within Sierra Leone's football ecosystem.",
  },
  {
    num: "05",
    title: "Inter-School Unity",
    text: "We believe sport builds bridges. Our tournament fosters genuine relationships between private schools through healthy competition and shared experiences on and off the pitch.",
  },
  {
    num: "06",
    title: "Annual Legacy Event",
    text: "We are not building a one-off competition. We are building an institution — an annual flagship event that grows stronger, wider, and more impactful every single year.",
  },
];

export default function PrimarySchoolTourPage() {
  return (
    <main className="bg-surface min-h-screen">
      {/* Article Hero */}
      <header className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/IMG_6027.png"
          alt="Primary school children participating in sports"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-pillar-purple text-white text-xs font-black uppercase tracking-widest">
              Initiative
            </span>
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
              8 Min Read
            </span>
          </div>
          <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl uppercase font-black text-white leading-none tracking-tighter mb-8">
            Private Schools <br />
            <span className="text-pillar-purple-container uppercase">
              Football.
            </span>
            <br />
            Tournament
          </h1>
        </div>
      </header>

      {/* Article Meta & Content */}
      <section className="relative z-10 -mt-12 md:-mt-20 pb-20">
        <div className="max-w-4xl mx-auto px-6 prose lg:prose-xl">
          <div className="bg-surface-container-high rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-black/10">
            {/* Author Section */}
            <div className="flex items-center gap-4  border-b border-outline-variant/10">
              <div className="w-14 h-14 rounded-full bg-pillar-purple flex items-center justify-center text-white font-black text-xl">
                YSD
              </div>
              <div>
                <p className="text-on-surface font-bold">
                  YSD Communications Team
                </p>
                <p className="text-on-surface-variant text-sm font-medium">
                  May 20, 2026 • Editorial Staff
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="font-body text-on-surface-variant space-y-4">
              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-gold before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']">
                Who We Are &amp; What We Are Building
              </div>
              <h2 className="font-headline uppercase font-bold">
                Introducing the Private Schools
                <br />
                Football Tournament
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />
              <div>
                <p>
                  At Youth Sport Development SL, we believe that every young
                  athlete deserves the opportunity to compete, grow, and
                  showcase their talent &mdash; regardless of the type of school
                  they attend.
                </p>
                <p>
                  It is from this vision that we proudly introduce the
                  <strong> Private School Football Tournament</strong>, a new
                  initiative designed specifically for private schools that have
                  been excluded from mainstream competitions organised under the{" "}
                  <strong>
                    Ministry of Basic and Senior Secondary Education (MBSSE)
                  </strong>
                  .
                </p>
                <p>
                  In collaboration with the{" "}
                  <strong>National Sports Authority</strong>, this tournament
                  represents a major step toward creating a more inclusive and
                  balanced school sports system in Sierra Leone.
                </p>
              </div>
              <div>
                <p>
                  As an organisation committed to youth empowerment through
                  sports, Youth Sport Development SL became the first to
                  identify the existing gap within the school football structure
                  affecting many private institutions. Despite having talented
                  students, organised sports programs, and a passion for
                  football, several private schools have lacked access to
                  structured national competitions.
                </p>
                <p>
                  Recognising this challenge, we took the initiative to create a
                  platform where these schools can compete, connect, and develop
                  through football. At Youth Sport Development SL,
                  <strong>
                    we see this tournament as more than just football &mdash; it
                    is a movement.
                  </strong>
                </p>
                <p>
                  We are committed to building a sustainable platform that will
                  continue to empower young athletes for years to come.
                </p>
              </div>

              {/* Kinetic Stat Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="bg-surface-container-lowest p-8 rounded-3xl text-center group hover:bg-pillar-purple transition-colors duration-500">
                  <span className="font-headline block text-5xl font-black text-pillar-purple group-hover:text-white mb-2 italic tracking-tighter">
                    16
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-white/80">
                    Schools Targeted
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-3xl text-center group hover:bg-pillar-purple transition-colors duration-500">
                  <span className="font-headline block text-5xl font-black text-pillar-purple group-hover:text-white mb-2 italic tracking-tighter">
                    15
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-white/80">
                    Match Days
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-3xl text-center group hover:bg-pillar-purple transition-colors duration-500">
                  <span className="font-headline block text-5xl font-black text-pillar-purple group-hover:text-white mb-2 italic tracking-tighter">
                    01
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-white/80">
                    Annual Flagship Event
                  </span>
                </div>
              </div>

              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-gold before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']">
                Already Proven
              </div>
              <h2 className="font-headline uppercase font-bold">
                We Have Already Been on the Pitch
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />
              <div>
                <p>
                  As part of our preparation process, we successfully organised
                  a series of test run matches involving selected private
                  schools &mdash; and what we witnessed confirmed everything we
                  believed.
                </p>
                <p>
                  Participating schools included
                  <em>Lebanese International School</em>,
                  <em>Standards International School</em>,
                  <em>Hill Valley Academy</em>, and{" "}
                  <em>Bilingual High School</em>, alongside several other
                  selected institutions. These matches served as an important
                  foundation for assessing the competition structure, building
                  partnerships with schools, and demonstrating the potential of
                  this initiative.
                </p>
                <p>
                  The response from participating schools has been highly
                  encouraging, with positive feedback highlighting the
                  importance of creating
                  <strong>
                    equal sporting opportunities for private school students
                  </strong>
                  . Beyond competition, the tournament is focused on promoting
                  discipline, teamwork, leadership, sportsmanship, and youth
                  development.
                </p>
                <p>
                  As preparations continue for the official competition,
                  interest from schools and stakeholders continues to grow. We
                  remain committed to delivering a
                  <strong>
                    professional, impactful, and inspiring tournament
                  </strong>
                  that will help reshape the future of private school sports in
                  Sierra Leone.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-[4px] leading-none after:pointer-events-none after:absolute after:inset-0 after:z-[2] after:rounded-[4px] after:shadow-[inset_0_0_0_1px_rgba(232,160,32,0.18)] after:content-['']">
                <img
                  id="proofImg"
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/IMG_5950.png"
                  alt="Test run match in action"
                  className="relative z-[1] block h-[460px] w-full scale-100 rounded-[4px] object-cover object-[center_40%] brightness-[0.92] saturate-[0.82] contrast-[1.06] transition-[filter,transform] duration-500 ease-in-out group-hover:scale-[1.03] group-hover:brightness-100 group-hover:saturate-100 group-hover:contrast-[1.03]"
                />
              </div>

              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-gold before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']">
                Our Test Run Highlights
              </div>
              <h2 className="font-headline uppercase font-bold">
                Match Days in Pictures
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />

              <p
                style={{
                  maxWidth: "620px",
                  marginBottom: 0,
                  fontWeight: 300,
                }}
              >
                These are our moments &mdash; real match days we organised, real
                students we gave a platform to, real football played with
                purpose and passion. Every image below is proof of what we are
                capable of building.
              </p>
              <Gallery photos={photos}></Gallery>

              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-gold before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']">
                Our Tournament Structure
              </div>
              <h2 className="font-headline uppercase font-bold">
                What We Are Delivering
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />
              <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px overflow-hidden rounded-[3px] border border-[var(--border)] bg-surface-container-highest">
                {features.map((feature) => (
                  <div
                    key={feature.num}
                    className="group font-headline bg-surface-container-lowest px-9 py-11 hover:bg-pillar-purple transition-colors duration-500"
                  >
                    <div className="mb-2 font-headline uppercase text-[52px] leading-none text-pillar-purple group-hover:text-white transition-colors duration-200 ">
                      {feature.num}
                    </div>

                    <div className="mb-[10px] font-headline uppercase text-[21px] tracking-[0.5px] text-on-surface-variant group-hover:text-white/80">
                      {feature.title}
                    </div>

                    <p className="m-0 text-sm font-light leading-[1.6] text-on-surface-variant group-hover:text-white/80">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Footer */}
      <section className="py-4 max-w-7xl mx-auto px-6 border-t border-outline-variant/10">
        <h4 className="font-headline text-2xl font-black mb-10 tracking-tight text-center uppercase">
          Continue Exploring
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link href="/programs/primary-school-tour" className="group block">
            <div className="relative h-80 rounded-[3rem] overflow-hidden mb-8 shadow-xl shadow-black/20">
              <img
                src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_6631.jpg"
                alt="Primary School Tour"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary-fixed/60 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <span className="text-white font-black text-xs uppercase tracking-widest mb-2 block">
                  Professional Mentorship
                </span>
                <h5 className="font-headline uppercase text-4xl font-black text-white leading-none tracking-tighter">
                  School Tour
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
                <span className="material-symbols-outlined text-white text-[10rem] opacity-10">
                  diversity_3
                </span>
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
