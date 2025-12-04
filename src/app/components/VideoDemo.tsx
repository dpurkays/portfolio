"use client";
import { useSearchParams } from "next/navigation";

export type VideoDemoProps = {
  video: string; // MP4 path OR YouTube URL
  videoType?: "file" | "youtube";
};

function VideoDemo({ video, videoType = "file" }: VideoDemoProps) {
  const searchParams = useSearchParams();
  const shouldAutoplay = searchParams.get("autoplay") === "true";

  // YOUTUBE
  if (videoType === "youtube") {
    return (
      <div className="md:w-[42rem] md:h-96">
        <iframe
          className="w-full h-full"
          src={video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  // LOCAL
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
