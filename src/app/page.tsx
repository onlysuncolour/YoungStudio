import styles from "./page.module.css";
import PageDecoration from "@/components/page-decoration";

export default function Home() {
  return (
      <main className={styles.main}>
        <PageDecoration />
      </main>
  );
}
