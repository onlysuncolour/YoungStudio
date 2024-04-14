'use client'

import './markdown.css'
import styles from './index.module.css'
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { getPostWords, readingTime } from '@/utils';
type TMyMdxProps = {
  post: any,
  postComponents: any,
}
export default function MyMdx({
  post,
  postComponents
}: TMyMdxProps) {

  const words = getPostWords(post.content);
  const readTime = readingTime(words);
  
  return <div className={styles.root}>
    <article>
      <h1
        className={styles.title}
      >
        {post.meta.title}
      </h1>
      <p className={styles.date}>
        {new Date(post.meta.date).toLocaleDateString("cn", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </p>

      {/* <p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">
      字数：{words}
    </p>
    <p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">
      预计阅读时间：{readTime}分钟
    </p> */}
      <div className="markdown margin-top-10">
        <MDXRemote
          source={post?.content || ""}
          components={{
            ...postComponents,
          }}
          options={{
            parseFrontmatter: true,
            mdxOptions: {
              // @ts-ignore
              remarkPlugins: [remarkMath],
              rehypePlugins: [
                // @ts-ignore
                rehypeKatex,
                [
                  // @ts-ignore
                  rehypePrettyCode,
                  {
                    theme: "material-theme-palenight",
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  </div>
}