import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & News | LEONE ATHLETES",
};

const matches = [
  {
    month: "FEB",
    day: "04",
    teams: "Bilingual High vs. Vertex Academy",
    venue: "National Stadium Annex • 16:00 GMT",
    icon: "sports_soccer",
    highlight: false,
  },
  {
    month: "FEB",
    day: "07",
    teams: "St. Edwards vs. Prince of Wales",
    venue: "Kingtom Oval • 15:30 GMT",
    icon: "sports_basketball",
    highlight: true,
  },
  {
    month: "FEB",
    day: "12",
    teams: "Methodist Boys vs. Albert Academy",
    venue: "National Stadium • 10:00 GMT",
    icon: "sports_volleyball",
    highlight: false,
  },
  {
    month: "FEB",
    day: "15",
    teams: "Govt Model vs. Freetown Sec",
    venue: "Brookfields Grounds • 14:00 GMT",
    icon: "sports_soccer",
    highlight: false,
  },
];

const testimonials = [
  {
    quote:
      "Since the introduction of the sport development program, we've seen a 15% increase in attendance. The kids aren't just playing; they're learning discipline.",
    name: "Mr. Alusine Bangura",
    role: "Principal, Vertex Academy",
    variant: "neutral",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdYnTeNlL_VOZo7isHM4eIPLxMF9EUKw8GYqiYwadQX9pv2oyjXVZsE5CRe975FZtyrlOJBlaJXcynk2cQeMlRuunyiskl6_NyhQ7KL0NExSkm-XKeS_dSwZSD1Q0SgGXn_wkiuVW7j9kMohWUK52KqUUq2Z7XiwH9kT8-lGe_K-HTePPFNRdRPqd6TsYgZ2JhJPzM9EshwJlUnIDaXlirn05iqIh1qRW7gR9ygJZCrOOFMQ_a_NaNVdy93MSZ1o2RWCwvGn4T7B4",
  },
  {
    quote:
      "Being part of the team taught me that leadership isn't about shouting; it's about making sure everyone is moving in the same direction.",
    name: "Mariama Sillah",
    role: "Student & Team Captain",
    variant: "primary",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzMXnFoKBpPCtiVjECgJy6I5AtWIIsUBzE8M9Kz-r9CUjxqcibIZ9_S7aTMSurAJ2zz7iFIhJHC-FpWvK96w8TnZn9YtaQlSweuNK-4Tps81oE1CHXO5CnKzLrFOGwsUjkqcvxt80e-Ce9Y0NcYDsLGJJ02ik31okQEtwltu4nOk3ngXh3V3pKhJrb4786Onl9a4SCrvfri9lMqXKe4DcVyN48Ic-6Ohzdx1OZP_5OMhLzaz5oA7DH4OO9yOYsLk17Z7C3BugX-WQ",
  },
  {
    quote:
      "The equipment donation was just the start. The coaching clinics have fundamentally changed how our physical education teachers approach youth engagement.",
    name: "Coach Ibrahim Kamara",
    role: "Head Coach, Bilingual High",
    variant: "neutral",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO27DcLc14CqhBrcumWxV58ZzNrlfswdHyFqqtEYCcTCRURm-IWzSebZPAts7z6cKYjDEAgqc8LJJ6jiIKFa32OJEZmh2YEBb5zpgBXlbNQUl98wp6T7W9yHI6mJzaOhC0smMQlBvbmMf2kehiVT4rbm__P04dSq1nK_9sWTeCEVQkKHrCgh-k6NdHatz1baN1ej1biS_LkxFoUPRgmwx8XdbNEGun0h9AuYwIruD1UtPSOb6TFJ0S47i7yHXacgzrNxMXo4JNV1g",
  },
];

