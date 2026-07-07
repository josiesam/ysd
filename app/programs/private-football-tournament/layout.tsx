import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Schools Football Tournament",
  description:
    "Youth Sport Development SL is building the first dedicated competitive football platform for private school students across Sierra Leone.",
  openGraph: {
    images: ["https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/IMG_6027.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://ff6afvdal8w6atua.public.blob.vercel-storage.com/articles/IMG_6027.png"],
  },
};

export default function PrivateFootballTournamentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
