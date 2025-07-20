// app/blog/arabic-language/page.tsx
import ArticleCard from "@/components/article-card";

export default async function ArabicLanguagePage() {
  let data = null;
  try {
    const res = await fetch("https://your-api.com/posts/arabic-language", { cache: 'no-store' });
    data = await res.json();
  } catch (e) {
    data = null;
  }

  // إذا رجع كائن فيه id
  if (data && typeof data === "object" && "id" in data) {
    return <ArticleCard post={data} key={data.id} />;
  }

  // إذا رجع مصفوفة فيها مقالات
  if (Array.isArray(data) && data.length > 0 && data[0].id) {
    return <ArticleCard post={data[0]} key={data[0].id} />;
  }

  // إذا لم يرجع شيء أو لا يوجد id
  return <div>Post not found</div>;
}
