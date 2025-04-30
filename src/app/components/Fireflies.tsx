"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import firefliesConfig from "../../config/fireflies.config";

export default function Fireflies() {
  const particlesInit = async (main: any) => {
    console.log("hey");
    console.log(main);
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
