import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, ArrowRight, Award, Trophy, TrendingUp, Users, Globe, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs & Initiatives",
  description:
    "Discover our core initiatives: primary school tours, private school football tournaments, and elite mentorship programs.",
};

export default function ProgramsPage() {
  return (
    <main className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Hero */}
      <header className="mb-20">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-on-surface leading-none mb-6 text-balance">
          OUR{" "}
          <span className="text-primary tracking-tighter italic">PROGRAMS</span>{" "}
          <br className="hidden md:block" /> &amp;{" "}
          <span className="text-secondary italic">INITIATIVES</span>
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
                <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center shadow-lg shadow-secondary/10 text-on-secondary-container">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <span className="font-headline font-bold text-secondary uppercase tracking-widest text-sm">
                  Educational Outreach
                </span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">
                <Link
                  href="/programs/primary-school-tour"
                  prefetch={false}
                  className="hover:text-secondary transition-colors"
                >
                  Primary School Tour:
                  <br />
                  Choosing Sport as a Career Path
                </Link>
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed max-w-xl">
                We bridge the gap between education and athleticism by visiting
                primary schools nationwide. Our mission is to inspire children
                to see sports not just as a hobby, but as a professional
                trajectory that fosters discipline, teamwork, and global
                opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4 pb-4">
                <div className="bg-surface-container-lowest p-6 rounded-2xl border border-secondary/10">
                  <h4 className="font-headline font-black text-2xl text-secondary mb-1">
                    15+
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                    Schools Visited
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl border border-secondary/10">
                  <h4 className="font-headline font-black text-2xl text-secondary mb-1">
                    1000+
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                    Students Engaged
                  </p>
                </div>
              </div>
              <Link
                href="/programs/primary-school-tour"
                prefetch={false}
                className="inline-flex items-center gap-2 text-secondary font-black text-sm uppercase tracking-widest hover:gap-4 transition-all"
              >
                Read the Story{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative min-h-[400px]">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                alt="Group of energetic Sierra Leonean primary school children laughing and playing football on a dirt pitch"
                className="w-full h-full object-cover"
                src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/%20%E2%81%A0%E2%81%A0ysd_preview_article/IMG_6631.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Football Tournament */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 bg-primary rounded-[2rem] p-8 md:p-12 text-on-primary flex flex-col justify-between min-h-[500px] relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-on-primary/20 backdrop-blur-md p-3 rounded-full text-white">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-headline font-bold text-lg leading-[0.9]">
                  Our Flagship Initiative
                </h3>
              </div>
              <h2 className="font-headline text-4xl md:text-6xl font-black mb-6 leading-tight">
                <Link
                  href={`/programs/private-football-tournament`}
                  prefetch={false}
                  className="hover:text-on-primary/60 transition-colors"
                >
                  Private Schools Football Tournament
                </Link>
              </h2>
              <p className="text-on-primary/80 text-lg leading-relaxed max-w-lg">
                We are Youth Sport Development SL, and we are building the first
                dedicated competitive football platform for private school
                students across Sierra Leone. Coming soon.
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
                  className="bg-on-primary/10 backdrop-blur-md px-6 py-2 rounded-full border border-on-primary/20 font-bold text-sm"
                >
                  {school}
                </span>
              ))}
              <span className="bg-on-primary/20 backdrop-blur-md px-6 py-2 rounded-full border border-on-primary/40 font-bold text-sm">
                Participating Elite
              </span>
            </div>
            <Link
              href="/programs/private-football-tournament"
              prefetch={false}
              className="inline-flex items-center gap-2 mt-2 text-on-primary hover:text-on-primary/60 underline-offset-2 underline font-black text-sm uppercase tracking-widest hover:gap-4 transition-all"
            >
              See our test run
              <ArrowRight className="w-4 h-4" />
            </Link>
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
                <div className="w-[85%] h-full bg-secondary relative shadow-[0_0_10px_rgba(0,0,0,0.1)]">
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
          ].map((item) => {
            const IconComponent = 
              item.icon === "stadium" ? Trophy :
              item.icon === "query_stats" ? TrendingUp : Users;
            return (
              <div
                key={item.title}
                className="bg-surface-container rounded-[2rem] p-8 border border-outline-variant/10 shadow-sm"
              >
                <IconComponent className="text-primary mb-4 w-10 h-10 block" />
                <h5 className="font-headline font-bold text-on-surface mb-2">
                  {item.title}
                </h5>
                <p className="text-on-surface-variant text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Champions at Risk Removed */}

      {/* Section 4: Mentorship */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-surface-container-high rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
          <div className="md:col-span-7 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Users className="w-6 h-6" />
              </div>
              <span className="font-headline font-bold text-primary uppercase tracking-widest text-sm italic">
                Elite Mentorship
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface mb-6 leading-[0.9] tracking-tighter">
              <Link
                href="/programs/inspiring-the-next-generation"
                prefetch={false}
                className="hover:text-primary transition-colors"
              >
                Inspiring the <br />
                Next Generation
              </Link>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl mb-10 font-medium">
              We connect our brightest talents with international professionals,
              providing the roadmap and character-building required to
              transition from local pitches to global stadiums.
            </p>
            <Link
              href="/programs/inspiring-the-next-generation"
              prefetch={false}
              className="inline-flex items-center gap-2 bg-on-surface text-surface px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary transition-all shadow-xl"
            >
              Explore Paths
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-4 relative z-10">
            <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-xl flex flex-col justify-end aspect-square">
              <span className="font-headline font-black text-4xl text-primary leading-none tracking-tighter italic">
                50+
              </span>
              <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mt-2">
                Active Mentors
              </p>
            </div>
            <div className="bg-primary p-6 rounded-[2rem] aspect-square flex flex-col justify-end text-on-primary shadow-xl shadow-primary/20">
              <Globe className="w-10 h-10 mb-4" />
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-tight">
                Global <br />
                Connectivity
              </p>
            </div>
            <div className="col-span-2 bg-on-surface p-8 rounded-[2.5rem] text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-4 text-secondary">
                <CheckCircle className="w-6 h-6" />
                <h5 className="font-headline font-bold text-xl leading-none">
                  Scholarship Readiness
                </h5>
              </div>
              <p className="text-xs text-outline-variant font-medium leading-relaxed opacity-70 italic font-body">
                Preparing athletes for international academic opportunities in
                the US and Europe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
