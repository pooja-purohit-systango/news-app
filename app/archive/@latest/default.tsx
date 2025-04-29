import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";

export default function ArchiveLatestPage() {
  const latestNews = getLatestNews();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Latest News</h1>
      <NewsList news={latestNews} />
    </div>
  );
}
