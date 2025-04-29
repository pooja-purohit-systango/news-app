import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/lib/news";

interface FilteredNewsPageProps {
  params: {
    year: string;
  };
}

export default function FilteredNewsPage({ params }: FilteredNewsPageProps) {
  const newsYear = parseInt(params.year);
  const news = getNewsForYear(newsYear);

  if (!news || news.length === 0) {
    return (
      <div>
        <p className="text-xl font-semibold">No news found for {newsYear}.</p>
      </div>
    );
  }

  return (
    <div >
      <h1 className="text-3xl font-bold mb-6 text-center">
        News from {newsYear}
      </h1>
      <NewsList news={news} />
    </div>
  );
}
