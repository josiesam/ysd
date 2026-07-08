import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeartCrack, Brain, Activity, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Champions at Risk",
  description: "How sports is becoming a sanctuary for athletes battling the Kush epidemic in Sierra Leone.",
  openGraph: {
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBotS0L56cIMNG3nZjuUiNRT6JiHDahRrAVWjYOzE0P8McaEf2bQfVHF9ePLHqiui_596dhbsGPzohxCXz_-Fm40TiaWMf0yTP8WNcGlNMmnNtSJocB1jSD0VZsLG-smmXzUqtJVXCD8ONo9v4LBWNas6tiNBVAP9-MwZFeFiwt_194iO-c0FsfOp3JfR0-QOJsdHS43DvCBeUNHE6WqALVU9mQKAzsJnoCwp1azGrsLd0oQGEGI5ADBM2XxZwbF3jcPvjhqz9LB9I"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBotS0L56cIMNG3nZjuUiNRT6JiHDahRrAVWjYOzE0P8McaEf2bQfVHF9ePLHqiui_596dhbsGPzohxCXz_-Fm40TiaWMf0yTP8WNcGlNMmnNtSJocB1jSD0VZsLG-smmXzUqtJVXCD8ONo9v4LBWNas6tiNBVAP9-MwZFeFiwt_194iO-c0FsfOp3JfR0-QOJsdHS43DvCBeUNHE6WqALVU9mQKAzsJnoCwp1azGrsLd0oQGEGI5ADBM2XxZwbF3jcPvjhqz9LB9I"],
  },
};

