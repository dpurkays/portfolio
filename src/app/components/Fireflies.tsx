"use client";

import Particles from "@tsparticles/react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import firefliesConfig from "../../config/fireflies.config";

export default function Fireflies() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      <Particles
        id="fireflies"
        // @ts-expect-error: Particles `init` prop is runtime-supported but not typed
        init={particlesInit}
        options={firefliesConfig}
        className="w-full h-full"
      />
    </div>
  );
}
