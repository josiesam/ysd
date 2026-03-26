"use client";

import { useState } from "react";

const categories = [
  "All Stories",
  "On the Pitch",
  "In the Classroom",
  "Community Outreach",
];

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc3lFhHt89Yr0RmtrMdK7LLXrn9CnNM0bhunz4Ex0kMjqdwZ9UShB9sX7V-xS2SLq9qQ-8ODL_E1nQwJfg1cOVqmG_FGGVMAuCtwZzVxq21kAqRANw804oPFdynw0Yw0q-79yGFBXedhw0FkWHvRKop5DesndNPt7USKIEkcK2XT3tE0JuGBSys5JGnsvqWFdXg8wdxqoPwB4fvxbL5TYGtK3q4xcASUZ6aqjY7MU0hdYCmNTBuP9-vce6D3lueVY4S6G6srzb0rI",
    alt: "Dynamic wide angle shot of young Sierra Leonean boys playing football on a red dirt pitch at sunset",
    category: "On the Pitch",
    label: "Championship Finals 2024",
    sublabel:
      "Celebrating the spirit of teamwork and resilience at the Freetown Youth Arena.",
    span: "large",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5D2CqtuMUufJxQpGV9pymxkPn_VaRlVoxEllSlR4OvQIa4XPVgWuT73N7skOSi_ZljwRx9GhXQJqRkL8pNA421gI5OWiNPw67uzRvF4Ln6ozmpdFGRrslhwTJpHkW6gI0YGye8--YKHy069chDB87pKl8QEX1xYhoIMakuSaJOinyIlzYmTALgMw_glRKp1ShjhCqVH7dGOv-Nk2EKrSNIaB3KvgUSmOG0LlXOC6MbBvcZ9RcDvqwsMqeXVG6lbvXaZ_OH87rw-w",
    alt: "Close-up of a young girl's hands writing in a notebook in a sunlit African classroom",
    category: "In the Classroom",
    label: "View Education",
    span: "standard",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6gKhhaw7KR07MmZSr6OD1HEnfCFprPslqO0TfPOsq7qH8gbuKo4bX_fee7xnicleQtcHV1-U8hOaoIDjx_SP5bzqgce1wyp8ISJb6YXIwI8mg2rfw-MTlpznoWfeVxAXxHev5Kbcaj7WHiuJWIvHYbil56YRAcvgOeLAgJt-f1FyoPoYo8ScX2Ndx5ZjePlJu6SQ22rgwtxBaflxPcPX-ygAkqelV-nHsvfIM24kpLAwFPC1g5gS3Vq0sbvv-T5mC8qs89QT50a8",
    alt: "Group of community members laughing and working together in a rural Sierra Leonean village during a sports outreach program",
    category: "Community Outreach",
    label: "Community Impact",
    span: "standard",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbt7xrrpRxo84ENysQrnwQqnuitvH4bfJdAktlLRHKlicEKqYh8req0HtwyUTbNH2bJBAdxAy0_-j4wgcc88hxcTCiZFiJIjXTTa-8lW0qBzn2nFwAr0RF9e9_r1WVnvvbjuNiAIAt6DLJlKFeG2ByUKsOX6GSuIPkcgrE6YtvcW0lRbDCkwI0pZsv59bTpS06OBOQ8CA5sXVqJf88MhncayTbif9SFUVPugX2GMpSrMK4XNT7eaYABY4JgKlldoKhVTagjbqy3pM",
    alt: "Low angle portrait of a teenage track athlete in Sierra Leone with focused expression in cinematic morning light",
    category: "On the Pitch",
    label: "Mariatu's Sprint",
    sublabel: "Athlete Spotlight",
    span: "tall",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj3lEkAUqEEdZ18E1wKf3P2aCUXtucPwQSXWJ8bZV_1xXyPvo7Id9nAsQTmPbJOd8Py4GBMVFKr_8MHb71dvnb0MCqhJJGvCH2w0c73jbocfOo3-mu7QAHYHz_ezlZfHrsGgdXhKnv6LH5AeOrhsoqMXLH2bNzHVpmoZ0oslzqr03rDVEjF7snIJ4Y40nV35gtCDDuza-CucqXwkDrmCzOvEamC7ClA0Qg_3lMhaiK0kJeZ5a-xf4yHDOIdO-JYdS5GSijaBerDK0",
    alt: "Warm interaction between a male mentor and a young student in an outdoor educational workshop",
    category: "In the Classroom",
    label: "Mentorship",
    span: "standard",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqENfoOPoQImNfhmsbRdio-_ca_csUhXYH2leEx8XLR63UFsiHAHAbbjZPdBQ2NYGhmwxQatFCvUpBwajpj45NTpwkvT8N7Z-JU2Yj5ujE9c1LYYAJpqozVVCfdxkt-4_EqmmLHaGrxwZwRHRuOpn-EwMD46msdTJjouWtDmNHeVoxhRKYbqv9NJi4XhG_cD8DDY4EMaJF-UmlU2PylM919kHaxPiTB7ndKO-BzbS6qQ6Kv16-sapRRN7G8KP-Cychp-Q3H2Balpc",
    alt: "Vibrant overhead shot of a newly renovated multi-sport court in an urban area",
    category: "On the Pitch",
    label: "New Courts",
    span: "wide",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgyEyYy23KXEQC7XytPZhILFVfs4R7Lk4j2K5v49Z97RFK1PO2v0buDs4aD85_8SL5zwK7_T2wc-aXj7RUFFb57MkUDDvJUd1JH2Aa1AnAqWBhA2vsaPfMrlbcLYpyBwg--FV-_VSQ9ae8wPpnuklHYWPAkdRCPmNhvfiHmLmgrnb8V6r9YFhaYYaktdmPxjUH3c6XNDDBcoUzCVOqFI1s4UtW1nEOXViOvMz-cyAK_zGqQMEdLsRJjF9CWcLHvTBpUSt3ZAMMC5E",
    alt: "Diverse group of volunteers in green shirts cheering and holding sports equipment in an open field",
    category: "Community Outreach",
    label: "Volunteers",
    span: "standard",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Stories");

  const filtered =
    activeCategory === "All Stories"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mt-12 mb-16">
        <span className="text-tertiary font-headline font-bold uppercase tracking-[0.2em] text-sm">
          Visual Proof
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-black text-on-surface mt-4 tracking-tighter leading-none">
          Momentum in <br />
          <span className="text-primary">Motion.</span>
        </h1>
        <p className="mt-6 text-on-surface-variant max-w-xl text-lg leading-relaxed">
          Witness the power of sport and education as we document the journey of
          Sierra Leone&apos;s future leaders. From the final whistle to the
          final exam.
        </p>
      </header>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-full font-headline font-bold text-sm transition-all hover:shadow-lg ${
              activeCategory === cat
                ? "bg-tertiary-container text-on-tertiary-container"
                : "bg-surface-container text-on-surface hover:bg-surface-container-high"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {filtered.map((img, i) => {
          const colSpan =
            img.span === "large"
              ? "md:col-span-2 md:row-span-2 h-[500px]"
              : img.span === "tall"
              ? "md:row-span-2 h-[500px] md:h-auto"
              : img.span === "wide"
              ? "md:col-span-2 h-[246px]"
              : "h-[246px]";

          return (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl bg-surface-container ${colSpan}`}
            >
              <img
                alt={img.alt}
                className="w-full h-full object-cover kinetic-crop"
                src={img.src}
              />
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 ${
                  img.span === "large"
                    ? "bg-gradient-to-t from-black/80 via-transparent to-transparent"
                    : img.span === "tall"
                    ? "bg-gradient-to-t from-primary/90 to-transparent"
                    : "bg-black/40 backdrop-blur-[2px] items-center justify-center"
                }`}
              >
                {img.span === "large" ? (
                  <>
                    <span className="text-secondary-fixed font-headline font-bold text-xs uppercase tracking-widest mb-2">
                      On the Pitch
                    </span>
                    <h3 className="text-white text-3xl font-headline font-black">
                      {img.label}
                    </h3>
                    <p className="text-white/80 text-sm mt-2 max-w-md">
                      {img.sublabel}
                    </p>
                  </>
                ) : img.span === "tall" ? (
                  <>
                    <span className="text-white/80 text-xs font-bold uppercase mb-1">
                      {img.sublabel}
                    </span>
                    <h4 className="text-white font-headline font-bold text-xl">
                      {img.label}
                    </h4>
                  </>
                ) : (
                  <span className="text-white font-headline font-bold text-xs border border-white/40 px-4 py-2 rounded-full backdrop-blur-md">
                    {img.label}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Momentum Bar */}
      <section className="mt-24 p-12 rounded-[2.5rem] bg-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-dim/20 skew-x-12 translate-x-12" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-headline font-black text-white leading-tight">
              Help us build the <br />
              next generation.
            </h2>
            <p className="text-primary-fixed mt-4 text-lg">
              We&apos;re aiming to expand our classroom-to-pitch program to 5
              new regions this year.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <div className="mb-2 flex justify-between text-white text-xs font-headline font-bold uppercase tracking-widest">
              <span>Campaign Goal</span>
              <span>75% Reached</span>
            </div>
            <div className="h-[12px] w-full md:w-[400px] bg-white/20 rounded-full relative overflow-hidden">
              <div className="h-full bg-secondary-fixed w-[75%] relative">
                <div className="absolute right-0 top-0 h-full w-4 bg-tertiary-fixed blur-sm" />
              </div>
            </div>
            <button className="mt-8 w-full bg-white text-primary px-10 py-4 rounded-full font-headline font-black uppercase tracking-widest hover:bg-tertiary hover:text-white transition-all">
              Support the Mission
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 flex justify-around items-center py-4 px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button className="flex flex-col items-center text-slate-400">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold mt-1 uppercase">Home</span>
        </button>
        <button className="flex flex-col items-center text-slate-400">
          <span className="material-symbols-outlined">sports_soccer</span>
          <span className="text-[10px] font-bold mt-1 uppercase">Sport</span>
        </button>
        <button className="flex flex-col items-center text-blue-700">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            photo_library
          </span>
          <span className="text-[10px] font-bold mt-1 uppercase">Gallery</span>
        </button>
        <button className="flex flex-col items-center text-slate-400">
          <span className="material-symbols-outlined">volunteer_activism</span>
          <span className="text-[10px] font-bold mt-1 uppercase">Impact</span>
        </button>
      </div>
    </main>
  );
}
