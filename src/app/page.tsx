import styles from "./page.module.css";
import PageDecoration from "@/components/page-decoration";

export default function Home() {
  return (
      <main className={styles.main}>
        <PageDecoration />
        <div className={styles.meInfo}>
            我享受生活、玩乐、编程、运动，还有探索
        </div>
      </main>
  );
}
