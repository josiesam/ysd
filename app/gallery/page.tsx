import fs from "fs";
import path from "path";
import GalleryClient from "./client"; // move your UI into this

const folderToCategory: Record<string, string> = {
  in_the_classroom: "In the Classroom",
  on_the_pitch: "On the Pitch",
  school_enagement: "School Outreach",
  sport_stakeholders: "Sport Stakeholders",
};

export default function Page() {
  const basePath = path.join(process.cwd(), "public/gallery");

  const folders = fs
    .readdirSync(basePath)
    .filter((f) => !f.startsWith("."))
    .filter((f) => fs.statSync(path.join(basePath, f)).isDirectory());

  const galleryImages = folders.flatMap((folder) => {
    const files = fs
      .readdirSync(path.join(basePath, folder))
      .filter((file) => file.match(/\.(jpg|jpeg|png|webp)$/i));

    return files.map((file, i) => ({
      src: `/gallery/${folder}/${encodeURIComponent(file)}`,
      alt: file,
      category: folderToCategory[folder] || folder,
      label: file.split(".")[0],
      span: i === 0 ? "large" : "standard", // simple layout logic
    }));
  });

  return <GalleryClient images={galleryImages} />;
}
