import "../App.css";
import { ArtSection } from "../ui/sections/art-section";
import { Footer } from "../ui/sections/footer";
import { Header } from "../ui/sections/header";
import { TwcSection } from "../ui/sections/twc-section";
import { TwitchSection } from "../ui/sections/twitch-section";

function ArtGallery() {
  const starsAnimation = Array.from({ length: 10 }, (_, i) => i + 1).map(
    (e) => <span></span>
  );

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10">
        <Header currentPage={"art-gallery"} />
        <ArtSection />
        <TwcSection />
        <TwitchSection />
        <Footer />
      </div>
      <section>{starsAnimation}</section>
    </div>
  );
}

export default ArtGallery;
