import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | LEONE ATHLETES",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-headline text-xs font-bold uppercase tracking-widest mb-6">
              Established 2018
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-on-surface leading-none tracking-tighter mb-8">
              Our Heart Beats in{" "}
              <span className="text-primary italic">Lakka</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              From the dusty pitches of Freetown to a nationwide movement,
              Sierra Leone Youth Sport Development is redefining the
              intersection of athletic excellence and educational empowerment.
            </p>
          </div>
          <div className="md:col-span-5 relative">
            <div className="rounded-[2rem] overflow-hidden aspect-square shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                className="w-full h-full object-cover"
                alt="Dynamic close up of youth soccer players in Sierra Leone celebrating a goal on a coastal sand pitch at sunset"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd0KfWp2sqA7GOyAeYuKmrMsCiDg9fqZ9kwCvnbchT7Hl2d-wms2HbMrYycbhUPXgUtDLbztat9DBB8N2ZMGBqfGdRnXrmESFN1rOBrpErmzTRSU564nD418XZ089RDWLNIaqowID_gOeWinpL8Cu3WfA5IKYUSOnO2nJpkwYTFDn0l18KL9CDSZj7lKV_hF8KmeksApbvp6uk-He1kzXST22mfNRD9uJ79WbX65nIroJTOzxgCZ3tju_rBla5YJV5w0ZQA4SN1Yo"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-tertiary-container p-8 rounded-3xl shadow-xl hidden md:block max-w-[200px]">
              <p className="font-headline font-black text-4xl text-on-tertiary-container">
                500+
              </p>
              <p className="font-body text-sm font-bold text-on-tertiary-container/80">
                Athletes Empowered Annually
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight">
                Our Story
              </h2>
              <div className="h-1.5 w-24 bg-primary mt-4 rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] flex flex-col justify-center min-h-[400px]">
              <h3 className="font-headline text-3xl font-bold mb-6">
                The Lakka Beginning
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                It started with a single ball and five kids on Lakka Beach. In
                2018, Mamadu Bah saw that talent in Sierra Leone was abundant,
                but opportunity was scarce. He envisioned a space where sports
                wasn&apos;t just a game, but a gateway to university and
                professional leadership.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Today, YSD operates from our flagship facility in Freetown,
                serving as a lighthouse for youth development across the
                peninsula.
              </p>
            </div>
            <div className="md:col-span-1 rounded-[2rem] overflow-hidden relative group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Vibrant overhead shot of a community basketball court in a coastal African village"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6pwFjfjPPvZlvAdKNJHxOCKj3FPiaN2Og9Bx8T1BMx1z9xkZn_W9Vfu-4Ln9MHtq6_SOROyjFyQKubMVgGq2o7q7kSyEFXp5BsirivEaF__gkeee7n7E0mCRvf5e1BMSUQkLSJQbazCwmscoh3ZMftLktxpuPC1gEm-YLnLVoDMWCtIcV0eRLziQR1Mqi-HwmTtkIXeZFvek_TTnHnUS2FP3ei8F9Jpn0DC_w20kLoh4P5HiYR325bpbi-AmKMHSemodSEtlNlzY"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                <span className="text-on-primary font-headline font-black text-2xl">
                  Community Rooted
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 py-24 bg-[#6A359B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-white/60">
              <span className="material-symbols-outlined">visibility</span>
              <span className="font-headline font-bold uppercase tracking-widest text-sm">
                The Vision
              </span>
            </div>
            <h3 className="font-headline text-4xl md:text-5xl font-black text-white leading-tight">
              To be the catalyst for the next generation of Sierra Leonean
              global leaders through the power of sport.
            </h3>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-white/60">
              <span className="material-symbols-outlined">track_changes</span>
              <span className="font-headline font-bold uppercase tracking-widest text-sm">
                The Mission
              </span>
            </div>
            <p className="text-xl md:text-2xl text-purple-100 font-medium leading-relaxed">
              We provide elite athletic training, comprehensive educational
              support, and mentorship programs that transform local potential
              into international excellence.
            </p>
            <div className="pt-4">
              <div className="flex justify-between text-white/80 text-xs font-bold uppercase mb-2">
                <span>Youth Empowerment Growth</span>
                <span>92%</span>
              </div>
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full w-[92%] bg-secondary shadow-[0_0_15px_rgba(255,150,86,0.6)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="px-6 py-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-4xl font-extrabold text-on-surface">
              The Leadership
            </h2>
            <p className="text-on-surface-variant mt-2">
              Visionaries driving the Kinetic Editorial movement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Mamadu Bah",
                title: "Founder & CEO",
                bio: "A former athlete and educational consultant, Mamadu founded YSD with the belief that sport is the most powerful tool for social mobility in Sierra Leone.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJL8dKiloLUOavUF3Mj9qKW_tRb8V3HLJG_QqIE56BNeBk_47qry6TQ3hvFCFOBqUEXVHuD0l9qyFwjQSbnFJx9g3JKawSU9X8vufBViHiL98ZMC_Gws1BNWdNaBu7K-UhKx33Xx-AleqJDNMBZ_-FIcbCj14qT13PcZzHY8Pi4EdExuvYVMcx0b71MdE2BRIOakyZaZcta1LOqGUPHO0cCOu1FCR8RCzu9Keaqx6QwmYXkGWamyW3dOg3s12bxz-K64leYm-QZzo",
              },
              {
                name: "Fatmata Sesay",
                title: "Director of Education",
                bio: "Fatmata bridges the gap between the field and the classroom, ensuring every athlete maintains a 3.5 GPA and remains on track for university placement.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2-D99Dkol2Y2zdRmWXSXDnspW2dfDb1sLcdSpczsAMbesXan_fHsTR7lIEYxNKhfVVe71k6fP5jPedxW3Jb5aaFOWY3-V5RtBRDtwTKtZ0oOQrdJMuqGmyLrr7YizAKTSWbGmbBXg5kIj0TqDqYAs94zoxHFO5u1TDi0-JEKbs5Vi6GN2sJzxBHh5YTZxX4-oNxTD_m4r1barfCV4YC6G1TtbK79nQk9rEcAno5ZvkEn3i0RSrOHLcPK3DFo-vBFDdZJSzPorjVQ",
              },
              {
                name: "Ibrahim Conteh",
                title: "Head of Performance",
                bio: "With 15 years of coaching experience in West Africa, Ibrahim oversees the technical development and physical conditioning of our premier teams.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASL7kzGfCbWVkZ3hfVVLsGVFLIq0d9I9F6Urvyzit4gsz4if5ZQBZlSL5EondqQJgnfxmPsekpu8TFO_jLVOTAGw2EjYkbD5N79B4tSllT7iYoY9Zq7O3DoqRFWqcFsIHYwEvyU5dIJulFVHhLZ8Osr9E5V_L1jx-MA_jXCis8QmXx3k0qaOU-5P0ExW7j3d_UdFomcCiFVK0GHKKzjA3Ue3TVbMppPBEBTuB5Gyke_NN1--gvI3LQM1z4OQHUi5ZoiI0wUlQcp_o",
              },
            ].map((leader) => (
              <div key={leader.name} className="group">
                <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[4/5] bg-surface-container">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt={`Portrait of ${leader.name}`}
                    src={leader.img}
                  />
                  <div className="absolute bottom-4 left-4 right-4 glass-card-light p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-bold text-primary font-headline uppercase">
                      {leader.title}
                    </p>
                  </div>
                </div>
                <h4 className="font-headline text-2xl font-black text-on-surface">
                  {leader.name}
                </h4>
                <p className="text-on-surface-variant mt-2 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="px-6 py-20 bg-surface-container-high">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4">
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-6">
                Visit Us
              </h2>
              <div className="flex items-start gap-4 mb-8">
                <span className="material-symbols-outlined text-primary mt-1">
                  location_on
                </span>
                <div>
                  <p className="font-headline font-bold text-lg">
                    Lakka Headquarters
                  </p>
                  <p className="text-on-surface-variant">
                    2 Off Johnson Drive, Lakka
                    <br />
                    Freetown, Sierra Leone
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-8">
                <span className="material-symbols-outlined text-primary mt-1">
                  mail
                </span>
                <div>
                  <p className="font-headline font-bold text-lg">
                    Contact Info
                  </p>
                  <p className="text-on-surface-variant">
                    youthsportdevelopmentsl@gmail.com
                    <br />
                    +232 31 41 3504
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="bg-primary text-on-primary px-8 py-3 rounded-full font-headline font-bold hover:shadow-lg transition-all flex items-center gap-2 w-fit"
              >
                Get Directions{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="md:col-span-8 h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <img
                className="w-full h-full object-cover"
                alt="Stylized map of a coastal town showing roads and green areas"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeUZzmf3kMhJ7FHMXOxtBHZBX0mXmesfQTPsvkQnRdTicJO6cmZSWmZKLlHO2nHK5DimjVlz0us0jLV8LmDMmKss73ygGa02K8O3osWF2QXlL4QMZgY1X4DtXRRdjaD5sXDQDva3hkiP1quQnKgJlfms5A0WYhkaL1bY67fBZytwlMdRCBFZUQjfOlgMkaxys6sTR2Qwpr9QI-I9GjuXmnTz6nKG7Lf1yZeAkDUdRwmOXpgyCPx9FPIFu8RUN9uXiZW8tYrTaIbAY"
              />
              <div className="absolute inset-0 bg-primary/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <span className="material-symbols-outlined">
                    sports_soccer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
