"use client";
import { useSearchParams } from "next/navigation";

function VideoDemo({ video }: { video: string }) {
  const searchParams = useSearchParams();
  const shouldAutoplay = searchParams.get("autoplay") === "true";

  return (
    <video
      id="video"
      src={video}
      controls
      autoPlay={shouldAutoplay}
      className="h-[40rem] scroll-mt-24"
    />
  );
}

export default VideoDemo;
