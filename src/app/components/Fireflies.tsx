"use client";

import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import firefliesConfig from "../../config/fireflies.config";

export default function Fireflies() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      <Particles
        id="fireflies"
        init={particlesInit}
        options={firefliesConfig}
        className="w-full h-full"
      />
    </div>
  );
}
