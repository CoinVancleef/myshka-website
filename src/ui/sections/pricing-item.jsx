export function PricingItem({ title, price, additional }) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[300px] p-5 bg-gray-600 bg-opacity-50 text-gray-200 border-2  rounded-md">
      <div className="text-2xl text-center">{title}</div>
      <div className="text-4xl text-center">{price}</div>
      <div className="text-lg">{additional}</div>
    </div>
  );
}
