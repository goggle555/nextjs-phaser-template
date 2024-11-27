import { HeadTemplate } from "@/components/head-template";
import dynamic from "next/dynamic";
import styles from "./index.module.css";

const PhaserContainer = dynamic(() => import("@/components/phaser-container"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <HeadTemplate />
      <div className={`${styles.page}`}>
        <main className={styles.main}>
          <PhaserContainer />
        </main>
      </div>
    </>
  );
}
