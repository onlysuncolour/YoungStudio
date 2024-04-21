import path from "path";
import fs from "fs"
import matter from "gray-matter";
import { pinyin } from "pinyin-pro";
import { isChinese } from "@/utils";

type DocType = 'post' | 'note' | 'leetcode' | 'resume'

const postsDirectory = path.join(process.cwd(), "src", "posts");
const notesDirectory = path.join(process.cwd(), "src", "notes");
const leetcodesDirectory = path.join(process.cwd(), "src", "leetcodes");
const resumesDirectory = path.join(process.cwd(), "src", "resumes");

const directoryMap = {
  post: postsDirectory,
  note: notesDirectory,
  leetcode: leetcodesDirectory,
  resume: resumesDirectory
}
export const getAllDocsMeta = async (type: DocType) => {
  const rootDirectory = directoryMap[type];
  // 获取到src/posts/下所有文件
  const dirs = fs
    .readdirSync(rootDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  // 解析文章数据，拿到标题、日期、简介
  let datas = await Promise.all(
    dirs.map(async (dir) => {
      const { meta, content } = await getDocBySlug(dir, type);
      return { meta, content };
    }),
  );

  // 文章日期排序，最新的在最前面
  datas.sort((a, b) => {
    return Date.parse(a.meta.date) < Date.parse(b.meta.date) ? 1 : -1;
  });
  return datas;
};

export const getDocBySlug = async (dir: string, type: DocType) => {

  const rootDirectory = directoryMap[type]
  const filePath = path.join(rootDirectory, dir, "/index.mdx");

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  // gray-matter库是一个解析markdown内容，可以拿到markdown文件的meta信息和content内容
  const { data } = matter(fileContent);

	// 如果文件名是中文，转成拼音
  const id = isChinese(dir)
    ? pinyin(dir, {
        toneType: "none",
        separator: "-",
      })
    : dir;

  return {
    meta: { ...data, slug: dir, id },
    content: fileContent,
  } as PostDetail;
};

export async function getDoc(slug: string, type: DocType) {
  const posts = await getAllDocsMeta(type);
  if (!slug) throw new Error("not found");
  const post = posts.find((post) => post.meta.slug === slug);
  if (!post) {
    throw new Error("not found");
  }
  return post;
}