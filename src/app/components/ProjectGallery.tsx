"use client";
import Image from "next/image";
import { useState } from "react";
type Props = { screenshots: string[] };

function ProjectGallery({ screenshots }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {screenshots.map((src, i) => (
          <button
            key={src}
            onClick={() => setSelected(src)}
            className="relative aspect-[16/10] overflow-hidden rounded-xl border border-gray-700 bg-gray-900"
          >
            <Image
              src={src}
              alt={`screenshot ${i + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <Image
            src={selected}
            alt="enlarged screenshot"
            width={1200}
            height={800}
            className="object-contain rounded-lg"
          />
        </div>
      )}
    </>
  );
}

export default ProjectGallery;
