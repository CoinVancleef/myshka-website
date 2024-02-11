export function Footer() {
  return (
    <div className="h-[100px] w-full flex flex-col justify-center items-center gap-2 text-lg bg-gray-700 bg-opacity-50 text-gray-300">
      <div className="text-2xl">Contact me at:</div>
      <div className="flex justify-center items-center gap-5">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/sleepymausu"
        >
          Twitter
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.pixiv.net/en/users/53872777"
        >
          Pixiv
        </a>
        <a target="_blank" rel="noreferrer" href="https://boosty.to/mysh">
          Boosty
        </a>
      </div>
    </div>
  );
}
