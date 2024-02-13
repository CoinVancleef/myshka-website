import "../App.css";
import { CommissionSection } from "../ui/sections/commissions-section";
import { Footer } from "../ui/sections/footer";
import { Header } from "../ui/sections/header";
import { PricingSection } from "../ui/sections/pricing-section";

function Commissions() {
  return (
    <div>
      <Header currentPage={"commissions"} />
      <div className="flex flex-col items-center justify-center gap-10">
        <PricingSection />
        <CommissionSection />
        <Footer />
      </div>
    </div>
  );
}

export default Commissions;
