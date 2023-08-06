import mysh from "../../assets/icons/mysh.jpg";
import kag from "../../assets/twc-art/kag.png";

export function AvatarSection() {
  return (
    <div className="w-full max-w-[900px] flex justify-between p-4 rounded-lg">
      <div className="relative p-4 flex items-center gap-4 shadow-md max-w-[400px] text-nowrap">
        <div className="text-3xl">
          Artist, touhou gamer, Love Live! and Project Sekai fan
        </div>
        <img
          className="absolute -top-1/4 left-2 scale-[20%]"
          src={kag}
          alt="kaguya"
        />
      </div>
      <div className="p-4 flex flex-col items-center bg-gray-700 bg-opacity-50 rounded-lg gap-4 shadow-md">
        <div className="text-5xl">Mysh</div>
        <img className="rounded-full" src={mysh} alt="mysh-avatar" />
        <p className="text-gray-300 text-lg">@sleepymausu</p>
      </div>
    </div>
  );
}
