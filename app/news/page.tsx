'use client';

import Link from 'next/link';
import Image from 'next/image';
import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/components/NewsList';

export default function NewsPage() {
    const news = DUMMY_NEWS
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">News Page</h1>

      <NewsList news={news} />

    </div>
  );
}
