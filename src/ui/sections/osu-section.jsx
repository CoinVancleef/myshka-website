import { osuFanart } from "../../images";

export function OsuSection() {
  return (
    <div className="w-full max-w-[1200px] flex flex-col gap-5 justify-center items-center mt-10 max-sm:mt-4 max-sm:p-2">
      <div className="text-5xl max-sm:text-2xl text-center">
        My submission for the osu! Spring 2026 Fanart Contest
      </div>
      <img
        className="w-full max-w-[900px]"
        src={osuFanart}
        alt="osu spring 2026 fanart contest"
      />
    </div>
  );
}
