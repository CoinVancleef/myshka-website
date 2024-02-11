import { PRICE_DATA } from "../../price-data";
import { PricingItem } from "./pricing-item";

export function PricingSection() {
  return (
    <div className="w-full max-w-[800px] flex flex-col gap-5 jusify-center items-center mt-10 max-sm:mt-4 max-sm:p-2">
      <div className="text-5xl max-sm:text-3xl text-center">Pricing</div>
      <div className="flex gap-5">
        {PRICE_DATA.map((item) => {
          return (
            <PricingItem
              title={item.title}
              price={item.price}
              additional={item.additional}
            />
          );
        })}
      </div>
    </div>
  );
}
