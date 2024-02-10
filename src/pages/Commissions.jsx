import "../App.css";
import { Footer } from "../ui/sections/footer";
import { Header } from "../ui/sections/header";

function Commissions() {
  const starsAnimation = Array.from({ length: 10 }, (_, i) => i + 1).map(
    (e) => <span></span>
  );

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10">
        <Header currentPage={"commissions"} />
        <Footer />
      </div>
      <section>{starsAnimation}</section>
    </div>
  );
}

export default Commissions;
