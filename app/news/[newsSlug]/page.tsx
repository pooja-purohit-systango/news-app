'use client';

import Image from 'next/image';
import { DUMMY_NEWS } from '@/dummy-news';

interface NewsItemProps {
  params: {
    newsSlug: string;
  };
}

export default function NewsItem({ params }: NewsItemProps) {
  const { newsSlug } = params;

  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-10">
        <h1 className="text-2xl font-bold">News Not Found</h1>
        <p>The news item you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <Image
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          width={800}
          height={500}
          className="w-full h-auto rounded"
        />
        <h1 className="text-4xl font-bold mt-6">{newsItem.title}</h1>
        <div>Created on : {newsItem.date}</div>
        <p className="mt-4 text-lg">{newsItem.content}</p>
      </div>
    </div>
  );
}



























