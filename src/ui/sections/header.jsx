import { Link } from "react-router-dom";

export function Header({ currentPage }) {
  return (
    <div className="h-[100px] w-full flex justify-center items-center gap-2 text-2xl bg-gray-700 bg-opacity-50 text-gray-300 max-sm:gap-1 max-sm:text-lg max-sm:h-[80px]">
      <div className="flex justify-between w-full max-w-[1200px] max-sm:px-2">
        <Link to={"/"}>Home</Link>
        <div className="flex gap-10 max-sm:gap-3">
          <Link
            to={`${
              currentPage === "home" || "commissions" ? "/art-gallery/" : ""
            }`}
          >
            Art Gallery
          </Link>
          <Link
            to={`${
              currentPage === "home" || "art-gallery" ? "/commissions/" : ""
            }`}
          >
            Commissions
          </Link>
        </div>
      </div>
    </div>
  );
}
