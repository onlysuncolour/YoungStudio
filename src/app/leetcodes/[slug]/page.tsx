import { getAllDocsMeta, getDoc } from "@/services/post";
import MyMdx from "@/components/my-mdx";
export async function generateStaticParams() {
  const metas = await getAllDocsMeta('leetcode');
  return metas.map((post) => {
    return { slug: post.meta.slug };
  });
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getDoc(params.slug, 'leetcode');
  let postComponents = {};
  try {
    postComponents = await import(
      "../../../leetcodes/" + params.slug + "/components.ts"
    );
  } catch (e: any) {
    if (!e || e.code !== "MODULE_NOT_FOUND") {
      throw e;
    }
  }

  return <MyMdx post={post} postComponents={postComponents} />
}