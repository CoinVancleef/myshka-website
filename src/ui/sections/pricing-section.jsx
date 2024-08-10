import { PRICE_DATA } from "../../price-data";
import { Payments } from "./payments";
import { PricingItem } from "./pricing-item";

export function PricingSection() {
  return (
    <div className="w-full max-w-[1050px] flex flex-col gap-5 jusify-center items-center max-sm:px-2 max-sm:gap-3 mt-5 px-2">
      <div className="text-5xl max-sm:text-3xl text-center">Pricing</div>
      <div className="flex gap-5 max-sm:flex-col max-sm:gap-3">
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
      <div className="text-xl text-center border-2 border-gray-500 p-3 rounded-md bg-gray-600 bg-opacity-50">
        Simple background -{" "}
        <div className="inline-block text-2xl text-green-200">10$</div>
        <br /> Other options - let's talk for{" "}
        <div className="inline-block text-purple-200">custom pricing</div>{" "}
      </div>
      <Payments />
    </div>
  );
}
