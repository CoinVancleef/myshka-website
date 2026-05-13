import "../App.css";
import { ArtSection } from "../ui/sections/art-section";
import { AvatarSection } from "../ui/sections/avatar-section";
import { Footer } from "../ui/sections/footer";
import { Header } from "../ui/sections/header";
import { MangaSection } from "../ui/sections/manga-section";
import { TwitchSection } from "../ui/sections/twitch-section";
import { FourSeasonsSection } from "../ui/sections/four-seasons-section";
import { YouTubeShortsSection } from "../ui/sections/youtube-shorts-section";

function Landing() {
  const starsAnimation = Array.from({ length: 10 }, (_, i) => i + 1).map(
    (e) => <span></span>,
  );

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10">
        <Header currentPage={"home"} />
        <AvatarSection />
        <ArtSection />
        <FourSeasonsSection />
        <MangaSection />
        <YouTubeShortsSection />
        <TwitchSection />
        <Footer />
      </div>
      <section>{starsAnimation}</section>
    </div>
  );
}

export default Landing;
