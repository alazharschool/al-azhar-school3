import ArticleCard from "@/components/article-card";

// دالة لجلب بيانات المقال
async function getPost() {
  return {
    id: "1",
    title: "تعلم اللغة العربية",
    description: "مقال رائع عن تعلم اللغة العربية لغير الناطقين بها.",
    content: "تفاصيل المقال هنا...",
    image: "/images/arabic-language.jpg",
  };
}

export default async function ArabicLanguagePage() {
  const post = await getPost();

  return <ArticleCard post={post} key={post.id} />;
} 