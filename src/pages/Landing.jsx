import "../App.css";
import { ArtSection } from "../ui/sections/art-section";
import { AvatarSection } from "../ui/sections/avatar-section";
import { Footer } from "../ui/sections/footer";
import { Header } from "../ui/sections/header";
import { MangaSection } from "../ui/sections/manga-section";
import { TwcSection } from "../ui/sections/twc-section";
import { TwitchSection } from "../ui/sections/twitch-section";

function Landing() {
  const starsAnimation = Array.from({ length: 10 }, (_, i) => i + 1).map(
    (e) => <span></span>
  );

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10">
        <Header currentPage={"home"} />
        <AvatarSection />
        <ArtSection />
        <TwcSection />
        <MangaSection />
        <TwitchSection />
        <Footer />
      </div>
      <section>{starsAnimation}</section>
    </div>
  );
}

export default Landing;
