import "../App.css";
import { ArtLabelSection } from "../ui/sections/art-label-section";
import { ArtSection } from "../ui/sections/art-section";
import { Footer } from "../ui/sections/footer";
import { Header } from "../ui/sections/header";
import { MangaSection } from "../ui/sections/manga-section";
import { OsuSection } from "../ui/sections/osu-section";
import { TwcSection } from "../ui/sections/twc-section";
import { TwitchSection } from "../ui/sections/twitch-section";
import { FourSeasonsSection } from "../ui/sections/four-seasons-section";
import { YouTubeShortsSection } from "../ui/sections/youtube-shorts-section";

function ArtGallery() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10">
        <Header currentPage={"art-gallery"} />
        <ArtLabelSection />
        <ArtSection noLabel={true} />
        <FourSeasonsSection />
        <OsuSection />
        <TwcSection />
        <MangaSection />
        <YouTubeShortsSection />
        <TwitchSection />
        <Footer />
      </div>
    </div>
  );
}

export default ArtGallery;
