import mysh from "../../assets/icons/mysh.jpg";

export function AvatarSection() {
  return (
    <div className="w-full max-w-[900px] flex justify-between  p-4 rounded-lg shadow-md">
      <div className="p-4 bg-gray-700 bg-opacity-50">D</div>
      <div>
        <div className="p-4 flex text-5xl bg-gray-700 bg-opacity-50">Mysh</div>
        <img className="rounded-full" src={mysh} alt="mysh-avatar" />
      </div>
    </div>
  );
}
