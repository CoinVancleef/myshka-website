import { Link } from "react-router-dom";

export function Header({ currentPage }) {
  return (
    <div className="h-[100px] w-full flex justify-center items-center gap-2 text-2xl bg-gray-700 bg-opacity-50 text-gray-300">
      <div className="flex justify-between w-full max-w-[1200px]">
        <Link to={"/"}>Home</Link>
        <div className="flex gap-10">
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
