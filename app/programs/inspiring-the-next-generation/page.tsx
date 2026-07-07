import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inspiring the Next Generation",
  description:
    "Bridging the gap between athletic potential and professional career pathways through mentorship.",
  openGraph: {
    images: ["https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/ysd_article_v7/instagram.png13.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/ysd_article_v7/instagram.png13.png"],
  },
};

export default function InspiringNextGenPage() {
  return (
    <main className="bg-surface min-h-screen">
      {/* Article Hero */}
      <header className="relative h-[60vh] md:h-[75vh] overflow-hidden bg-pillar-green-container">
        <img
          src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/ysd_article_v7/instagram.png13.png"
          alt="Primary school children participating in sports"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="material-symbols-outlined text-pillar-green text-[20rem] md:text-[35rem] opacity-10 font-thin italic">
            handshake
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-pillar-green via-pillar-green/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-white text-pillar-green text-xs font-black uppercase tracking-widest">
              Professional Mentorship
            </span>
            <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
              10 Min Read
            </span>
          </div>
          <h1 className="font-headline uppercase text-5xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-8 group">
            Inspiring the <br />
            <span className="italic uppercase"> Next Generation.</span>
          </h1>
          <p
            className="text-[0.9rem] text-white/80 italic leading-[1.65]
             mb-2 text-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
          >
            We brought Sierra Leone's football icon Kei Kamara face to face with
            the students of Hill Valley Academy — and what happened changed
            every person in that room.
          </p>
          <div
            className="flex items-center gap-[10px]
                text-[0.64rem] uppercase
                tracking-[0.14em]
                text-white/70 mb-6"
          >
            In partnership with
            <span className="text-white/80 underline font-semibold tracking-[0.08em]">
              Hill Valley Academy
            </span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <section className="relative z-10 -mt-16 pb-24">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-black/5">
            {/* Author Section */}
            <div className="flex items-center gap-4 mb-12 pb-12 border-b border-outline-variant/10">
              <div className="w-14 h-14 rounded-full bg-pillar-green flex items-center justify-center text-white font-black text-xl shadow-lg shadow-pillar-green/20">
                YSD
              </div>
              <div>
                <p className="text-on-surface font-bold text-lg">
                  YSD Communications Team
                </p>
                <p className="text-on-surface-variant text-sm font-medium">
                  Industry & Career Focus • May 20, 2026
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="font-body text-on-surface-variant space-y-8">
              <div
                className="relative bg-pillar-green-container border-l-[5px] border-pillar-green
         p-[30px_34px] my-[38px] rounded-r-[10px]
         before:content-[''] before:absolute before:top-[-10px] before:left-[14px]
         before:text-[5rem] before:text-on-pillar-green-container before:opacity-[0.14]
         before:font-headline before:leading-none"
              >
                <p
                  className="relative z-10 m-0 text-[1.28rem] italic
           text-on-pillar-green-container leading-[1.65]"
                >
                  When the Ministry of Education ceased organized sports in
                  schools, a vacuum was created. For the elite athletes in
                  Sierra Leone&apos;s private sector, the path forward became
                  obscured. We stepped in to bridge that gap.
                </p>
              </div>

              <p>
                At Youth Sport Development (SL) LG, that belief drives
                everything we do. So when we had the opportunity to partner with{" "}
                <strong>Hill Valley Academy</strong> and bring Sierra Leonean
                football icon <strong>Kei Kamara</strong> directly into the
                lives of their students, we did not hesitate for a single
                moment. What followed was one of the most powerful days we have
                experienced as an organisation.
              </p>

              <p>
                The program took place inside the school library — a place built
                for learning — where Kei Kamara stood before a room full of
                young people and opened up about his life, his journey, and
                everything it took to get there. From the very first words, the
                students were completely present. You could feel it.
              </p>

              <div className="grid grid-cols-2 gap-[14px] my-[48px] -mx-[32px]">
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/ysd_article_v7/instagram.png8.png"
                  alt=""
                  className="w-full h-[340px] object-cover block rounded-[3px]
               shadow-[0_12px_36px_rgba(0,0,0,0.14)]"
                />
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/ysd_article_v7/WhatsApp%20Image%202026-06-22%20at%2002.19.15.jpeg"
                  alt=""
                  className="w-full h-[340px] object-cover block rounded-[3px]
               shadow-[0_12px_36px_rgba(0,0,0,0.14)]"
                />
              </div>
              <p
                className="text-[0.78rem] tracking-[0.04em] text-[#5a4f3f]
              text-center mt-[11px] italic"
              >
                Inside the Hill Valley Academy library — Kei Kamara speaks while
                students listen with full attention.
              </p>

              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-pillar-purple before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']"></div>
              <h2 className="font-headline uppercase font-bold">
                A Room That Changed the Atmosphere
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />

              <p>
                We set up the programme inside the library because we wanted the
                students to experience something different. When Kei Kamara
                walked in, the energy shifted immediately. Students who had only
                ever seen him on a screen were suddenly sitting a few metres
                away, watching him speak, hearing his voice, seeing that he was
                real.
              </p>

              <p>
                He crouched down to speak with individual students. He listened
                to their questions. He gave honest answers about his journey —
                the hard parts, the sacrifices, the moments where he had to
                choose between giving up and going again. Our students absorbed
                every word.
              </p>

              <div className="my-[48px] -mx-[32px]">
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/ysd_article_v7/instagram.png4.png"
                  alt=""
                  className="w-full block rounded-[3px]
               shadow-[0_16px_50px_rgba(0,0,0,0.16)]"
                />

                <p
                  className="text-[0.78rem] tracking-[0.04em] text-[#5a4f3f]
                text-center mt-[11px] italic"
                >
                  Kei Kamara taking time to speak directly with a student — one
                  of many personal moments that made this program so meaningful.
                </p>
              </div>

              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-pillar-purple before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']"></div>
              <h2 className="font-headline uppercase font-bold">
                More Than Football — A Masterclass in Life
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />

              <p>
                We did not organise this program to give students a brush with
                fame. We organised it because Kei Kamara's story is a
                masterclass in the qualities that determine success in any
                field: discipline, resilience, focus, and the refusal to be
                defined by where you started.
              </p>

              <p>
                He told them that the road to professional football was not
                smooth. That there were moments of doubt. That the discipline
                required went far beyond training programmes. These are not just
                football lessons. These are life lessons, and our students
                needed to hear them from someone who lived them.
              </p>

              <div
                className="my-[48px] px-[10px] py-[26px]
                border-t-[3px] border-b-[3px] border-pillar-purple
                font-headline text-[1.2rem] italic
                text-green leading-[1.55] text-center"
              >
                "We are not just developing athletes. We are developing young
                people who believe in themselves and know what it takes to go
                after what they want."
              </div>

              <div
                className="grid grid-cols-3 gap-[10px]
                bg-on-pillar-green-container text-white
                py-[40px] px-[20px]
                my-[54px] -mx-[32px]
                rounded-[3px]"
              >
                <div className="text-center px-[10px]">
                  <span
                    className="block font-headline
               text-[2.4rem] font-black text-pillar-purple
               leading-none mb-[8px]"
                  >
                    1
                  </span>
                  <span
                    className="text-[0.7rem] uppercase tracking-[0.13em]
                   text-white/75 leading-[1.4]"
                  >
                    Football Legend
                    <br />
                    in the Room
                  </span>
                </div>
                <div className="text-center px-[10px]">
                  <span
                    className="block font-headline
               text-[2.4rem] font-black text-pillar-purple
               leading-none mb-[8px]"
                  >
                    2
                  </span>
                  <span
                    className="text-[0.7rem] uppercase tracking-[0.13em]
                   text-white/75 leading-[1.4]"
                  >
                    Organisations
                    <br />
                    Working Together
                  </span>
                </div>
                <div className="text-center px-[10px]">
                  <span
                    className="block font-headline
               text-[2.4rem] font-black text-pillar-purple
               leading-none mb-[8px]"
                  >
                    ∞
                  </span>
                  <span
                    className="text-[0.7rem] uppercase tracking-[0.13em]
                   text-white/75 leading-[1.4]"
                  >
                    Young Lives
                    <br />
                    Touched
                  </span>
                </div>
              </div>

              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-pillar-purple before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']"></div>
              <h2 className="font-headline uppercase font-bold">
                Outside the Library — The Moment Came Alive
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />

              <p>
                After the indoor program, the energy moved outside. Students
                gathered around Kei Kamara in the corridors and school grounds,
                holding out notebooks, bags, and phones, wanting a signature, a
                photo, a moment they could hold onto.
              </p>

              <div className="grid grid-cols-3 gap-[12px] my-[48px] -mx-[32px]">
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/ysd_article_v7/instagram.png15.png"
                  alt=""
                  className="w-full h-[280px] object-cover block rounded-[3px]
             shadow-[0_10px_30px_rgba(0,0,0,0.13)]"
                />
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/ysd_article_v7/instagram.png10.png"
                  alt=""
                  className="w-full h-[280px] object-cover block rounded-[3px]
             shadow-[0_10px_30px_rgba(0,0,0,0.13)]"
                />
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/ysd_article_v7/instagram.png14.png"
                  alt=""
                  className="w-full h-[280px] object-cover block rounded-[3px]
             shadow-[0_10px_30px_rgba(0,0,0,0.13)]"
                />
              </div>

              <p
                className="text-[0.78rem] tracking-[0.04em] text-[#5a4f3f]
              text-center mt-[11px] italic"
              >
                The program spilled into the corridors and grounds as students
                gathered to share the moment with Kei Kamara.
              </p>

              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-pillar-purple before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']"></div>
              <h2 className="font-headline uppercase font-bold">
                Partnership Built on a Shared Purpose
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />

              <p>
                None of this would have been possible without our partnership
                with Hill Valley Academy. From the very beginning, the school
                embraced this program with the same belief we hold — that young
                people flourish when they are exposed to the right people, the
                right conversations, and the right moments at the right time.
              </p>

              <p>
                As the organiser of this mentorship program, Youth Sport
                Development (SL) LG takes responsibility for creating these
                connections. We identify the role models, we build the
                relationships, we show up to the schools, and we ensure that our
                young people get access to experiences that most would never
                have by chance alone.
              </p>

              <div className="grid grid-cols-2 gap-[14px] my-[48px] -mx-[32px]">
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/ysd_article_v7/instagram.png12.png"
                  alt=""
                  className="w-full h-[340px] object-cover block rounded-[3px]
               shadow-[0_12px_36px_rgba(0,0,0,0.14)]"
                />
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/ysd_article_v7/WhatsApp%20Image%202026-05-16%20at%2011.04.42%20%2810%29.jpg"
                  alt=""
                  className="w-full h-[340px] object-cover block rounded-[3px]
               shadow-[0_12px_36px_rgba(0,0,0,0.14)]"
                />
              </div>
              <p
                className="text-[0.78rem] tracking-[0.04em] text-[#5a4f3f]
              text-center mt-[11px] italic"
              >
                Pure joy — the moment the program extended outside and the
                students got to share the day with their hero.
              </p>

              <div className="my-[48px] -mx-[32px]">
                <img
                  src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/ysd_article_v7/instagram.png13.png"
                  alt=""
                  className="w-full block rounded-[3px]
               shadow-[0_16px_50px_rgba(0,0,0,0.16)]"
                />

                <p
                  className="text-[0.78rem] tracking-[0.04em] text-[#5a4f3f]
                text-center mt-[11px] italic"
                >
                  Kei Kamara bringing the lesson to life on the ground — showing
                  students that the skills that took him to the top begin right
                  where they are standing.
                </p>
              </div>

              <div className="font-headline flex items-center gap-3 text-[10px] uppercase tracking-[5px] text-pillar-purple before:block before:h-px before:w-7 before:bg-pillar-purple text-pillar-purple font-bold before:content-['']"></div>
              <h2 className="font-headline uppercase font-bold">
                This Is Only the Beginning
              </h2>
              <div className="w-[44px] h-[2px] m-0 bg-pillar-purple" />

              <p>
                What happened at Hill Valley Academy is not a one-time event. It
                is one chapter in a growing story we are writing across Sierra
                Leone, one school and one community at a time. Every program we
                organise builds the foundation of a movement. Every student who
                leaves inspired carries that message forward into their homes,
                their communities, and their futures.
              </p>

              <p>
                Sierra Leone has no shortage of talent, ambition, or potential.
                What our young people need is access, opportunity, and the
                belief that greatness is not reserved for someone else. That is
                exactly what Youth Sport Development (SL) LG exists to provide.
                And we are only getting started.
              </p>

              <div
                className="bg-pillar-purple-container border-l-[6px] border-pillar-purple
                py-[28px] px-[34px] mt-[56px]
                rounded-r-[3px]"
              >
                <p className="text-[0.95rem] text-on-pillar-purple-container m-0 italic font-normal">
                  To every student at Hill Valley Academy who was part of this
                  day: we saw you, we believe in you, and we will keep showing
                  up. Youth Sport Development (SL) LG remains committed to using
                  sport as a tool to educate, empower, and inspire young people
                  right across Sierra Leone. Sport for a brighter future.
                </p>
              </div>

              <div
                className="mt-[48px] border border-[#e0d8cc] rounded-[6px]
                p-[22px_28px] flex items-center gap-5
                bg-white"
              >
                <div
                  className="w-[44px] h-[44px] flex-shrink-0 rounded-[12px]
                flex items-center justify-center
                bg-[linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)]"
                >
                  <svg
                    className="w-6 h-6 fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div
                    className="text-[0.65rem] font-semibold tracking-[0.18em]
                  uppercase text-[#9a8a78] mb-1"
                  >
                    Original Post on Instagram
                  </div>
                  <p className="text-[0.88rem] text-[#2a2018] m-0 font-normal leading-[1.5]">
                    See the full photo gallery from the Hill Valley Academy
                    mentorship program on the Youth Sport Development (SL) LG
                    official Instagram page.
                  </p>
                  <a
                    className="inline-block mt-2 text-[0.82rem] text-[#1a5c2e]
               font-semibold tracking-[0.02em]
               border-b-[1.5px] border-gold pb-[1px]
               hover:text-gold transition-colors"
                    href="https://www.instagram.com/p/DYYevhSNvoJ/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    instagram.com/p/DYYevhSNvoJ
                  </a>
                </div>
                <a
                  className="flex-shrink-0 inline-flex items-center gap-[7px]
             bg-pillar-green text-white
             text-[0.75rem] font-semibold uppercase tracking-[0.1em]
             px-[18px] py-[10px] rounded-[4px]
             hover:bg-[#0f3a1c] transition-colors no-underline"
                  href="https://www.instagram.com/p/DYYevhSNvoJ/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-[14px] h-[14px] fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  View Post
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Footer */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-outline-variant/10">
        <h4 className="font-headline text-2xl font-black mb-10 tracking-tight text-center uppercase">
          Expand Your Vision
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link href="/programs/primary-school-tour" className="group block">
            <div className="relative h-80 rounded-[3rem] overflow-hidden mb-8 shadow-xl">
              <img
                src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_6631.jpg"
                alt="Primary School Tour"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pillar-purple/80 to-transparent opacity-90" />
              <div className="absolute bottom-10 left-10">
                <span className="text-white font-black text-xs uppercase tracking-widest mb-2 block text-purple-200">
                  Outreach Initiative
                </span>
                <h5 className="font-headline uppercase text-4xl font-black text-white leading-none tracking-tighter italic">
                  School Tour: <br />
                  <span className="text-pillar-purple-container uppercase">
                    Sports as a Career Path.
                  </span>
                </h5>
              </div>
            </div>
          </Link>

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
        </div>
      </section>
    </main>
  );
}
