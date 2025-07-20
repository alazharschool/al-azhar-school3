// app/blog/articles/[id]/page.tsx
import ArticleCard from "@/components/article-card";

export default async function ArticlePage({ params }: { params: { id: string } }) {
  // الآن id متوفر من params
  const { id } = params;

  let data = null;
  try {
    const res = await fetch(`https://your-api.com/posts/${id}`, { cache: 'no-store' });
    data = await res.json();
  } catch (e) {
    data = null;
  }

  if (data && typeof data === "object" && "id" in data) {
    return <ArticleCard post={data} key={data.id} />;
  }

  return <div>Post not found</div>;
}
