import { twitch, twitchEmotes } from "../../images";

export function TwitchSection() {
  const emotes = twitchEmotes.map((emote) => (
    <img
      className="max-sm:w-[200px] max-sm:h-[200px]"
      src={emote}
      alt="emote"
    />
  ));
  return (
    <div className="w-full max-w-[800px] flex flex-col gap-5 jusify-center items-center mt-10 max-sm:mt-4 max-sm:p-2">
      <div className="flex gap-4 items-center">
        <div className="text-5xl max-sm:text-3xl text-center">
          Twitch emotes made by me
        </div>
        <img
          className="w-12 h-12 max-sm:hidden"
          src={twitch}
          alt="twitch-icon"
        />
      </div>
      <div className="grid grid-cols-3 gap-8 bg-gray-700 bg-opacity-50 p-6 rounded-lg max-sm:grid-cols-1 max-sm:gap-5">
        {emotes}
      </div>
    </div>
  );
}
