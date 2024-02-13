import { PRICE_DATA } from "../../price-data";
import { PricingItem } from "./pricing-item";
import boosty from "../../assets/icons/boosty.png";

export function PricingSection() {
  return (
    <div className="w-full max-w-[800px] flex flex-col gap-5 jusify-center items-center max-sm:px-2 max-sm:gap-3 mt-5">
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
      <div className="text-3xl flex gap-5 items-center text-blue-200 max-sm:flex-col max-sm:text-2xl max-sm:gap-2">
        All payments through{" "}
        <a
          className="flex px-4 py-2 border-2 border-orange-400 rounded-lg gap-3 items-center text-gray-300 bg-black"
          target="_blank"
          rel="noreferrer"
          href="https://boosty.to/mysh"
        >
          Boosty
          <img
            className="w-12 h-14 max-sm:w-8 max-sm:h-8"
            src={boosty}
            alt="boosty"
          />
        </a>
      </div>
    </div>
  );
}
