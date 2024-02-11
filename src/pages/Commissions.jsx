import "../App.css";
import { Footer } from "../ui/sections/footer";
import { Header } from "../ui/sections/header";
import { PricingSection } from "../ui/sections/pricing-section";

function Commissions() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10">
        <Header currentPage={"commissions"} />
        <PricingSection />
        <Footer />
      </div>
    </div>
  );
}

export default Commissions;
