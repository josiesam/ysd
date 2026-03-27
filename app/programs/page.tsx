import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs & Initiatives | YSD-SL-LG",
};

export default function ProgramsPage() {
  return (
    <main className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Hero */}
      <header className="mb-20">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-on-surface leading-none mb-6">
          OUR <span className="text-primary">PROGRAMS</span> &amp;{" "}
          <span className="text-secondary">INITIATIVES</span>
        </h1>
        <p className="max-w-2xl text-lg text-on-surface-variant font-medium leading-relaxed">
          Empowering the next generation of Sierra Leonean athletes through
          structured sporting excellence, academic integration, and community
          rehabilitation.
        </p>
      </header>

      {/* Section 1: Primary School Tour */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-surface-container-low rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-on-secondary-container text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    school
                  </span>
                </div>
                <span className="font-headline font-bold text-secondary uppercase tracking-widest text-sm">
                  Educational Outreach
                </span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">
                Primary School Tour:
                <br />
                Choosing Sport as a Career Path
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed max-w-xl">
                We bridge the gap between education and athleticism by visiting
                primary schools nationwide. Our mission is to inspire children
                to see sports not just as a hobby, but as a professional
                trajectory that fosters discipline, teamwork, and global
                opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-6 rounded-2xl border border-secondary/10">
                  <h4 className="font-headline font-black text-2xl text-secondary mb-1">
                    45+
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                    Schools Visited
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl border border-secondary/10">
                  <h4 className="font-headline font-black text-2xl text-secondary mb-1">
                    12k+
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                    Students Engaged
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative min-h-[400px]">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
              <img
                alt="Group of energetic Sierra Leonean primary school children laughing and playing football on a dirt pitch"
                className="w-full h-full object-cover"
                src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/school_tour.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Football Gala */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 bg-primary rounded-[2rem] p-8 md:p-12 text-on-primary flex flex-col justify-between min-h-[500px] relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-on-primary/20 backdrop-blur-md p-3 rounded-full">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    workspace_premium
                  </span>
                </div>
                <h3 className="font-headline font-bold text-lg">
                  Premier Football Gala
                </h3>
              </div>
              <h2 className="font-headline text-4xl md:text-6xl font-black mb-6 leading-[0.9]">
                Filling the Void of MBSSE Sports
              </h2>
              <p className="text-on-primary/80 text-lg leading-relaxed max-w-lg">
                Recognizing the cessation of organized sports by the Ministry of
                Basic and Senior Secondary Education (MBSSE), we stepped in to
                ensure private school athletes never lose their competitive
                edge.
              </p>
            </div>
            <div className="relative z-10 mt-12 flex flex-wrap gap-3">
              {[
                "Hill Valley School",
                "Lebanese School",
                "Freetown International",
              ].map((school) => (
                <span
                  key={school}
                  className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 font-bold"
                >
                  {school}
                </span>
              ))}
              <span className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/40 font-bold text-secondary-container">
                Participating Elite
              </span>
            </div>
          </div>

          {/* Momentum Bar */}
          <div className="bg-secondary-container rounded-[2rem] p-8 flex flex-col justify-end relative overflow-hidden group">
            <img
              alt="Athletic soccer player in motion on a green field during a competitive match"
              className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-overlay opacity-30 group-hover:scale-110 transition-transform duration-1000"
              src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/dribble.jpeg"
            />
            <div className="relative z-10">
              <h4 className="font-headline text-2xl font-black text-on-secondary-container mb-4">
                The Momentum Bar
              </h4>
              <div className="w-full h-4 bg-on-secondary-container/10 rounded-full overflow-hidden mb-6">
                <div className="w-[85%] h-full bg-secondary relative">
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-tertiary shadow-[0_0_15px_#ff9656]" />
                </div>
              </div>
              <p className="text-on-secondary-container/70 font-bold text-sm">
                85% League Expansion Goal Reached
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          {[
            {
              icon: "stadium",
              title: "Modern Facilities",
              desc: "Utilizing high-grade astroturf pitches to minimize injury risks.",
            },
            {
              icon: "query_stats",
              title: "Scouting Database",
              desc: "Tracking player performance for international scholarship scouting.",
            },
            {
              icon: "groups",
              title: "Coaching Clinics",
              desc: "Professional development for PE teachers in the private sector.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-surface-container rounded-[2rem] p-8 border border-outline-variant/10"
            >
              <span className="material-symbols-outlined text-primary mb-4 text-4xl block">
                {item.icon}
              </span>
              <h5 className="font-headline font-bold text-on-surface mb-2">
                {item.title}
              </h5>
              <p className="text-on-surface-variant text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Champions at Risk */}
      <section className="bg-inverse-surface rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-error-dim/20 rounded-full blur-[120px]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-error-container/20 border border-error-container/30 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-error animate-pulse" />
              <span className="text-error font-bold uppercase tracking-widest text-xs">
                Critical Mission
              </span>
            </div>
            <h2 className="font-headline text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Champions <br />
              <span className="text-error-container">At Risk</span>
            </h2>
            <p className="text-outline-variant text-xl leading-relaxed mb-10 max-w-lg">
              The &quot;Kush&quot; epidemic is stealing our future stars. We
              don&apos;t just coach sports; we fight for the lives of our
              athletes. Our rehabilitation program provides a sanctuary for
              those battling addiction, returning them to the pitch and society.
            </p>
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: "healing",
                  title: "200+ Lives Restored",
                  desc: "Athletes successfully transitioned from addiction back to training.",
                },
                {
                  icon: "psychology",
                  title: "Mental Health Support",
                  desc: "Daily counseling sessions integrated with physical conditioning.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-6 group">
                  <div className="bg-error-container text-on-error-container p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-headline text-2xl font-bold">
                      {item.title}
                    </h4>
                    <p className="text-outline-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-error rounded-3xl rotate-3 opacity-20 group-hover:rotate-0 transition-transform duration-500" />
            <div className="glass-card-light p-4 rounded-3xl border border-white/10 relative">
              <img
                alt="Intense black and white portrait of a young African athlete with determined eyes"
                className="rounded-2xl w-full aspect-[4/5] object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBotS0L56cIMNG3nZjuUiNRT6JiHDahRrAVWjYOzE0P8McaEf2bQfVHF9ePLHqiui_596dhbsGPzohxCXz_-Fm40TiaWMf0yTP8WNcGlNMmnNtSJocB1jSD0VZsLG-smmXzUqtJVXCD8ONo9v4LBWNas6tiNBVAP9-MwZFeFiwt_194iO-c0FsfOp3JfR0-QOJsdHS43DvCBeUNHE6WqALVU9mQKAzsJnoCwp1azGrsLd0oQGEGI5ADBM2XxZwbF3jcPvjhqz9LB9I"
              />
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-error text-on-error rounded-2xl shadow-2xl">
                <p className="font-headline font-bold text-lg leading-tight italic">
                  &quot;Sports gave me a reason to say no to the street. It gave
                  me my life back.&quot;
                </p>
                <p className="mt-4 text-xs font-black uppercase opacity-70">
                  — Recovered Athlete, U-17 Squad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
