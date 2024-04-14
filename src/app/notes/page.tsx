import { getAllDocsMeta } from "@/services/post";
import Link from "next/link";
import styles from './page.module.css'
export default async function Posts() {
  const posts = await getAllDocsMeta('note');

  return <div className={styles.root}>
    {
      posts.map(post => 
        <Link
          className={styles.post}
          // className="block scale-100 py-4 hover:scale-[1.005] active:scale-100"
          key={post.meta.id}
          href={"/notes/" + post.meta.slug + "/"}
        >
          <article>
            {/* <PostTitle post={item} /> */}
            <div className={styles.postTitle}>
              { post.meta.title }
            </div>
            <p className={styles.postDate}>
              {new Date(post.meta.date).toLocaleDateString("cn", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
            <p className={styles.postBrief}>{post.meta.spoiler}</p>
          </article>
        </Link>
      )
    }
  </div>
}