import "../App.css";
import { ArtLabelSection } from "../ui/sections/art-label-section";
import { ArtSection } from "../ui/sections/art-section";
import { Footer } from "../ui/sections/footer";
import { Header } from "../ui/sections/header";
import { MangaSection } from "../ui/sections/manga-section";
import { TwcSection } from "../ui/sections/twc-section";
import { TwitchSection } from "../ui/sections/twitch-section";

function ArtGallery() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10">
        <Header currentPage={"art-gallery"} />
        <ArtLabelSection />
        <ArtSection noLabel={true} />
        <TwcSection />
        <MangaSection />
        <TwitchSection />
        <Footer />
      </div>
    </div>
  );
}

export default ArtGallery;
