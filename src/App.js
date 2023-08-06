import "./App.css";
// import { ArtSection } from "./ui/sections/art-section";
import { AvatarSection } from "./ui/sections/avatar-section";

function App() {
  const starsAnimation = Array.from({ length: 10 }, (_, i) => i + 1).map(
    (e) => <span></span>
  );

  return (
    <div>
      <div className="flex justify-center">
        <AvatarSection />
      </div>
      <section>{starsAnimation}</section>
    </div>
  );
}

export default App;
