import styles from "./page.module.css";
import PageDecoration from "@/components/page-decoration";

export default function Home() {
  return (
      <main className={styles.main}>
        <PageDecoration />
        <div className={styles.title}>
            我享受生活、玩乐、编程、运动，还有探索
        </div>
        <div className={styles.myBlock}>
          <img src="./me.png" className={styles.mePic} />
          <div className={styles.meInfo}>
            <div className={styles.greeting}>
              G'day mate,
            </div>
            <div className={styles.intro}>
              <p>I'm Young Liu, a front-end developer, located in Shanghai, China.</p>
              <p>我是刘召阳，一个前端工程师，目前在上海。</p>
            </div>
          </div>
        </div>
      </main>
  );
}