export default function EventsPage() {
  return (
    <main className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Hero */}
      <header className="mb-16 mt-8">
        <h1 className="font-headline text-5xl md:text-7xl font-black text-primary tracking-tighter mb-4 leading-[0.9]">
          ACTIVITY <br />
          <span className="text-tertiary">HUB</span>
        </h1>
        <p className="max-w-2xl text-on-surface-variant text-lg font-medium leading-relaxed">
          Tracking the heartbeat of youth sports in Sierra Leone. From the
          15-day tour implementation to the matches that define the next
          generation of leaders.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Upcoming Matches */}
        <section className="lg:col-span-4 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-headline text-2xl font-extrabold tracking-tight uppercase">
              Upcoming Matches
            </h2>
            <span className="text-xs font-bold bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full uppercase">
              Feb 2024
            </span>
          </div>
          <div className="space-y-3">
            {matches.map((match) => (
              <div
                key={`${match.day}-${match.teams}`}
                className={`bg-surface-container-low p-4 rounded-xl flex items-center gap-4 hover:bg-surface-container transition-colors group ${
                  match.highlight ? "border-l-4 border-tertiary" : ""
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-container rounded-lg flex flex-col items-center justify-center text-on-primary-container font-headline font-black">
                  <span className="text-xs leading-none">{match.month}</span>
                  <span className="text-xl leading-none">{match.day}</span>
                </div>
                <div className="flex-grow">
                  <p className="font-headline text-sm font-extrabold text-on-surface uppercase tracking-wide">
                    {match.teams}
                  </p>
                  <p className="text-xs text-on-surface-variant font-semibold">
                    {match.venue}
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {match.icon}
                </span>
              </div>
            ))}
          </div>

          {/* Momentum Tracker */}
          <div className="bg-surface-container-highest p-6 rounded-2xl">
            <h3 className="font-headline font-bold text-primary mb-2">
              Momentum Tracker
            </h3>
            <p className="text-xs font-semibold text-on-surface-variant mb-4 uppercase tracking-widest">
              Tournament Progress
            </p>
            <div className="momentum-track">
              <div className="momentum-fill" />
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-black text-on-surface-variant uppercase tracking-tighter">
              <span>Regional Qualifiers</span>
              <span>Finals</span>
            </div>
          </div>
        </section>

        {/* Tour Highlights */}
        <section className="lg:col-span-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline text-3xl font-black text-on-surface tracking-tighter">
              TOUR HIGHLIGHTS{" "}
              <span className="text-secondary opacity-50 text-xl font-medium">
                15-Day Implementation
              </span>
            </h2>
            <button className="text-primary font-bold text-sm hover:underline">
              View Full Gallery
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {/* Featured */}
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl bg-slate-200">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="Dynamic wide shot of youth football match in Sierra Leone under bright afternoon sun"
                src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/training.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
                <span className="text-on-primary bg-secondary px-3 py-1 rounded-full text-xs font-black uppercase w-fit mb-2">
                  Day 3
                </span>
                <h3 className="text-on-primary font-headline text-2xl font-black leading-none">
                  Friendly Match
                </h3>
              </div>
            </div>

            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl bg-slate-200 group">
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Close-up of young athlete smiling while holding a basketball on a sunlit court"
                src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/tour%20highlight"
              />
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-4xl">
                  play_circle
                </span>
              </div>
            </div>

            <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl bg-slate-200">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="A group of diverse students in school uniforms cheering enthusiastically in bleachers"
                src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/cheers.jpeg"
              />
              <div className="absolute top-4 right-4">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
              </div>
            </div>

            <div className="col-span-2 row-span-1 bg-tertiary-container rounded-2xl p-6 flex items-center justify-between overflow-hidden relative">
              <div className="z-10">
                <h4 className="font-headline font-black text-on-tertiary-container text-xl uppercase tracking-tighter">
                  Equipment <br />
                  Distribution
                </h4>
                <p className="text-on-tertiary-container/80 text-sm font-bold mt-2">
                  1,200+ Footballs Delivered
                </p>
              </div>
              <span className="material-symbols-outlined text-9xl absolute -right-4 -bottom-4 text-on-tertiary-container/10">
                inventory_2
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Success Stories */}
      {/* <section className="mt-24">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.2em] text-xs">
            The Voices of Change
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-black mt-2">
            SUCCESS STORIES
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`p-8 rounded-[2rem] relative ${
                t.variant === "primary"
                  ? "bg-primary text-on-primary shadow-xl shadow-primary/20"
                  : "bg-surface-container"
              }`}
            >
              <span
                className={`material-symbols-outlined text-6xl absolute top-4 left-4 ${
                  t.variant === "primary"
                    ? "text-on-primary/10"
                    : "text-primary/10"
                }`}
              >
                format_quote
              </span>
              <p
                className={`relative z-10 font-medium italic leading-relaxed mb-8 ${
                  t.variant !== "primary" ? "text-on-surface" : ""
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-300">
                  <img
                    className="w-full h-full object-cover"
                    alt={`Portrait of ${t.name}`}
                    src={t.img}
                  />
                </div>
                <div>
                  <p
                    className={`font-headline font-bold text-sm ${
                      t.variant !== "primary" ? "text-on-surface" : ""
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-[10px] font-black uppercase tracking-widest ${
                      t.variant === "primary"
                        ? "text-on-primary/70"
                        : "text-primary"
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="mt-32 mb-12 bg-surface-container-highest rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center">
        <div className="p-12 md:w-1/2">
          <h2 className="font-headline text-4xl font-black text-primary leading-none mb-6">
            DON&apos;T MISS THE FINALS
          </h2>
          <p className="text-on-surface-variant font-medium mb-8">
            Join thousands of supporters at the Siaka Stevens Stadium for the
            Grand Finale of the SL Youth Sport Championship.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-tertiary text-on-tertiary px-8 py-4 rounded-full font-headline font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all">
              Get Tickets
            </button>
            <button className="bg-surface-container-lowest text-primary border border-primary/20 px-8 py-4 rounded-full font-headline font-bold uppercase tracking-widest hover:bg-white transition-all">
              Add to Calendar
            </button>
          </div>
        </div>
        <div className="md:w-1/2 h-[400px] w-full relative">
          <img
            className="absolute inset-0 w-full h-full object-cover kinetic-crop"
            alt="Blurred motion of a football player mid-kick with bright stadium lights creating a bokeh effect"
            src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/kick.jpeg"
          />
        </div>
      </section>
    </main>
  );
}
