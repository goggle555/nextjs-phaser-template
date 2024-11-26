import { config } from "@/phaser/config";
import Phaser from "phaser";
import { useEffect, useRef } from "react";

export default function PhaserContainer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    new Phaser.Game({ ...config, parent: ref.current });
  });
  return <div ref={ref} />;
}
