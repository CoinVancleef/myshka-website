export function YouTubeShortsSection() {
  return (
    <div className="w-full max-w-[800px] flex flex-col gap-5 justify-center items-center mt-10 max-sm:mt-4 max-sm:p-2">
      <div className="text-5xl max-sm:text-3xl text-center">
        we love ice cream video
      </div>
      <div className="rounded-lg overflow-hidden">
        <iframe
          width="315"
          height="560"
          src="https://www.youtube.com/embed/rTOC-FOHh7Y"
          title="YouTube Shorts"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
