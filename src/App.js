import "./App.css";
import { ArtSection } from "./ui/sections/art-section";
import { AvatarSection } from "./ui/sections/avatar-section";
import { Footer } from "./ui/sections/footer";
import { TwcSection } from "./ui/sections/twc-section";
import { TwitchSection } from "./ui/sections/twitch-section";

function App() {
  const starsAnimation = Array.from({ length: 10 }, (_, i) => i + 1).map(
    (e) => <span></span>
  );

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10">
        <AvatarSection />
        <ArtSection />
        <TwcSection />
        <TwitchSection />
        <Footer />
      </div>
      <section>{starsAnimation}</section>
    </div>
  );
}

export default App;
