export function PricingItem({ title, price, additional }) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[300px] p-5 bg-gray-600 bg-opacity-50 text-gray-200 border-2  rounded-md border-gray-500">
      <div className="text-2xl text-center text-blue-200">{title}</div>
      <div className="text-4xl text-center text-green-200">{price}</div>
      <div className="text-lg text-purple-200">{additional}</div>
    </div>
  );
}
