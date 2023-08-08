import mysh from "../../assets/icons/mysh.jpg";
import kag from "../../assets/twc-art/kag.png";
import twitter from "../../assets/icons/twitter.png";
import pixiv from "../../assets/icons/pixiv.png";
import kofi from "../../assets/icons/kofi.png";

export function AvatarSection() {
  return (
    <div className="w-full max-w-[1000px] flex justify-between p-4 rounded-lg">
      <div className="relative p-4 flex items-center gap-4 shadow-md max-w-[400px] text-nowrap">
        <div className="text-3xl max-sm:text-xl">
          Artist, touhou gamer, Love Live! and Project Sekai fan
        </div>
        <img
          className="absolute -top-10 left-2 scale-[20%] max-sm:hidden"
          src={kag}
          alt="kaguya"
        />
      </div>
      <div className="p-4 flex flex-col items-center bg-gray-700 bg-opacity-50 rounded-lg gap-4 shadow-md">
        <div className="text-5xl">Mysh</div>
        <img className="rounded-full" src={mysh} alt="mysh-avatar" />
        <p className="text-gray-300 text-lg">@sleepymausu</p>
        <div className="flex gap-2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/sleepymausu"
          >
            <img
              className="w-12 h-12 max-sm:w-8 max-sm:h-8"
              src={twitter}
              alt="twitter"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.pixiv.net/en/users/53872777"
          >
            <img
              className="w-12 h-12 max-sm:w-8 max-sm:h-8"
              src={pixiv}
              alt="pixiv"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ko-fi.com/myshkachan"
          >
            <img
              className="w-12 h-12 max-sm:w-8 max-sm:h-8"
              src={kofi}
              alt="kofi"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
