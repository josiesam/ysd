import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Schools Football Tournament",
  description:
    "Youth Sport Development SL is building the first dedicated competitive football platform for private school students across Sierra Leone.",
  openGraph: {
    images: ["/_next/image?url=https%3A%2F%2Fff6afvdal8w6atua.public.blob.vercel-storage.com%2Farticles%2FIMG_6027.png&w=1200&q=75"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/_next/image?url=https%3A%2F%2Fff6afvdal8w6atua.public.blob.vercel-storage.com%2Farticles%2FIMG_6027.png&w=1200&q=75"],
  },
};

export default function PrivateFootballTournamentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