export default function ChampionsAtRiskPage() {
  return (
    <main className="bg-surface min-h-screen">
      {/* Article Hero */}
      <header className="relative h-[65vh] md:h-[80vh] overflow-hidden bg-black">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBotS0L56cIMNG3nZjuUiNRT6JiHDahRrAVWjYOzE0P8McaEf2bQfVHF9ePLHqiui_596dhbsGPzohxCXz_-Fm40TiaWMf0yTP8WNcGlNMmnNtSJocB1jSD0VZsLG-smmXzUqtJVXCD8ONo9v4LBWNas6tiNBVAP9-MwZFeFiwt_194iO-c0FsfOp3JfR0-QOJsdHS43DvCBeUNHE6WqALVU9mQKAzsJnoCwp1azGrsLd0oQGEGI5ADBM2XxZwbF3jcPvjhqz9LB9I"
          alt="Athlete focusing during training"
          fill
          priority
          className="object-cover grayscale opacity-60 contrast-125"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pillar-red via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-pillar-red text-white text-xs font-black uppercase tracking-widest">
              Community Health
            </span>
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
              12 Min Read
            </span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-8 italic">
            FIGHTING <br />
            <span className="text-pillar-red-container not-italic">BACK.</span>
          </h1>
        </div>
      </header>

      {/* Article Content */}
      <section className="relative z-10 -mt-20 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface-container-highest rounded-[2rem] p-8 md:p-12 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)]">
            {/* Author Section */}
            <div className="flex items-center gap-4 mb-12 pb-12 border-b border-white/5">
              <div className="w-14 h-14 rounded-full bg-pillar-red flex items-center justify-center text-white font-black text-xl">
                YSD
              </div>
              <div>
                <p className="text-on-surface font-bold">YSD Communications Team</p>
                <p className="text-on-surface-variant text-sm font-medium italic">Inside the Recovery Ward • May 20, 2026</p>
              </div>
            </div>

            {/* Content Body */}
            <div className="font-body text-on-surface-variant space-y-10">
              <blockquote className="text-3xl md:text-4xl font-headline font-black text-white italic leading-tight border-l-8 border-pillar-red pl-8 my-16">
                &quot;The street had its hands around my neck. Kush was stealing my vision. But then the coach found me, and everything changed.&quot;
                <footer className="text-base font-bold uppercase tracking-widest text-pillar-red mt-4 not-italic">— Alusine, U-17 Recovered Athlete</footer>
              </blockquote>

              <p className="text-xl leading-relaxed">
                Sierra Leone is currently facing a silent war. The &quot;Kush&quot; epidemic is targeting our most valuable resource: our youth. At YSD, we realized that being a sport organization wasn&apos;t enough—we had to become a sanctuary.
              </p>

              <h2 className="font-headline text-4xl font-black text-white pt-12 uppercase tracking-tighter italic">Rehabilitation Through Excellence</h2>
              <p className="text-lg leading-relaxed">
                Our &quot;Champions at Risk&quot; initiative integrates high-performance athletic training with intensive psychological counseling. We provide a structured environment where the discipline of football replaces the chaos of addiction.
              </p>

              {/* Stats Bento */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
                <div className="bg-pillar-red p-10 rounded-[3rem] text-white flex flex-col justify-between aspect-square md:aspect-auto">
                    <HeartCrack className="w-16 h-16 text-white opacity-30" />
                    <div>
                        <h4 className="text-6xl font-headline font-black mb-2 italic">240+</h4>
                        <p className="font-bold uppercase tracking-widest text-white/70">Lives Restored & Reintegrated</p>
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-4">
                    <div className="bg-surface-container-lowest p-8 rounded-[2.5rem] flex items-center gap-6 border border-white/5">
                          <div className="w-16 h-16 rounded-2xl bg-pillar-red/10 flex items-center justify-center text-pillar-red">
                            <Brain className="w-8 h-8" />
                          </div>
                         <div>
                            <h5 className="font-headline font-bold text-white text-2xl">Daily Counseling</h5>
                            <p className="text-sm opacity-60 font-medium tracking-tight">Structured mental health support</p>
                         </div>
                    </div>
                    <div className="bg-surface-container-lowest p-8 rounded-[2.5rem] flex items-center gap-6 border border-white/5">
                          <div className="w-16 h-16 rounded-2xl bg-pillar-red/10 flex items-center justify-center text-pillar-red">
                            <Activity className="w-8 h-8" />
                          </div>
                         <div>
                            <h5 className="font-headline font-bold text-white text-2xl">Medical Pathway</h5>
                            <p className="text-sm opacity-60 font-medium tracking-tight">Access to detox & nutrition</p>
                         </div>
                    </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                The results are unmistakable. Athletes who were once lost to the street are now leading their squads as captains, their focus sharpened by the very challenges they overcame. We aren&apos;t just building better players; we are reclaiming citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Footer */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
        <h4 className="font-headline text-2xl font-black mb-12 tracking-tight text-center uppercase text-white">RECLAIMING THE FUTURE</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link href="/programs/primary-school-tour" prefetch={false} className="group block">
            <div className="relative h-80 rounded-[3rem] overflow-hidden mb-8 shadow-2xl">
              <img 
                src="https://ff6afvdal8w6atua.public.blob.vercel-storage.com/school_tour.jpeg" 
                alt="Primary School Tour" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pillar-purple/80 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <span className="text-white font-black text-xs uppercase tracking-widest mb-2 block">Educational Outreach</span>
                <h5 className="font-headline text-4xl font-black text-white leading-none tracking-tighter">PRIMARY <br/> SCHOOL TOUR.</h5>
              </div>
            </div>
          </Link>

          <Link href="/programs/inspiring-the-next-generation" prefetch={false} className="group block">
            <div className="relative h-80 rounded-[3rem] overflow-hidden mb-8 shadow-2xl">
              <div className="absolute inset-0 bg-pillar-green" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="text-white w-40 h-40 opacity-10" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <span className="text-white font-black text-xs uppercase tracking-widest mb-2 block">Mentorship</span>
                <h5 className="font-headline text-4xl font-black text-white leading-none tracking-tighter">INSPIRING <br/> THE NEXT GEN.</h5>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
